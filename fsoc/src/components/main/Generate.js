import { useState ,useEffect} from "react"
import React  from 'react'
import "./Generate.css"
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {successToast,errorToast} from '../alert'




const Main = () => {
  const { userId } = useParams();
  let navigate = useNavigate()
  let len = userId.length
  if(len <24){
   errorToast("invaild route Please enter valid")
  }
  
  const [prompt,setPrompt] = useState('')
  const [nishnat,setNishnat] = useState([])
  const [loading,setLoading] = useState(false)
  
  const token = localStorage.getItem("group2project-5")

  // console.log(token);
  if(!token){
    navigate('/')
    errorToast("please login first")
  }

    const create = function (event) {

      setLoading(true)
      event.preventDefault()
      
      axios.post(`https://saber-fish-estimate.glitch.me/image/generateImage/${userId}`,{prompt},{'headers': {'Authorization': 'Bearer ' + token}})
        .then((res) => {
          
          setNishnat(res.data.data.imageUrl)
          
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false) 
          errorToast(error.response.data.message + " Error")
        })
    }
   

    // const routeChange = () =>{ 
    //   let path = `/image/getImage/${userId}`; 
    //   navigate(path);
    // }



  return (
   <div className='divn'>
       
       <form onSubmit={create}  className="form">
            <p className="h1">Descibe Your Text</p>
            <input className="prompt" type="text" placeholder='Enter text' onChange={((e)=>setPrompt(e.target.value))} /> <br/>
            {/* <input placeholder='enter size' /> <br/> */}
            {/* <button type="submit">Generate</button> */}
            {loading ? "":(<input className="battan" type="submit" placeholder="Generate" />)}
            {loading ? <div>
                      <Spinner className="spinner" animation="border" variant="info" />
                     
                      </div>
            
                                 : ""  }
                <br />


            
        </form>
        <div>
                            <div className="row">
                      <div className="column">
                        <img src={nishnat[0]}  />
                      </div>
                      {/* <div className="column">
                        <img src={nishnat[1]} />
                      </div>
                      <div className="column">
                        <img src={nishnat[2]}/>
                      </div> */}
                    </div>
       
          
        </div>
        <br />
        {/* <Button className="get" onClick={routeChange}>Get All Images</Button> */}

    </div>
  )
            
}


export default Main
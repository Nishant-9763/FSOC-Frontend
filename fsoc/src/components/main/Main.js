import { useState ,useEffect} from "react"
import React  from 'react'
import "./Main.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';


const Main = () => {
  const { userId } = useParams();
  if(userId.length <24){
    alert("invaild route Please enter valid")
  }
  let navigate = useNavigate()
  
  const [prompt,setPrompt] = useState('')
  const [nishnat,setNishnat] = useState([])
  const [loading,setLoading] = useState(false)
  
  const token = localStorage.getItem("group2project-5")

  // console.log(token);
  if(!token){
    navigate('/')
    alert("please login first")
  
  }
    const create = function (event) {


      setLoading(true)
      event.preventDefault()
      
      axios.post(`http://localhost:3001/image/generateImage/${userId}`,{prompt},{'headers': {'Authorization': 'Bearer ' + token}})
        .then((res) => {
          
          setNishnat(res.data.data.imageUrl)
          
          setLoading(false)
        })
        .catch((error) => {
         
          alert(error.response.data.message + " Error")
        })
    }
   

    const routeChange = () =>{ 
      let path = `/image/getImage/${userId}`; 
      navigate(path);
    }



  return (
    <div className='divn'>
       
       <form onSubmit={create}  className="form">
            <p className="h1">Descibe Your Text</p>
            <input className="prompt" type="text" placeholder='Enter text' onChange={((e)=>setPrompt(e.target.value))} /> <br/>
            {/* <input placeholder='enter size' /> <br/> */}
            {/* <button type="submit">Generate</button> */}
            {loading ? "":(<input className="btn" type="submit" placeholder="Generate" />)}
            {loading ? <div>
                      <Spinner className="spin" animation="border" variant="info" />
                     
                      </div>
            
                                 : ""  }
                <br />


            
        </form>
        <div>
                            <div class="row">
                      <div class="column">
                        <img src={nishnat[0]}  />
                      </div>
                      <div class="column">
                        <img src={nishnat[1]} />
                      </div>
                      <div class="column">
                        <img src={nishnat[2]}/>
                      </div>
                    </div>
       
          
        </div>
        <br />
        <Button className="get" onClick={routeChange}>Get All Images</Button>

    </div>
  )
            
}


export default Main
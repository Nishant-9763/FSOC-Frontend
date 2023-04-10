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
import { Button } from 'react-bootstrap';


const Main = () => {
  const { userId } = useParams();
  // console.log(useParams());
  let navigate = useNavigate()
  
  const [prompt,setPrompt] = useState('')
  const [nishnat,setNishnat] = useState('')
  const [loading,setLoading] = useState(false)
  
  const token = localStorage.getItem("group2project-5")

  // console.log(token);
  if(!token){
    navigate('/login')
    alert("please login first")
  
  }
    const create = function (event) {


      setLoading(true)
      event.preventDefault()
      
      axios.post(`http://localhost:3001/image/generateImage/${userId}`,{prompt},{'headers': {'Authorization': 'Bearer ' + token}})
        .then((res) => {
          
          console.log(res.data.data);
          setNishnat(res.data.data.imageUrl)
          setLoading(false)
        })
        .catch((err) => {
          alert(err.response.data.message + " Error")
          navigate('/login')
        })
    }
   

    const routeChange = () =>{ 
      let path = `/image/getImage/${userId}`; 
      navigate(path);
    }



  return (
    <div className='divn'>
       
       <form onSubmit={create}  className="form">
            <h1>Descibe Your Text</h1>
            <input className="prompt" type="text" placeholder='Enter text' onChange={((e)=>setPrompt(e.target.value))} /> <br/>
            {/* <input placeholder='enter size' /> <br/> */}
            {/* <button type="submit">Generate</button> */}
            {loading ? "":(<input className="btn btn-primary" type="submit" placeholder="Generate" />)}
            {loading ? <div>
                      <Spinner animation="border" variant="info" />
                     
                      </div>
            
                                 : ""  }
                <br />

            <img border="primary"  src={nishnat} width={"600px"} height={"400px"}/> 
        </form>

        <Button onClick={routeChange}>Get Image</Button>

    </div>
  )
            
}


export default Main
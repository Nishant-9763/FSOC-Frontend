import React, { useEffect, useState } from "react";
import "./homePage.css";
// import Button from "react-bootstrap/Button";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Main from "../main/Main";


const HomePage = () => {

  const navigate = useNavigate()
  const { userId } = useParams();
if(userId.length <24){
  console.log("error");
}

  // const userId = localStorage.getItem("userId")
  // console.log(userId);
 

    const [userData,setUserData] = useState([])

    const token = localStorage.getItem("group2project-5")
    if(!token){
      alert("please login first")
    
      navigate('/')
    }
    function getUser(){ 
     axios.get(`http://localhost:3001/image/getImage/${userId}` ,  {'headers': {'Authorization': 'Bearer ' + token}} )
     
     .then((res)=>{
       if(res.data.data.length==0) return (<h1>  Images not created Yet</h1>)
       if(res.data.data.length == 0) {console.log("no data present");}
       setUserData(res.data.data)
       
     }).catch((error)=>{
     
      alert( error.response.data.message + " Error")
     
    
      // navigate('/')
     
       })
        
     }
    useEffect(()=>{

    getUser()
      
    },[])
  
function deleteImage(id){
  alert(" Image deleted ")
  axios.delete(`http://localhost:3001/image/deleteImage/${userId}/${id}`, {'headers': {'Authorization': 'Bearer ' + token}})
  .then((res)=>{
    if(res.length===0)return (alert("No Images created , Please create Image by clicking ob button"))
    getUser()
  })
}

const routeChange = () =>{ 
  let path = `/image/generateImage/${userId}`; 
  navigate(path);
}

  return (
    <div className="homepage">
      

      <Container>
      <Row className="my-4">
        <Col>
          {/* <h1>My Blog</h1> */}


        </Col>
      </Row>
      <Row className="my-4">


        {userData.map(book => (
          <Col md={4} key={book._id}>
            
            <Card className="card">
              <Card.Img variant="top" src={book.imageUrl} />
              <Card.Body>
                <Card.Title>{book.prompt}</Card.Title>
              
                <Button variant="primary" className="delete"  onClick={()=>deleteImage(book._id)}>Delete</Button>
            
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <button variant='secondary' className="create" onClick={routeChange} > Create Image</button>
      
      
    </Container>
  
     
    </div>
  );
};

export default HomePage;

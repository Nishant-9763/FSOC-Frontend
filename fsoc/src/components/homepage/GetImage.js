import React, { useEffect, useState } from "react";
import "./GetImage.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {successToast,errorToast} from '../alert'




const HomePage = () => {

  const navigate = useNavigate()
  const { userId } = useParams();
  if(userId.length <24){
    errorToast("error : Please enter right userID");

}

  // const userId = localStorage.getItem("userId")
  // console.log(userId);
 

    const [userData,setUserData] = useState([])

    const token = localStorage.getItem("group2project-5")
    if(!token){
      navigate('/')
      errorToast("please login first")
    
    }
    function getUser(){ 
     axios.get(`http://localhost:3001/image/getImage/${userId}` ,  {'headers': {'Authorization': 'Bearer ' + token}} )
     
     .then((res)=>{
       if(res.data.data.length == 0) {successToast("No images to show ,Please create first")}
       setUserData(res.data.data)
       
     }).catch((error)=>{
     
      errorToast( error.response.data.message + " Error")
     
    
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
 
    getUser()
  })
}

// const routeChange = () =>{ 
//   let path = `/image/generateImage/${userId}`; 
//   navigate(path);
// }

  return (
    <div className="homepage">
      

      <Container>
      <Row className="my-4">
        <Col>
          


        </Col>
      </Row>
      <Row className="my-4">


        {userData.map(book => (
          <Col md={4} key={book._id}>
            
            <Card className="card">
              <Card.Img variant="top" src={book.imageUrl} />
              <Card.Body>
                <Card.Title>{book.prompt}</Card.Title>
              
                <button variant="primary" className="delete"  onClick={()=>deleteImage(book._id)}>Delete</button>
            
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <button variant='secondary' className="create" onClick={routeChange} > Create Image</button> */}
      
      
    </Container>
  
     
    </div>
  );
};

export default HomePage;

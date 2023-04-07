import React, { useEffect, useState } from "react";
import "./homePage.css";
// import Button from "react-bootstrap/Button";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {

    const [userData,setUserData] = useState([])

    useEffect(()=>{
       
        async function getUserData(){
            try{
            const userData = await axios.get("http://localhost:3001/image/getImage/642fb80f2cb77fe512568306")
            console.log(userData.data.data)
            setUserData(userData.data.data)
        }
       catch (error) {
        console.log(error);
       }
    }
       getUserData()
    },[])

  return (
    <div className="homepage">
      <h1>Hello HomePage</h1>
      {/* <div className="button">Logout</div> */}
     
        

{
    userData.map((student,i)=>{


       return ( 

        <Card style={{ width: "18rem" }} key={i}>
        <Card.Img
        
          variant="top"
          src={student.imageUrl}//"https://res.cloudinary.com/ddraawvgd/image/upload/v1680849218/1680849217670.png"
          height={200}
          width={200}
        />
        <Card.Body >
          <Card.Title  >{student.prompt}</Card.Title>
          
          <Button   variant="primary" color="red">Delete</Button>
       
        </Card.Body>
      </Card>
     
       )
    })
}
       
      
      
       
    
     

        
        
         
       
     
    </div>
  );
};

export default HomePage;

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
  // console.log(useParams())

  // const userId = localStorage.getItem("userId")
  // console.log(userId);
 

    const [userData,setUserData] = useState([])

    const token = localStorage.getItem("group2project-5")
    if(!token){
      alert("please login first")
    
      navigate('/login')
    }
    function getUser(){ 
     axios.get(`http://localhost:3001/image/getImage/${userId}` ,  {'headers': {'Authorization': 'Bearer ' + token}} )
     
     .then((res)=>{
       if(res.data.data.length == 0) {console.log("no data present");}
       setUserData(res.data.data)
      //  console.log(res.data);
       
     }).catch((error)=>{
      // alert("please login first")
      //  navigate('/login');
      alert(err.response.data.message + " Error")
     
    
      navigate('/login')
      //  console.log(error);
       })
        // console.log(userData.data.data)}
     
     }
    useEffect(()=>{


    // console.log("xx",token);

   
       
      //   async function getUserData(){
      //       try{
      //   }
      //  catch (error) {
      //   console.log(error);
      //  }
    getUser()
      //  getUserData()
    },[])
  //   const deleteImage=(e)=>{
  //     e.preventDefault()
  //        axios.delete(`http://localhost:3001/image/deleteImage/${userId}/${imageId}`,{ headers: { "x-auth-key": token } }).then(()=>{navigate('/')}).catch((a)=>alert(a.message))
  // }
function deleteImage(id){
  alert(id)
  axios.delete(`http://localhost:3001/image/deleteImage/${userId}/${id}`, {'headers': {'Authorization': 'Bearer ' + token}})
  .then((res)=>{
    console.log(res);
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
            
            <Card>
              <Card.Img variant="top" src={book.imageUrl} />
              <Card.Body>
                <Card.Title>{book.prompt}</Card.Title>
                {/* <Card.Text>
                  {book.reviews}
                </Card.Text> */}
                <Button variant="primary"  onClick={()=>deleteImage(book._id)}>Delete</Button>
            
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant='secondary' onClick={routeChange} > Create Image</Button>
      
      
    </Container>

       

        {/* <Card style={{ width: "20rem" }} className="img-strong  bg-image hover-zoom shadow-2-strong rounded-4 " key={i}>
        <Card.Img
         className='bg-image hover-zoom'
          variant="top"
          src={student.imageUrl}//"https://res.cloudinary.com/ddraawvgd/image/upload/v1680849218/1680849217670.png"
          height={200}
          width={200}
        />
        <Card.Body >
          <Card.Title  >{student.prompt}</Card.Title>
          
          <Button   variant="primary" color="red">Delete</Button>
       
        </Card.Body>
       
       
      </Card> */}
      {/* <br></br> */}
      
     
     
       
    {/* )
}
        */}
      
      
       
   
     

        
        
         
       
     
    </div>
  );
};

export default HomePage;

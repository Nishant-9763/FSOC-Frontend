import { useState } from "react"
import React  from 'react'
import "./Main.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";


const Main = () => {

    const [prompt,setPrompt] = useState('')
    const [nishnat,setNishnat] = useState('')
    const [loading,setLoading] = useState(false)

    const create = function (event) {
      setLoading(true)
      event.preventDefault()
      axios.post('http://localhost:3001/image/generateImage/642fb80f2cb77fe512568306', { prompt })
        .then((res) => {
          
          setNishnat(res.data.data.imageUrl)
         
          setLoading(false)
        })
        .catch((err) => {
          alert(err.response.data.message + " Error")
        })
    }

  return (
    <div className='divn'>
       
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   

        <form onSubmit={create}  className="form">
            <h1>Descibe Your Text</h1>
            <input className="prompt" type="text" placeholder='Enter text' onChange={((e)=>setPrompt(e.target.value))} /> <br/>
            {/* <input placeholder='enter size' /> <br/> */}
            {/* <button type="submit">Generate</button> */}
            {loading ? "":(<input className="btn btn-primary" type="submit" placeholder="Generate" />)}
            {loading ? <div>
                      <Spinner animation="border" variant="info" />
                      <Spinner animation="border" variant="primary" />
                      <Spinner animation="border" variant="secondary" />
                      <Spinner animation="border" variant="success" />
                      <Spinner animation="border" variant="danger" />
                      <Spinner animation="border" variant="warning" />
                      </div>
            
                                 : ""  }
            
              
                <br />

            <img border="primary"  src={nishnat} width={"600px"} height={"400px"}/> 
        </form>

    </div>
  )
}

export default Main
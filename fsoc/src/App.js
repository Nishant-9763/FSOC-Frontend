import { useState } from 'react';
import './App.css';
import HomePage from './components/homepage/GetImage';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Main from './components/main/Generate';
import Header from './components/header/nav';
import NotFound from './components/notFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  
  return (
    
    
       <BrowserRouter  className="App">
       
       <Header/>
       < ToastContainer/>
    <Routes>
         <Route path="/image/getImage/:userId" element={<HomePage />} />   
     <Route path="/image/generateImage/:userId" element={<Main/>} />  
        <Route path="/" element={<Login/>}   />
        <Route path="/register" element={<Register />} />
        <Route path='/*'  element={<NotFound/>}/> 
            
    </Routes>
  
  </BrowserRouter>     
   
  );
}

export default App;

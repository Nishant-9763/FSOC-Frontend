import { useState } from 'react';
import './App.css';
import HomePage from './components/homepage/homePage';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Main from './components/main/Main';
import Header from './components/header/nav';
import {userNotFound} from './components/notFound/NotFound'


function App() {

  const [user,setLoginUser] = useState({})

  

  return (
    
    < div >
    
       <BrowserRouter  className="App">
       
       <Header/>
    <Routes>
        <Route path="/image/getImage/:userId" element={<HomePage />} />
        <Route path="/image/generateImage/:userId" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path='*'  element={<userNotFound />}/>

        

      {/* <Route path="/image/getImage/:userId" element={user ? <HomePage/> : <Login setLoginUser={setLoginUser}/>} /> */}

     
        {/* <Route path="/login" element={<Login setLoginUser={setLoginUser} />} /> */}

        
    
    </Routes>
  </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;

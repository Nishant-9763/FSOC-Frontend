import { useState } from 'react';
import './App.css';
import HomePage from './components/homepage/homePage';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"


function App() {

  const [user,setLoginUser] = useState({})

  return (
    < div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/" element={user ? <HomePage/> : <Login setLoginUser={setLoginUser}/>} />
     
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />

        <Route path="/register" element={<Register />} />
        
    
    </Routes>
  </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;

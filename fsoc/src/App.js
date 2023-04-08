import { useState } from 'react';
import './App.css';
import HomePage from './components/homepage/homePage';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Main from './components/main/Main';


function App() {

  const [user,setLoginUser] = useState({})

  return (
    < div className="App">
      {/* <Main/> */}
       <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<Main/>} />
        <Route path="/login" element={<Login/>} />


        

      {/* <Route path="/" element={user ? <HomePage/> : <Login setLoginUser={setLoginUser}/>} /> */}

     
        {/* <Route path="/login" element={<Login setLoginUser={setLoginUser} />} /> */}

        <Route path="/register" element={<Register />} />
        
    
    </Routes>
  </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;

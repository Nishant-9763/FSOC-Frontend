import React,{useState}from "react";
import "./register.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {successToast,errorToast} from '../alert'


const Register = () =>{

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   

    

    const register = function (event) {
        event.preventDefault();
        axios.post('http://localhost:3001/user/register', {
           email,password,name,phone_number
        })
            .then((res) => {
                successToast(`Your registered Succesfully`)
                let naam = res.data.data.name
                // const token = res.data.token;
                localStorage.setItem("user_name", naam)
                 navigate('/')
            }).catch((err) => {
                errorToast(err.response.data.message + ""  +"Error")//+ err.response.status+ " Error"
            })
    }


    return(
        <div  className="register">
            
            <h1>Register</h1>
           
            <input type='name' placeholder="Name" onChange={((e) => setName(e.target.value))} required />
            <input type='phone_number' placeholder="Ph.Number" onChange={((e) => setPhone_number(e.target.value))} required/>
            <input type='email' placeholder="Email id" onChange={((e) => setEmail(e.target.value))} required />
            <input type='password' placeholder="Password" onChange={((e) => setPassword(e.target.value))} required/>
            

            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/")}>Login</div>

        </div>
    )
}

export default Register
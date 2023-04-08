import React,{useState}from "react";
import "./register.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () =>{

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    

    const register = function (event) {
        event.preventDefault();
        axios.post('http://localhost:3001/register', {
           email,password
        })
            .then((res) => {
                alert(`Your registered Succesfully`)
                const token = res.data.token;
                localStorage.setItem("group2project-5", token)
                // navigate('/')
            }).catch((err) => {
                alert(err.response.data.message)//+ err.response.status+ " Error"
            })
    }


    return(
        <div className="register">
            
            <h1>Register</h1>
           
            <input type='email' placeholder="Email id" onChange={((e) => setEmail(e.target.value))} />
            <input type='password' placeholder="Password" onChange={((e) => setPassword(e.target.value))}/>
            
            {/* <input type="password"  placeholder=" Re-enter Password"onChange={((e) => setreEnterPassword(e.target.value))}></input> */}

            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/login")}>Login</div>

        </div>
    )
}

export default Register
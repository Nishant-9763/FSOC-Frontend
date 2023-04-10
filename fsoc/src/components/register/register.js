import React,{useState}from "react";
import "./register.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
                alert(`Your registered Succesfully`)
                let naam = res.data.data.name
                // const token = res.data.token;
                localStorage.setItem("user_name", naam)
                 navigate('/login')
            }).catch((err) => {
                alert(err.response.data.message + "Error")//+ err.response.status+ " Error"
            })
    }


    return(
        <div className="register">
            
            <h1>Register</h1>
           
            <input type='name' placeholder="Name" onChange={((e) => setName(e.target.value))}/>
            <input type='phone_number' placeholder="Ph.Number" onChange={((e) => setPhone_number(e.target.value))}/>
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
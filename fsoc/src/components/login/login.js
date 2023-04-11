import React ,{useState}from "react";
import "./login.css"
import axios from "axios";
import {useNavigate} from"react-router-dom"


const Login = () =>{

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    

    const login = function (event) {
        event.preventDefault();
        axios.post('http://localhost:3001/user/login', {
           email,password
        })
            .then((res) => {
                alert(`Your Acount Login Succesfully`)
            const userId  =  res.data.data.userId
                console.log(res.data.data.token);

                const token = res.data.data.token;
                // console.log(token)
                localStorage.setItem('group2project-5',token)
                localStorage.setItem('user_id',userId)
                
                // localStorage.setItem('userId',userId)


                navigate(`/image/getImage/${userId}`)
            }).catch((err) => {
                alert(err.response.data.message + err.response.status + " Error")
            })
    }


    return(
        <div className="login">
           
            <h1>Login</h1>
            <input type='email' placeholder="Email id" onChange={((e) => setEmail(e.target.value))} />
            <input type='password' placeholder="Password" onChange={((e) => setPassword(e.target.value))} />
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")}>Register</div>

        </div>
    )
}

export default Login
import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [isLogin , setisLogin] = useState(true);
    const navigate = useNavigate();

    const LoginHandler = () =>{
        navigate('/Home');
    }
  return (
    <div className="cont">
        <div className="toggle-buttons">
            <button onClick={() => setisLogin(true)}>Login</button>
        <button onClick={() => setisLogin(false)}>SigniIn</button>
        </div>
        {isLogin ? (
            <div className="form">
                <h2>Login</h2>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={()=> LoginHandler()}>Login</button>
            </div>
        ) : (
            <div className="form">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm-Password" />
                <button>Login</button>
            </div>
        )}
    </div>
  )
}

export default SignUp
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const navigate = useNavigate();

    return (
        <div className='auth-form-container'>
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input id="user-email" value={email} onChange={(e)=> {setEmail (e.target.value);console.log({email},document.getElementById("user-email"))}}type="email" placeholder="youremail@gmail.com"></input>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)}type="password" placeholder="*****" id="password" name="password"></input>
                <button type="submit">Log In</button>
            </form>
            <section className='button-class'>
            <button className="link-btn" onClick={()=>navigate("/register")}>Don't have an account? Register here.</button>
            </section>
        </div>
    )
}

export default Login
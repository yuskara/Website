import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Login.css'


const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <form className="login-form">
                <div className="login-tittle">Login</div>
                <fieldset className="login-field">
                    <label  className="login-label">
                        <input className="login-input" name="name" placeholder="Email or username"></input>
                    </label>
                </fieldset>
                <fieldset className="login-field">
                    <label className="login-label">
                        <input className="login-input" name="password" placeholder="Password"></input>
                    </label>
                </fieldset>
                <button className="login-btn" type="submit">Log in</button>
                <div className="login-div">
                    <span>No account?   </span>
                    <Link className="login-link" to="/">Create One!</Link>
                </div>
          </form>
        </div>
     );
}
 
export default LoginForm;
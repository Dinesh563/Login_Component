import React from "react";
import "../styles/Login.css"

function Login() {
    return (
        <div className="login-form">
            <h1> Login / Signup </h1>
            <form>
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit"> Login </button>
            </form>
        </div>)
}
export default Login;
function Login() {
    return (
        <div className="login">
            <img src="../logo.svg" className="mini-logo" alt="minilogo" />
            <input type="text" name="uid" placeholder="Phone No."/>
            <input type="password" name="password" placeholder="Password"/>
            <button type="submit" name="Login"> Login </button>
        </div>
    )
}

export default Login;
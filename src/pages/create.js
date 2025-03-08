function Create() {
    return (
        <div className="create">
            <img src="src/logo.svg" className="mini-logo" alt="minilogo" />
            <input type="text" name="uid" placeholder="Phone No."/>
            <input type="text" name="uname" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
            <button type="submit" name="Login"> Login </button>
        </div>
    )
}

export default Create;
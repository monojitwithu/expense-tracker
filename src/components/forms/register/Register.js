import React from "react"

const Register=()=>{

    return(
        <>
        <form>
            <input type="text" className="regField"  placeholder="Your Name" name="name"/>
            <input type="text" className="regField"  placeholder="email" name="email"/>
            <input type="password" className="regField"  placeholder="Password" name="Password"/>
            <input type="submit" className="submitBtn" value="Create Account"/>


        </form>
        </>
    )
}


export default Register;
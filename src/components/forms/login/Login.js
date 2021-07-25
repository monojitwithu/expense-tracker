import React, { useState } from "react"


const Login=()=>{
    const [userDetail,setUserDetail]=useState({
        email:"",
        password:"",
        fireErrors:"",

})

    return(
        <>
        <form>
            <input type="text" className="regField"  placeholder="email" name="email"/>
            <input type="password" className="regField"  placeholder="Password" name="Password"/>
            <input type="submit" className="submitBtn" value="LOGIN"/>


        </form>


        </>
    )
}

export default Login;
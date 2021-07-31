import React, { useState } from "react"
import fire from "../../../config/Fire"


const Login=()=>{
    const [userDetail,setUserDetail]=useState({
        email:"",
        password:"",
        fireErrors:"",

})
const inputHandler=(e)=>{
    setUserDetail({...userDetail,[e.target.name]:e.target.value})

}
const login=(e)=>{
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(userDetail.email,userDetail.password)
    .catch((err)=>{
        setUserDetail({...userDetail,fireErrors:err.message})

    })
}
console.log(userDetail.fireErrors)


    return(
        <>
        {userDetail.fireErrors&& <div>{userDetail.fireErrors}</div>}
        <form>
            <input type="text" className="regField"  placeholder="email" name="email" onChange={inputHandler} value={userDetail.email}/>
            <input type="password" className="regField"  placeholder="Password" name="password" onChange={inputHandler} value={userDetail.password}/>
            <input onClick={login} type="submit" className="submitBtn" value="LOGIN"/>


        </form>


        </>
    )
}

export default Login;
import React, { useState } from "react"
import fire from "../../../config/Fire"

const Register=()=>{
    const [userData,setUserData]=useState({
        email:"",
        name:"",
        password:"",
        fireErrors:""

    })
    

    const inputHandler=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    
    const register=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(userData.email,userData.password)
        .then((user)=>{
        var currentUser=fire.auth().currentUser
        currentUser.updateProfile({
            displayName:userData.name
        })})
        .catch((error)=> setUserData({...userData,fireErrors:error.message}))

    }
    


    return(
        
        <>
        {userData.fireErrors && <div className="Error">{userData.fireErrors}</div>}
        
        <form>
            <input type="text" className="regField"  placeholder="Your Name" name="name" onChange={inputHandler} value={userData.name}/>
            <input type="text" className="regField"  placeholder="email" name="email" onChange={inputHandler} value={userData.email}/>
            <input type="password" className="regField"  placeholder="Password" name="password" onChange={inputHandler} value={userData.password}/>
            <input type="submit" className="submitBtn" onClick={register} value="Create Account"/>


        </form>
        </>
    )
}


export default Register;
import React, { useEffect, useState } from "react"
import Register from '../forms/register/Register'
import Login from "../forms/login/Login"
import fire from "../../config/Fire"
import Tracker from "../tracker/Tracker"


const Main=()=>{
    const [form,setForm]=useState(false)
    const [userdata,setUserData]=useState({
        user:1,
        loading:true
    })


  const fromSwitcher=()=>{
      form?setForm(false):setForm(true)
    }
    
    useEffect(()=>{
        authListner()

    },[])

    const authListner=()=>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                setUserData({...userdata,user:user})

            }else{
                setUserData({...userdata,user:null})
            }
        })
    } 

    return(
        <>
        {!userdata.user?
        (<div className="mainBlock"> 
        {form? <Register/> : <Login/>}

        
            <span className="underLine">
            Not Register?
            <button className="linkBtn" onClick={fromSwitcher}>Create an Account /Login</button>
        </span>
            
        
        
        </div>):(<Tracker/>)}
        </>
    )
        }


export default Main;
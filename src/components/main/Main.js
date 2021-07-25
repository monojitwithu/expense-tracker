import React, { useState } from "react"
import Register from '../forms/register/Register'
import Login from "../forms/login/Login"


const Main=()=>{
    const [form,setForm]=useState(false)


  const fromSwitcher=(action)=>[
      form?setForm(false):setForm(true)



  ]  

    return(
        <div className="mainBlock"> 
        {form? <Register/> : <Login/>}

        
            <span className="underLine">
            Not Register?
            <button className="linkBtn" onClick={fromSwitcher}>Create an Account /Login</button>
        </span>
            
        
        
        </div>
    )
}

export default Main;
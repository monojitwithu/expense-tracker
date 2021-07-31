import React from "react"
import fire from "../../config/Fire"


const Tracker=()=>{

    const logout=()=>{
        fire.auth().signOut()
    }

    return (
        <>
        <button onClick={logout}>Log Out</button>
        </>
    )
}


export default Tracker;
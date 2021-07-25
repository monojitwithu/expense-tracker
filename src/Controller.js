
import React from "react"
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "./components/main/Main.js";

const Controller=()=>{
    return(
        <Router>

            <Switch>
                <Route exact path="/" render={()=><Main/>}/>
            </Switch>





        </Router>
    )
}

export default Controller;
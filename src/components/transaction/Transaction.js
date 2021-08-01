import React from "react"


const Transaction=({price,name,type})=>{

    return(
        <li>
            <div>{name}</div>
            <div>{type==="deposit"?(<span className="deposit">+{price}</span>):  (<span className="expense">-{price}</span>)}</div>
        </li>
    )
}

export default Transaction;
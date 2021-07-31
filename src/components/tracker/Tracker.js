import React, { useState } from "react"
import fire from "../../config/Fire"


const Tracker=()=>{
    const [userTransaction,setUserTransaction]=useState({
        transaction:[],
        money:0,
        transactionName:"",
        transactionType:"",
        price:"",
        currentUID:fire.auth().currentUser.uid

    })
    let user= fire.auth().currentUser
    





    const logout=()=>{
        fire.auth().signOut()
    }

    const inputHandler=(e)=>{
        setUserTransaction({...userTransaction,[e.target.name]:e.target.value})
    }
    

    return (
        <>
        
        <div className="trackerBlock">
            <div className="welcome">
                <span>Hi, {user.displayName}</span>
                <button onClick={logout} className="exit">Log Out</button>
            </div>
            <div className="totalMoney">$145</div>
            <div className="newTransactionBlock">
                <div className="newTransaction">
                <form>
                    <input placeholder="Transaction Name"type="text" name="transactionName" onChange={inputHandler} value={userTransaction.transactionName}/>
                    <div className="inputGroup">
                        <select name="transactionType" onChange={inputHandler} value={userTransaction.transactionType}>
                            
                            <option value="expense">Expense</option>
                            <option value="deposit">Deposit</option>
                        </select>
                        <input placeholder="Price" type="text" name="price" onChange={inputHandler} value={userTransaction.price}/>

                    </div>
                    
                    <button className="addTransaction">+ Add Transaction</button>


                </form>
                </div>


            </div>
            <div className="latestTransactions">
            <p>Latest Transaction</p>
            <ul>
                <li>
                    <div>ATM Deposit</div>
                    <div>+ $5</div>
                </li>
            </ul>
            </div>

        </div>
        </>
    )
}


export default Tracker;
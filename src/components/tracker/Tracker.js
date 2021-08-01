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
    
    const addnewTransaction=(e)=>{
        
        e.preventDefault()
        const{transaction,money,transactionName,price,currentUID,transactionType}=userTransaction;
        
        if(transactionName && transactionType && price && transaction ){
            const backupState=userTransaction.transaction
            console.log("working")
          
            
           
            backupState.push({
                id:backupState.length+1,
                name: transactionName,
                type: transactionType,
                price:price,
                user_id: currentUID
            })
            fire.database().ref('Transaction/' + currentUID).push({
                id:backupState.length,
                name:transactionName,
                type:transactionType,
                price:price,
                user_id:currentUID

            }).then((data)=>{
                console.log("success")
                setUserTransaction({
                    transaction:backupState,
                    money:transactionType==="deposit"?money+parseFloat(price):money-parseFloat(price),
                    transactionName:"",
                    transactionType: '',
                    price:"",
                    currentUID:fire.auth().currentUser.uid

                })
                
            }).catch((err)=>console.log(err.message))


        }

        

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
                    
                    <button className="addTransaction" onClick={addnewTransaction}>+ Add Transaction</button>


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
import React, { useEffect, useState } from "react"
import fire from "../../config/Fire"
import Transaction from "../transaction/Transaction"


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
                    money:money+parseFloat(price),
                    transactionName:"",
                    transactionType: '',
                    price:"",
                    currentUID:fire.auth().currentUser.uid

                })
                
            }).catch((err)=>console.log(err.message))


        }

        

    }
    useEffect(()=>{
        getData()
        

    },[])

    const getData=()=>{
        const {currentUID,money}=userTransaction;
        let totalMoney=money;
        const backupState=userTransaction.transaction
        fire.database().ref('Transaction/'+ currentUID).once('value',(snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                totalMoney+= parseFloat( childSnapshot.val().price)
                backupState.push({
                    id:childSnapshot.val().id,
                    name:childSnapshot.val().name,
                    type:childSnapshot.val().type,
                    price:childSnapshot.val().price,
                    user_id:childSnapshot.val().user_id
                })

            })
            setUserTransaction({...userTransaction,transaction:backupState,money:totalMoney})
            
            

        })

    }
    
    

    return (
        <>
        
        <div className="trackerBlock">
            <div className="welcome">
                <span>Hi, {user.displayName}</span>
                <button onClick={logout} className="exit">Log Out</button>
            </div>
            <div className="totalMoney" style={{fontSize:"25px"}}> Total  Money Spent <span style={{color:"red",textShadow: "none",fontWeight:"800"} }  > ₹{userTransaction.money}</span></div>
            <div className="newTransactionBlock">
                <div className="newTransaction">
                <form style={{overflow:"hidden"}}>
                    <input placeholder="Transaction Name"type="text" name="transactionName" onChange={inputHandler} value={userTransaction.transactionName}/>
                    <div className="inputGroup">
                        <select name="transactionType" onChange={inputHandler} value={userTransaction.transactionType}>
                            <option value="0">Type</option>
                            <option value="expense">Expense</option>
                            {/* <option value="deposit">Deposit</option> */}
                        </select>
                        <input placeholder="Price" type="number" name="price" onChange={inputHandler} value={userTransaction.price} style={{ border:"1px solid #ddd",outline:"none" , height: "34px",marginTop: "5px"}}/>

                    </div>
                    
                    <button className="addTransaction" onClick={addnewTransaction}>+ Add Transaction</button>


                </form>
                </div>


            </div>
            <div className="latestTransactions" style={{maxHeight:"300px",overflow:"auto"}}>
            <p>Latest Transaction</p>
            <ul>
                {userTransaction.transaction.map(({price,name,type,id})=>
                <Transaction price={price} name={name} type={type}  key={id}/>
                )}
                
            </ul>
            </div>

        </div>
        </>
    )
}


export default Tracker;
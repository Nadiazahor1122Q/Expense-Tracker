import React from 'react'
import { useState,useContext } from 'react'
import {GlobalContext,} from '../../contex/GlobalState';
export default function AddTransaction() {

  let [description, setDescription] =useState();
  let [transactionAmount, setTransactionAmount] =useState();

  let {addTransaction} =useContext(GlobalContext);
  
  const onSubmit = (evt) => {
    evt.preventDefault(); 
      const newTransaction ={
          id:Math.floor(Math.random() * 100000000),
          description,
          transactionAmount: +transactionAmount
      }
      addTransaction(newTransaction);
  }




    return (
        <div>
            <h3>Add New Transaction</h3>
            <form  onSubmit={onSubmit
            }>

                <div className="form-control">
                  
                  <label htmlFor="description">Description</label>

                  <input type="text" id="description" placeholder="Detail of tansaction"
                   value={description}
                   onChange={(e)=>setDescription(e.target.value)}
                   />
                
            
                </div>

                <div className="form-control">

                   <label htmlFor="transactionamount"> Transaction Amount</label>

                   <input type="number"  id="transactionamount" placeholder="Enter transaction amount"
                    value={transactionAmount} 
                    onChange={(e)=>setTransactionAmount(e.target.value)}
                    />
                </div>
             <button className="btn"> Add Transaction</button>




            </form>
        </div>
    )
}

import React,{ createContext,useReducer } from "react";
  
// import the AddReducer
import  AppReducer from './AppReducer';


let  instialState ={
       transactions:[
           {id:1, description:'Income 1',transactionAmount:1000},
           {id:2, description:'Expense 1',transactionAmount:-100},
           {id:3, description:'Income 2',transactionAmount:2000},
           {id:4, description:'Expense 2',transactionAmount:-500},

       ]
}

 export let GlobalContext = createContext(instialState);

 export let GlobalProvider =({children}) =>{

    let [state, dispatch] =useReducer(AppReducer,instialState)
    
     function deleteTransaction(id){
         dispatch({
             type:'DELETE_TRANSACTION',
             payload:id
         });
     }
     function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
       return(
           <GlobalContext.Provider value={
               {

               transactions: state.transactions,
               deleteTransaction,
               addTransaction
            }
           }>
                 {children}
           </GlobalContext.Provider>
       )
 }
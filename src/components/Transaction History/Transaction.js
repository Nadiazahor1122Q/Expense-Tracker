
import React,{useContext} from 'react'
import {GlobalContext} from '../../contex/GlobalState';

export const Transaction = ({ transaction }) => {
  let {deleteTransaction} =useContext(GlobalContext);

    let sign = transaction.transactionAmount < 0 ? '-' : '+';
    let transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';
    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    )
}

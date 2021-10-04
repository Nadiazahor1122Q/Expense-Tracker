import React,{useContext} from 'react'
import {GlobalContext,} from '../../contex/GlobalState';
import { Transaction } from './Transaction';

export default function TransactionHistory() {

    let {transactions} = useContext(GlobalContext);
    // console.log(transactions);
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
            {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}

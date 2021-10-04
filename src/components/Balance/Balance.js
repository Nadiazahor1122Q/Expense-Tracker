import React, {useContext} from 'react'
import {GlobalContext,} from '../../contex/GlobalState';
export default function Balance() {

    let {transactions} = useContext(GlobalContext);

      let amounts = transactions.map(transaction => transaction.transactionAmount);
      
      let total =amounts.reduce((acc,item)=>(acc += item),0).toFixed(2);
    return (
        <>
            <h4>CURRENT BALANCE</h4>

            <h1>${total}</h1>
        </>
    )
}

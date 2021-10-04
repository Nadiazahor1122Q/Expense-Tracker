
import './App.css';
import { GlobalProvider } from './contex/GlobalState';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import AccountSummary from './components/AccountSummary/AccountSummary';
import TransactionHistory from './components/Transaction History/Transaction History';
import  AddTransaction from "./components/Add Transaction/AddTransaction"


function App() {
  return (
    <>
    <GlobalProvider>
    <Header/>
    <div className="container">
    <Balance/>
    <AccountSummary/>
    <TransactionHistory/>
    <AddTransaction/>
    </div>

    </GlobalProvider>
    </>
  );
}

export default App;

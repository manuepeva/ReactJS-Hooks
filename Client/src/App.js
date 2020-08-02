import React from 'react';
import Header from './components/header/Header';
import Balance from './components/balance/Balance'
import IncomeExpenses from './components/incomeexpenses/IncomeExpenses';
import TransactionList from './components/transactionlist/TransactionList';
import AddTransaction from './components/addtransaction/AddTransaction';
import GlobalProvider from './context/GlobalState';

import './components/styles/styles.css';



const App = () => {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    )
}

export default App

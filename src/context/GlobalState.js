import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';


const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 180 },
        { id: 3, text: 'Expenses', amount: 120 },
        { id: 4, text: 'Christams', amount: 20 },
        { id: 5, text: 'Rain', amount: 300 },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{ transactions: state.transactions }}>
        {children}
    </GlobalContext.Provider>)
}

export default GlobalProvider;
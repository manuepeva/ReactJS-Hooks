import React, { useState } from 'react';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text" />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter your text" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
export default AddTransaction;

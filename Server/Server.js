const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./Config/DB/db');
dotenv.config({ path: './Config/config.env' });

connectDB();

const transactions = require('./Routes/Transactions');
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}



app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../Client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../Client', 'build',
        'index.html')));
}



const PORT = process.env.PORT || 2800;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold));
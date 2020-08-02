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


app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 2800;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold));
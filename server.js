const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const app = express();
//dev logging

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
//use profile router

app.use('/api/v1/profile/',require('./routes/profile'))

const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log(`Server runinng in ${process.env.NODE_ENV} mode on port ${port}`);
})
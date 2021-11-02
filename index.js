
/*
@Autor : Yuri Domingos
Data   : 01 - 11 - 2021
Objectivo : Server file 
*/
const express = require('express')
const dotenv = require('dotenv');
const path = require('path');
const bodyparser = require('body-parser');
const application = express();
const connectDB = require('./Server/database/connection');
const PORT = process.env.PORT || 5000;

application.use(bodyparser.urlencoded({ extended: true}));

connectDB();

application.listen(PORT, ()=>{
    
    console.log(`Backend Rodando ${PORT}`)
})




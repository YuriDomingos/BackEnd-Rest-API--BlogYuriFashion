
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
const authRout = require('./Server/Routes/auth');
const PORT = process.env.PORT || 5000;


application.use(express.json()); 

connectDB();

application.use("/api/auth", authRout);

application.listen(PORT, ()=>{

    console.log(`Backend Rodando ${PORT}`)
})




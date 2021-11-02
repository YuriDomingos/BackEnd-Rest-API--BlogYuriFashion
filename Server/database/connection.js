/*
@Autor : Yuri Domingos
Data   : 02 - 11 - 2021
Objectivo : Conectar com a base de dados mongoDB
*/


const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const URI = process.env.MONGO_URL;

const connectDB = async ()=> {

    try {
        const con = await mongoose.connect(
            URI, {
                useNewUrlParser : true,
                useUnifiedTopology : true
            })
            
            console.log(`MongoDB connected  : ${con.connection.host}` );
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
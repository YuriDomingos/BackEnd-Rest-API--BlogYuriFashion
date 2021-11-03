
/*
@Autor : Yuri Domingos
Data   : 01 - 11 - 2021
Objectivo : Server file 
*/
const express = require('express')
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const bodyparser = require('body-parser');

const application = express();

const connectDB = require('./Server/database/connection');
const authRoute = require('./Server/Routes/auth');
const userRoute = require("./Server/Routes/users");
const postRoute = require("./Server/Routes/posts");
const categoryRoute = require("./Server/Routes/categories");

const PORT = process.env.PORT || 5000;

application.use(express.json()); 

connectDB();

const storage = multer.diskStorage({

    destination : (req, file, cb) =>{
        cb(null, "images")

    }, filename : (req, file, cb)=> {

        cb(null,req.body.name)
    }
})

// fazer o upload 

const upload = multer({ storage : storage});
application.post("/api/upload", upload.single("file"), (req, res)=>{

    res.status(200).json("File has been uploaded ")
})
// routes

application.use("/api/auth", authRoute );
application.use("/api/users", userRoute );
application.use("/api/post", postRoute);
application.use("/api/categories", categoryRoute);

application.listen(PORT, ()=>{

    console.log(`Backend Rodando ${PORT}`)  
})




/*
@Autor : Yuri Domingos
Data   : 02 - 11 - 2021
Objectivo : Construir o modelo de um usuário
*/

const mongose = require('mongoose');

const UserSchema = mongose.Schema({

    username : {
        type : String,
        required : true,
        unique : true
    },

    email : {

        type : String,
        required : true,
        unique : true
    },

    password : {

        type : String,
        required : true,
        unique : true 
    },

    profilePic : {

        type : String,
        default : "",

    },
}, { timestamps : true});


module.exports = mongose.model("User", UserSchema);
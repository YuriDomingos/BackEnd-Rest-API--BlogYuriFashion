

/*
@Autor : Yuri Domingos
Data   : 02 - 11 - 2021
Objectivo : Construir o modelo da postagens
*/

const mongose = require('mongoose');

const CategorySchema = mongose.Schema({

     title : {

        type : String,
        required : true,
        unique : true,
     },

     desc : {

        type : String,
        required : true,
     },

     photo :{

        type: String,
        required: false
     },

     username : {

        type : String,
        required : true,
        
     },

     categories : {

        type: Array,
        required : false
     }



    
}, { timestamps : true});


module.exports = mongose.model("Category", CategorySchema);


/*
@Autor : Yuri Domingos
Data   : 02 - 11 - 2021
Objectivo : Construir o modelo da postagens
*/

const mongose = require('mongoose');

const CategorySchema = mongose.Schema({

    name: {
        type : String,
        required : true
    }
    
}, { timestamps : true});


module.exports = mongose.model("Category", CategorySchema);
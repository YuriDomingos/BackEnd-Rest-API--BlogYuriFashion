/*
@Autor : Yuri Domingos
Data   : 02 - 11 - 2021
Objectivo :
*/

const router = require('express').Router();
const User = require('../models/User');


//  Register 

router.post("/register", async (req, res) => {

    

    try {

       
        const newUser = new User({

            username : req.body.username, 
             email : req.body.email,
            password: req.body.password,

        })

        console.log(newUser);
        
        const user = await newUser.save();
       
        res.status(200).json(user);


    } catch (err) {
        res.status(500).json(err);
        console.log("coukd not create the user")
    }
})

// login 


module.exports = router
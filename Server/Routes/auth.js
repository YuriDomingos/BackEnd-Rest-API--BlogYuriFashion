/*
@Autor : Yuri Domingos
Data   : 02 - 11 - 2021
Objectivo :
*/

const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//  Register 

router.post("/register", async (req, res) => {

    

    try {


        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt); 
        const newUser = new User({

            username : req.body.username, 
             email : req.body.email,
            password: hashedPass,

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

router.post("/login", async (req,res) => {

    try 
    {
       const user = await User.findOne({username : req.body.username})
       ! user && res.status(400).json("Wrong credentials");

       const validated = await bcrypt.compare(req.body.password, user.password)
       ! validated && res.status(400).json("Wrong credentials")

       res.status(200).json(user);

    } catch(err) {
           
        res.status(500).json(err);
    }
})


module.exports = router
/*
@Autor : Yuri Domingos
Data   : 03 - 11 - 2021
*/

/*
@Autor : Yuri Domingos
Data   : 02 - 11 - 2021
Objectivo :
*/

const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require("bcrypt");



// UPDATE POST

router.put("/:id", async (req, res) =>{

   try {

      const post = await Post.findById(req.params.id);

      if ( post.username === req.body.username) {

      try {
                 const updatedPost = await Post.findByIdAndUpdate(
                 req.params.id,
                 {
                     $set : req.body,
                 },
                 {new : true}
             );

             res.status(200).json(updatedPost);
        
        }catch(err){
            
            res.status(500).json(err);
         }   
      }
      else {
          res.status(401).json("Error you can only update your post");
      }

   }catch(err){
       res.status(500).json(err);
   }
})


// DELETE POST


router.delete("/:id", async (req, res) =>{

    if ( req.body.userId === req.params.id) {
        
        try {

            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username : user.username })
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted ...");
    
             }catch(err){
    
                res.status(500).json(err)
             }
        }catch(err){

            res.status(404).json("User not found");

        }

         
    }else  {
        res.status(401).json("You can delete only your account !");
    }

})

//GET USER

router.get("/:id", async (req, res)=>{

    try {
           
         const user = await User.findById(req.params.id);
         const {password, ...others} = user._doc;
         res.status(200).json(others);
          
    }catch(err){

        res.status(500).json(err);
    }
})


// CREATE POST 

router.post("/", async (req, res) => {

    const newPost = new Post(req.body );
  
    try {

        const savedPost = await newPost.save();   
        res.status(200).json(savedPost);

    }catch(err)
    { 
        res.status(500).json(err);
        console.log("Não deu para criar o poat ")
    }
})

module.exports = router;
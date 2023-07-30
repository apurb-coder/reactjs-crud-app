import express from "express" // for backend wala routing

import UserCollection from "../schema/user-schema.js"// importing table for user from database



const router= express.Router();

//when '/adduser' endpoint is called run the function below
router.post('/adduser',async (req,res)=>{
    const user=req.body; // to use req.body we must install body-parser 

    console.log(user)

    const newUser= new UserCollection(user);// validate user details according to schema
    
    try{
      await newUser.save();
      res.status(201).json(newUser); //send this response + show 201 status
    }
    catch(error){
      res.status(409).json({ message: error.message }); //on error this will show in network tab
    }
})

//when '/alluser' endpoint is called run the function below
router.get('/alluser',async(req,res)=>{
    try{
      const users = await UserCollection.find({});
      res.status(200).json(users); //send this response + show 200 status
    }catch(error){
        res.status(404).json({message:error.message})//on error this will show in network tab
    }
})




export default router;
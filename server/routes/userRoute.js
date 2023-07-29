import express from "express"; // for backend wala routing

import UserCollection from "../schema/user-schema.js"; // importing table for user from database

const userRouter = express.Router();

//when '/user/:id' endpoint is called run the function below (get Method)
userRouter.get('/:id',async(req,res)=>{ // :id is a variable here, means it will change 
    // console.log(req.params.id)
    try{
        const singleUserDetails= await UserCollection.find({_id:req.params.id})
        res.status(200).json(singleUserDetails);
    }catch(error){
        res.status(404).json({message:error.message})
    }
})

//when '/user/:id' endpoint is called run the function below (put method)
userRouter.put('/:id',async(req,res)=>{
    try{
        const editUserData = new UserCollection(req.body) // validate user details according to schema
        await UserCollection.updateOne({_id:req.params.id},editUserData)
        res.status(201).json(editUserData);
    }catch(error){
        res.status(409).json({message:error.message})
    }
})

//when '/user/:id' endpoint is called run the function below (delete method)
userRouter.delete('/:id',async(req,res)=>{
    try{
        await UserCollection.deleteOne({ _id: req.params.id });
        res.status(201).json({message:"user deleted sucessfully"});
    }
    catch(error){
        res.status(409).json({message:error.message})
    }
})



export default userRouter;// export karo varna error dega
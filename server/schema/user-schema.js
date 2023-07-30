import mongoose from "mongoose";


const userSchema = mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    phone: String,
  }
);



//creating table in  mongodb using mongoose
const userCollection=mongoose.model('userdetails',userSchema)


export default userCollection;
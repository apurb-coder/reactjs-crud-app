import mongoose from "mongoose"


export const Connection=async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@crud-app.87iuh0f.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Database connected sucessfully')
    }catch(error){
        console.log(`Error Occured in database connection`,error)
    }
}

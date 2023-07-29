import axios from "axios";



//always do error handling while calling api
export const addUser= async(data)=>{
    try{
        return await axios.post('/adduser',data); // post data in the database
        //axios.post() called '/adduser'--> in server/route.js, '/adduser' endpoint task is defined
    }catch(error){
        console.log("Error Occured",error);
    }

}

// for getting all users data
export const getUsers= async()=>{
    try{
        return await axios.get('/alluser') //calling '/alluser' endpoint from frontend
    }catch(error){
        console.log("Error Ocuured while calling /alluser Endpoint",error)
    }
}

//for getting single user data
export const getUser=async(id)=>{
    try{
        return await axios.get(`/user/${id}`) //calling 
    }catch(error){
        console.log("Error Occured while calling /getuser Endpoint",error)
    }
}

//for sending user details data
export const editUser=async(id,user)=>{
    try{
        await axios.put(`/user/${id}`,user) // put : update request
    }
    catch(error){
        console.log("while sending user details faced an error",error)
    }
}
// sending delete request
export const deleteUser=async(id)=>{
    try{
        await axios.delete(`/user/${id}`) //delete request
    }catch(error){
        console.log("while sending delete request faced an error",error)
    }
}





/*
POST: post data in the database
GET: get data from the database
delete: delete data from the database
put: for update

*/


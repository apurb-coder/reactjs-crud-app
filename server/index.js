import { Connection } from "./database/db.js";
import express from "express";
import router from "./routes/route.js"; // for backend wala routing importing route.js
import userRouter from "./routes/userRoute.js" // for backend wala routing importing userRoute.js
import bodyParser from "body-parser";
import dotenv from "dotenv"; //to use .env variables

dotenv.config();//to use .end variables

const app = express();

app.use(bodyParser.json({extended:true}));// to read a incoming request we must use it
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);//use route.js to handle endpoints that starts with '/'
app.use('/user/',userRouter); // use userRouter.js to handle enpoints that starts with '/user/'


const PORT = process.env.PORT || 8000;
const username=process.env.DB_USER;
const password=process.env.DB_PASSWORD;
//below function connecting to db
Connection(username,password);//user defined function from './database/db'


app.listen(PORT, () => {
  console.log(`Server is running on port-${PORT}`);
});



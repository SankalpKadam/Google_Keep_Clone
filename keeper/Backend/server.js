
import connection from './database.js';
import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from "./Routes/routes.js"
dotenv.config();
connection();
console.log(connection);
console.log(process.env.SERVER_PORT);
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
const PORT = 5000
app.listen(PORT,()=>{
    console.log("Server started on port" + PORT);
});
app.use(routes);


import connection from './database.js';
import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from "./Routes/routes.js";
import cors from 'cors';
dotenv.config();
connection();

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8000
app.use(routes);
app.listen(PORT,()=>{
    console.log("Server started on port " + PORT);
});

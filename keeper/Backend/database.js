import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connection =()=> mongoose.connect(process.env.DB_URI);


export default connection;

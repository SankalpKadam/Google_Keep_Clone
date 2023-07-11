import express from "express";
import SaveNote from "../Controllers/SaveNote.js";
const routes = express.Router();
routes.get("/",(req,res)=>{
    SaveNote(req,res)
});
routes.get("/save",(req,res)=>{SaveNote(req,res)})
export default routes;
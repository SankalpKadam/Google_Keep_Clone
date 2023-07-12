import express from "express";
import saveSingleNote,{deleteNote, findAll, updateNote} from "../Controllers/NoteOperations.js";
const routes = express.Router();
routes.get("/findall",findAll);
routes.post("/save",saveSingleNote);
routes.post("/update",updateNote);
routes.post("/delete",deleteNote);
export default routes;
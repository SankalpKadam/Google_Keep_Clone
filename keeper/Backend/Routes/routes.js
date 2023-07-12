import express from "express";
import saveSingleNote,{deleteNote, findAll, updateNote, deleteAllNotes} from "../Controllers/NoteOperations.js";
const routes = express.Router();
routes.get("/findall",findAll);
routes.post("/save",saveSingleNote);
routes.post("/update",updateNote);
routes.post("/delete",deleteNote);
routes.post("/deleteAll",deleteAllNotes);
export default routes;
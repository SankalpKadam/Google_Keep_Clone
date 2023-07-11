import mongoose from "mongoose";
import singleNote from "../Models/NoteModel.js";
import bodyParser from "body-parser";
async function saveSingleNote(req,res) {
    console.log(req);
    const newNote = new singleNote({Title:req.body.Title, Content:req.body.Content});
    await newNote.save()
    .then(res.send("successfully saved"))
    .catch(err => console.log("Error in saving", err));
}

async function findAll(req, res) {
    try{
        const allNotes=await singleNote.find({})
        res.send(allNotes)
    }
    catch(err){
        console.log("Error in reading", err.message);
    }
}

async function updateNote(req,res) {
    const updated = await singleNote.updateOne({Title: "My first note"},{Title: req.body.Title, Content:req.body.Content})
    .then(res.send("Record updated"))
    .catch(err=>console.log("Error while updating", err));
}

async function deleteNote(req, res) {
    await singleNote.deleteOne({Title: req.body.Title})
    .then(res.send("Record Deleted successfully"))
    .catch(err => console.log("Error while deleting", err));
}


export default saveSingleNote;
export {findAll, updateNote, deleteNote};

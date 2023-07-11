import mongoose from "mongoose";
import singleNote from "../Models/SaveNote.js";

async function saveSingleNote(req) {
    // const {Title, Content} = req.body;
    const newNote = new singleNote({Title:req.body.Title, Content:req.body.Content});
    newNote.save()
}

async function findAll(req, res) {
    await singleNote.find({}).then((items)=>{
        items.map(item => {
            res.send(item)
        })
    }).catch(err=>console.log(err));
}

async function updateNote() {
    const updated=await singleNote.updateOne({Title: "My FirstNote"},{Title: "MyFirstNote"})
    .then(res.send("Record updated"))
    .catch(err=>console.log("Error while updating", err));
}


export default saveSingleNote;
export {findAll, updateNote};

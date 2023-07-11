import mongoose from "mongoose";
import singleNote from "../Models/SaveNote.js";

async function updateNote() {
        const updated=await singleNote.updateOne({Title: "My FirstNote"},{Title: "MyFirstNote"})
        .then(res.send("Record updated"))
        .catch(err=>console.log("Error while updating", err));
    }

export default updateNote;
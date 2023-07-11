import mongoose from "mongoose";
const {Schema} = mongoose;
const noteSchema=new Schema({
    _id : String,
    Title:String,
    Content:String
});
const singleNote = mongoose.model('Note',noteSchema);

export default singleNote;
import axios from "axios";

const BASE_URI = "http://localhost:5000"

async function getNotes(setNotes){
    try {
        const res = await axios.get(`${BASE_URI}/findall`);
        // console.log(res.data);
        setNotes(res.data)
    } catch (error) {
        console.log(error.message);
    }
}

async function saveNote(note, setNotes) {
    try {
        // console.log(note);
        const res = await axios.post(`${BASE_URI}/save`,note);
        getNotes(setNotes)
    } catch (error) {
        console.log(error.message);
    }
}

async function deleteNote(note, setNotes) {
    try {
        const res= await axios.post(`${BASE_URI}/delete`,note)
        getNotes(setNotes)
    } catch (error) {
        console.log(error.message);
        
    }
}
async function updateNote(note, setNotes) {
    try {
        const res = await axios.post(`${BASE_URI}/update`,note)
        getNotes(setNotes)
    } catch (error) {
        console.log(error.message);
    }
}
export default getNotes;
export {saveNote, deleteNote, updateNote}
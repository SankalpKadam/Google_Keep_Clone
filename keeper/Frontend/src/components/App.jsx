import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import TakeNote from "../components/Notes/TakeNote.jsx";
import SideBar from "../components/Notes/sideBar.jsx";
import DisplayNotes from "./Notes/DisplayNotes.jsx";
import Trash from "./Trash.jsx";
import getNotes,{saveNote, deleteNote, updateNote} from "../utils/APIHandler.js";
function App() {
    const [trashClicked, setTrashActive] = useState("Notes")
    function trashWasClicked(params){
        (params==="Trash") ? setTrashActive("Trash") : setTrashActive("Notes")  
    }
    useEffect(()=>{
        getNotes(setNotes);
        setIsNote(true)
    },[]);
    
    const [notes, setNotes]=useState([]);
    const [isNote, setIsNote]=useState(false);
    const [isEdit, setEdit]=useState(false);
    const [editTableNote ,setEditableNote]=useState({
        Title:"",
        Content:"",
        _id:""
    })
    function addNote(params){
        saveNote(params, setNotes);
        setIsNote(true);
    }
    function removeNote(params){
        deleteNote({_id: params}, setNotes)
        console.log(notes, notes.length);
        if (notes.length===1){
            setIsNote(false)
        }
    }
    function edit(params) {
        setEditableNote({
                Title:params.Title,
                Content:params.Content,
                _id:params._id
            }
        )
        setEdit(true)
    }

    function editNote(params){
        console.log(params._id);
        updateNote(params, setNotes);
        setEdit(false);
    }
    return (
        <div>
            <Header />
            <SideBar onClick={trashWasClicked}/>
            {(trashClicked==="Trash") ?<Trash />:<div>
            <TakeNote onAddClick={addNote} editTable={isEdit} editNote={editNote} noteToFill={editTableNote}/>
            <DisplayNotes notesToDisplay={notes} isNote={isNote} deleteNote={removeNote} editNote={edit}/>
            </div>}
            
        </div>
    );
}

export default App;
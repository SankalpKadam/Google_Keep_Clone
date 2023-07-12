import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import TakeNote from "../components/Notes/TakeNote.jsx";
import SideBar from "../components/Notes/sideBar.jsx";
import DisplayNotes from "./Notes/DisplayNotes.jsx";
import Trash from "./Trash.jsx";
import getNotes,{saveNote, deleteNote, updateNote, deleteAllNotes} from "../utils/APIHandler.js";
function App() {

    const [menuClicked,setMenuClicked]=useState(false)
    const [trashClicked, setTrashActive] = useState("Notes")
    function trashWasClicked(params){
        (params==="Trash") ? setTrashActive("Trash") : setTrashActive("Notes")  
    }
    useEffect(()=>{
        getNotes(setNotes);
        setIsNote(true)
    },[]);
    
    const [notes, setNotes]=useState([]);
    const [tempDeletedNotes, setDeletedNotes]=useState([]);
    const [isDeleted, setDeleted]= useState(false)
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
        const deletedNote=notes.filter(note=>{
            return note._id === params
        })
        setDeletedNotes(prevNotes=>{
            return [ ...deletedNote, ...prevNotes]
        })
        setNotes(prevNotes=>{
            return prevNotes.filter(note=>{
                return note._id !== params
            })
        })
        setDeleted(true)
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

    function restoreNote(params) {
        setNotes(prevNotes=>{
            return [params, ...prevNotes]
        })
        setDeletedNotes(prevNotes=>{
            return prevNotes.filter(note=>{
                return note._id !== params._id
            })
        })
        console.log(tempDeletedNotes, tempDeletedNotes.length);

        if (tempDeletedNotes.length===0){
            setDeleted(false)
        }
        setIsNote(true)
    }

    function deleteAll(params){
        console.log(params);
        deleteAllNotes({idArray: params},setNotes)
        setDeletedNotes([])
        setDeleted(false)
    }
    
    return (
        <div>
            <Header searchBar={setNotes} menuClick={setMenuClicked}/>
            <div className="MainArea">

            <SideBar onClick={trashWasClicked} style={{flex:"1"}} menu={menuClicked}/>
            {   (trashClicked==="Trash") 
                ? 
                <Trash style={{width:"100%", alignItems:"center", justifyContent:"center"}} deletedNotes={tempDeletedNotes} isdelete={isDeleted} restore={restoreNote} deleteAllNotes={deleteAll}/>
                :
                <div style={{width:"100%", alignItems:"center", justifyContent:"center"}}>
                <TakeNote onAddClick={addNote} editTable={isEdit} editNote={editNote} noteToFill={editTableNote}/>
                <DisplayNotes 
                notesToDisplay={notes} 
                isNote={isNote} 
                deleteNote={removeNote} 
                editNote={edit}/>
                </div>
            }
            </div>
            
        </div>
    );
}

export default App;
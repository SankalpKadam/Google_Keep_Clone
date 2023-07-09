import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import TakeNote from "./TakeNote";



function App() {
    const [notes,setNote]=React.useState([])
    function addNote(params) {
        setNote(prevNotes => {
            const newNote={key:notes.length,id:notes.length,...params}
            return [...prevNotes,newNote]
        })
    }

    function deleteNote(params) {
        setNote(prevNotes=>{
            return (prevNotes.filter((Note, index)=> {
                return params !== index
            }))
        })
    }

    return (
    <div>
        <Heading />
        <TakeNote onClick={addNote}/>
        {notes.map( (note) =>{
            return <Note key = {note.key} id={note.id} title = {note.title} content = {note.content} onClick={deleteNote}/>
        })}
        <Footer />
    </div>
    );
}

export default App;
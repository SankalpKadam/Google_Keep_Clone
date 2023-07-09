import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import TakeNote from "./TakeNote";



function App() {
    const [notes,setNote]=React.useState([])
    function addNote(params) {
        setNote(prevNotes => {
            const newNote={key:notes.length,...params}
            return [...prevNotes,newNote]
        })
    }
    return (
    <div>
        <Heading />
        <TakeNote onClick={addNote}/>
        {notes.map( (note) =>{
             return <Note key = {note.key} title = {note.title} content = {note.content}/>
        })}
        <Footer />
    </div>
    );
}

export default App;
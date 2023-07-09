import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import TakeNote from "./TakeNote";



function App() {
    const [notes,setNote]=React.useState([])
    function addNote(params) {
        setNote(prevNotes => {
            return [...prevNotes,params]
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
        {notes.map( (note,index) =>{
            return <Note key = {index} id={index} title = {note.title} content = {note.content} onClick={deleteNote}/>
        })}
        <Footer />
    </div>
    );
}

export default App;
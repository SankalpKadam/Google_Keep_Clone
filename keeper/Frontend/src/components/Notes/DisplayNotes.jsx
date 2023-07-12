import React, { useState } from "react";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import Note from "./Note";
function DisplayNotes(props) {
    return (
        <div className="displayNotes">
        {!props.isNote ? 
            <div className="showWhenNoNotes">
            <TextSnippetOutlinedIcon  style={{display:"block", width:"100%", fontSize:"3rem"}}/>
            <p style={{display:"block", width:"100%"}}>
                Notes you add appear here
            </p>
            </div>
        :props.notesToDisplay.map((note)=>{
            return <Note 
            key={note._id} 
            id={note._id} 
            Title={note.Title} 
            Content ={note.Content} 
            deleteNote={props.deleteNote} 
            editNote={props.editNote} 
            entireNote={note}/>
        })}
        </div>
    );
}


export default DisplayNotes;
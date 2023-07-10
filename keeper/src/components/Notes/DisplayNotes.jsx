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
        :<Note/>}
        </div>
    );
}


export default DisplayNotes;
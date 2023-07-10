import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function TakeNote(params) {
    const fabButton = {
        backgroundColor: "#fbbc04",
        color:"white",
        left: "90%"
    }
    return (
        <div className="createNewNote" style={{width: "50%"}}>
            <input placeholder="Title"/>
            <textarea placeholder="Take a note"/>
            <Fab style={fabButton}>
                <AddIcon />
            </Fab>
        </div>
    );
}

export default TakeNote;
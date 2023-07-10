import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Trash() {
    return (
        <div className="displayNotes">
            <div className="showWhenNoNotes">
            <DeleteOutlinedIcon  style={{display:"block", width:"100%", fontSize:"3rem"}}/>
            <p style={{display:"block", width:"100%"}}>
                Notes you delete appear here
            </p>
            </div>
        </div>
    );
}

export default Trash;
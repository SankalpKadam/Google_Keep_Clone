import React,{useState} from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function DeletedNote(props) {
    const [showActions,setAction]=useState(false)
    
    const hoverStyle={
        border:"none",
        boxShadow: "0px 0px 4px 4px #eee"

    }  
    const fabButton={
        backgroundColor:"#fff",
        width:"1.5rem",
        height:"1.5rem",
        boxShadow : "none"
    }
    

    function showAvailableActions(event) {
        setAction(true)
    }
    function hideAvailableActions(event) {
        setAction(false)
    }

    return (
        <div className="singleNote" style={showActions ? hoverStyle : null} onMouseOver={showAvailableActions} onMouseOut={hideAvailableActions}>
            <h1>{props.Title}</h1>
            <p>{props.Content}</p>
            <Fab style={fabButton}>
            <RefreshIcon onClick={()=>{props.restoreNote(props.entireNote)}} className="actionIcons" style={{color:"grey"}}/>
            </Fab>
            
        </div>
    );
}

export default DeletedNote;
import React,{useState} from "react";
import Actions from "./Actions";
function Note(props) {
    const [showActions,setAction]=useState(false)
    
    const hoverStyle={
        border:"none",
        boxShadow: "0px 0px 4px 4px #eee"

    }  
    

    function showAvailableActions(event) {
        setAction(true)
    }
    function hideAvailableActions(event) {
        setAction(false)
    }

    return (
        <div className="singleNote" style={showActions ? hoverStyle : null} onMouseOver={showAvailableActions} onMouseOut={hideAvailableActions}>
            {/* <input 
            disabled={isEdit ? null:"disabled"} 
            value={isEdit? newNote.Title : props.Title} 
            onChange={handleChange}
            />
            <textarea 
            disabled={isEdit ? null:"disabled"} 
            value={isEdit?newNote.Content :props.Content}
            onChange={handleChange}
            /> */}
            <h1>{props.Title}</h1>
            <p>{props.Content}</p>
            {
                showActions ? <Actions id={props.id} deleteNote={props.deleteNote} editNote={props.editNote} entireNote={props.entireNote}/> :<div style={{marginTop:"3rem"}}/>
            }
            
        </div>
    );
}

export default Note;
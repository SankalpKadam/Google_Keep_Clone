import React,{useState} from "react";
import Actions from "./Actions";
function Note(props) {
    const [showActions,setAction]=useState(false)
    const [isEdit,setEditable]=useState(false)
    const [newNote,setNewNote]=useState({
        Title:props.Title,
        Content:props.Content
    })
    function editable(){
        setEditable(true)

    }
    const hoverStyle={
        border:"none",
        boxShadow: "0px 0px 4px 4px #eee"

    }  
    function handleChange(event) {
        const {name ,value} = event.target;
        setNewNote(prevNote=>{
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function showAvailableActions(event) {
        setAction(true)
    }
    function hideAvailableActions(event) {
        setAction(false)
    }

    return (
        <div className="singleNote" style={showActions ? hoverStyle : null} onMouseOver={showAvailableActions} onMouseOut={hideAvailableActions}>
            <input 
            contentEditable={isEdit && true} 
            value={isEdit?newNote.Title :props.Title} 
            onChange={handleChange}
            />
            <textarea 
            contentEditable={isEdit && true} 
            value={isEdit?newNote.Content :props.Content}
            onChange={handleChange}
            />
            {
                showActions ? <Actions id={props.id} deleteNote={props.deleteNote} editNote={editable}/> :<div style={{marginTop:"3rem"}}/>
            }
            
        </div>
    );
}

export default Note;
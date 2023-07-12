import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DeletedNote from "./Notes/DeletedNotes";

function Trash(props) {

    const customButton={
        width:"20%",
        backgroundColor:"#fbbc04",
        color:"white",
        fontWeight:"bold",
        fontFamily:"inherit",
        fontWeight:"bold",
        fontSize:"1rem",
        border:"none",
        boxShadow:"0px 0px 4px 4px #eee",
        borderRadius:"20px",
        padding:".3rem",
    }

    function emptyTrash(){
        var idArray=[]
        props.deletedNotes.forEach(element => {
            idArray.push(element._id)
        });
        props.deleteAllNotes(idArray)
    }

    return (
        <div className="displayNotes">
            {
                !props.isdelete?
                <div className="showWhenNoNotes">
                <DeleteOutlinedIcon  style={{display:"block", width:"100%", fontSize:"3rem"}}/>
                <p style={{display:"block", width:"100%"}}>
                    Notes you delete appear here
                </p>
                </div>
                
            :  
                <div>
                <p
                style={{
                    textAlign:"center",
                    fontFamily:"inherit",
                    margin:".5rem auto"
                }}>Want to delete notes permanently: <button style={customButton} onClick={emptyTrash}>Empty trash</button></p>
                {props.deletedNotes.map((deletedNote)=>{
                return <DeletedNote 
                key={deletedNote._id} 
                id={deletedNote._id} 
                Title={deletedNote.Title} 
                Content ={deletedNote.Content} 
                entireNote={deletedNote}
                restoreNote={props.restore}
                />
                })}
                </div>
            }
        </div>
    );
}

export default Trash;
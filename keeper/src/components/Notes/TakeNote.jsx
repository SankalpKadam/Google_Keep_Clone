import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'
function TakeNote(props) {
    const fabButton = {
        backgroundColor: "#fbbc04",
        color:"white",
        float:"right",
        position:"absolute",
        top:"30%",
        right:"26%"
    }
    const [singleNote, setSingleNote] = useState({
        Title:"",
        Content: ""
    })
    function handleChange(event) {
        const {name, value}=event.target;
        setSingleNote((prevNote)=>{
            return {
                ...prevNote,
                [name] :value
            }
        })
        
    }
    function addIconclicked(event){
        if(singleNote.Title === "" || singleNote.Content === ""){
            alert("Fill the title and content")
        }
        else{

            props.onAddClick(singleNote);
            setSingleNote(prevNote=>{return {Title:"",Content:""}});
            setClicked(false);
        }
    }

    const [isClicked,setClicked]=useState(false);
    function displayEntire(){
        isClicked ? setClicked(false) : setClicked(true)
    }


    return (
        <div className="createNewNote" style={{width: "50%"}}>
            {isClicked && <input placeholder="Title" name="Title" value={singleNote.Title} onChange={handleChange}/>}
            <textarea placeholder="Take a note" name="Content" onClick={displayEntire} onChange={handleChange} value={singleNote.Content}/>
            {isClicked &&
            <Zoom in={true} onClick={addIconclicked}>
            <Fab style={fabButton} >
                <AddIcon />
            </Fab>
            </Zoom> 
            }
        </div>
    );
}

export default TakeNote;
import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import EditIcon from '@mui/icons-material/Edit';

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
    function editIconclicked(event){
        props.editNote({
            ...singleNote,
            _id:props.noteToFill._id
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
    useEffect(()=>{
        if(props.editTable){
            console.log(props.noteToFill);
            setSingleNote({Title:props.noteToFill.Title, Content:props.noteToFill.Content})
        }
        else{
            setSingleNote({Title:"", Content:""})
        }
    },[props.editTable])

    return (
        <div className="createNewNote" style={{width: "50%"}}>
            {isClicked && <Zoom in={true}>
                <p style={{
                    width:"30%",
                    backgroundColor:"#32de84",
                    textAlign:"center",
                    borderRadius:"10px",
                    color : "white",
                    fontWeight:"bold",
                    margin:"-0.5rem auto 0 auto"
                }}>{props.editTable ? "Editor Mode" : "Creator Mode"}</p>
            </Zoom>}
            {isClicked && <input placeholder="Title" name="Title" value={singleNote.Title} onChange={handleChange}/>}
            <textarea placeholder="Take a note" name="Content" onClick={displayEntire} onChange={handleChange} value={singleNote.Content} rows={isClicked ? 3 :1}/>
            {isClicked &&
            <Zoom in={true} onClick={props.editTable?editIconclicked:addIconclicked}>
            <Fab style={fabButton} >
                {
                    props.editTable?<EditIcon />:<AddIcon />
                }
            </Fab>
            </Zoom> 
            }
        </div>
    );
}

export default TakeNote;
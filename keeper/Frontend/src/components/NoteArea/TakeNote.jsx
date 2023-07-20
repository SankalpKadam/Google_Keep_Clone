import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import EditIcon from '@mui/icons-material/Edit';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
function TakeNote(props) {
    const colors=["#ffffff","#000000","#f1f3f4","blue","green","pink","red"]
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
    const [backgroundOptions, setbackgroundOptions]=useState(false)


    const paletteControls={
        width:"70%",
        padding:".2rem 1rem",
        display:"flex",
    }
    const saveFabButton={
        width:"30%",
        backgroundColor:"#ffffff"
    }

    const [isClicked,setClicked]=useState(false);
    function displayEntire(){
        isClicked ? setClicked(false) : setClicked(true)
    }
    
    return (
        <div className="createNewNote">
            {isClicked && <Zoom in={true}>
                <p style={{
                    width:"30%",
                    backgroundColor:"#32de84",
                    textAlign:"center",
                    borderRadius:"10px",
                    color : "white",
                    fontWeight:"bold",
                    margin:"-0.5rem auto 0 auto",
                }}>{props.editTable ? "Editor Mode" : "Creator Mode"}</p>
            </Zoom>}
            {isClicked && <input placeholder="Title" name="Title" value={singleNote.Title} onChange={handleChange}/>}
            <textarea placeholder="Take a note" name="Content" onClick={displayEntire} onChange={handleChange} value={singleNote.Content} rows={isClicked ? 3 :1}/>
            {isClicked &&
            (<div className="OptionsPalette">
                <div style={paletteControls}>
                <ImageOutlinedIcon style={{width:"20%", marginRight:".5rem"}}/>
                <PaletteOutlinedIcon style={{width:"20%", marginRight:".5rem"}} onClick={()=>{
                    backgroundOptions?setbackgroundOptions(false):setbackgroundOptions(true)
                }}/>
                <UndoOutlinedIcon style={{width:"20%", marginRight:".5rem"}}/>
                <RedoOutlinedIcon style={{width:"20%", marginRight:".5rem"}}/>
                </div>
                <div style={saveFabButton}>
                    <button style={{
                        width:"80%",
                        backgroundColor:"#ffffff",
                        outline:"none",
                        border:".5px solid grey",
                        padding:".3rem 1rem",
                        borderRadius:"10px",
                        fontWeight:"bold"
                    }}>Save</button>
                </div>
            </div>)
            }


            {
                /*Rendering when palette clicked */
                backgroundOptions &&
            <div style={{
                width:"100%",
                marginTop:".2rem",
                display:"flex"
            }}>
            {
                colors.map((color, index)=>{
                    return (
                        
                <Fab style={{backgroundColor:color,transform:"scale(0.5)"}} key={index}>
                </Fab>
                    );

                })
            }
            </div>
            }


        </div>
    );
}

export default TakeNote;
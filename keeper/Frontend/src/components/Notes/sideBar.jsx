import React, { useState } from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeleteIcon from '@mui/icons-material/Delete';
import Slide from '@mui/material/Slide';

function SideBar(props) {
    const [isActive, setActive]=useState("Notes");
    function clickHandler(event){
        const id=event.target.id;
        ( id === "Notes")?setActive("Notes"):setActive("Trash");
        props.onClick(id);
    }
    return (
        <div className="sideBar">
            <div className="flexMe" onClick={clickHandler}>
                <p 
                style={{backgroundColor:(isActive === "Notes")?"#feefc3":"#ffffff",width:"50%"}}
                
                id="Notes">
                <LightbulbIcon style={{display:"inline-block", width:"50%"}}/>Notes
                </p>
            </div>
            <div className="flexMe" onClick={clickHandler}>
                <p style={{backgroundColor:(isActive === "Trash")?"#feefc3":"#ffffff",width:"50%"}}
                
                id="Trash">
                <DeleteIcon style={{display:"inline-block", width:"50%"}}/>
                Trash
                </p>
            </div>
        </div>
    );
}

export default SideBar;
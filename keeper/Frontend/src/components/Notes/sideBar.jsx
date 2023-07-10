import React, { useState } from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeleteIcon from '@mui/icons-material/Delete';
function SideBar(props) {
    const [isActive, setActive]=useState("Notes");
    function clickHandler(event){
        const id=event.target.id;
        ( id === "Notes")?setActive("Notes"):setActive("Trash");
        props.onClick(id);
    }
    return (
        <div className="sideBar">
            <p 
            style={{backgroundColor:(isActive === "Notes")?"#feefc3":"#ffffff",width:"100%",borderRight:"1px solid black",textAlign:"center"}}
            onClick={clickHandler}
            id="Notes">
            <LightbulbIcon />Notes
            </p>
            <p style={{backgroundColor:(isActive === "Trash")?"#feefc3":"#ffffff",width:"100%",textAlign:"center"}}
            onClick={clickHandler}
            id="Trash">
            <DeleteIcon/>
            Trash
            </p>
        </div>
    );
}

export default SideBar;
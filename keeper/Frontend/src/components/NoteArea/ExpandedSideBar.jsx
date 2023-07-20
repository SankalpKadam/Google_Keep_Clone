import React, { useEffect } from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeleteIcon from '@mui/icons-material/Delete';
import Slide from '@mui/material/Slide';

function SideBar(props) {
    useEffect(()=>{
        if (props.show) {
            document.getElementById("Menubar").style.left="0vh"
        }
        else{
            document.getElementById("Menubar").style.left="-100%"

        }
    },[props.show])
    return (
        // <Slide direction="right" mountOnEnter unmountOnExit>
        <div className="menuBar" id="Menubar">

            <div className="sideBar">
                <div className="menuItem">
                    <LightbulbIcon 
                        style={{
                            margin:"auto 0"
                        }}
                    />
                    <p id="Notes">
                    Notes
                    </p>
                </div>
                <div className="menuItem">
                    <DeleteIcon
                        style={{
                            margin:"auto 0"
                        }}
                    />
                    <p id="Trash">
                    Trash
                    </p>
                </div>
            </div>
            <div style={{
                width:"80%",
                backgroundColor:"black",
                opacity:".1"
            }}>

            </div>
        </div>
        // </Slide>

    );
}

export default SideBar;
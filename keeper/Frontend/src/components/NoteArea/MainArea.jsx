import React, { useEffect, useState } from "react";
import "../../styles/mainArea.css"
import SideBar from "./ExpandedSideBar.jsx";
import TakeNote from "./TakeNote";
import DisplayNotes from "./DisplayNotes";
function MainArea(props) {
    const notes=[
        {
            _id:"1",
            Title:"First Note",
            Content:"Testing"
        },
        {
            _id:"2",
            Title:"First Note",
            Content:"Testing"
        },
        {
            _id:"3",
            Title:"First Note",
            Content:"Testing"
        }
    ]
    return(
        <div className="mainArea">
            <SideBar show={props.show}/>
            <div id="NoteTakingArea">
                <TakeNote editTable={false}/>
                <DisplayNotes isNote={false} notesToDisplay={notes}/>
            </div>
        </div>
    );
}

export default MainArea;
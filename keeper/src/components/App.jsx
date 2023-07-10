import React, { useState } from "react";
import Header from "../components/Header/Header.jsx";
import TakeNote from "../components/Notes/TakeNote.jsx";
import SideBar from "../components/Notes/sideBar.jsx";
import DisplayNotes from "./Notes/DisplayNotes.jsx";
import Trash from "./Trash.jsx";

function App() {
    const [trashClicked, setTrashActive] = useState("Notes")
    function trashWasClicked(params){
        console.log(params);
        (params==="Trash") ? setTrashActive("Trash") : setTrashActive("Notes")  
    }
    const [notes, setNotes]=useState([]);
    const [isNote, setIsNote]=useState(false);
    function addNote(params){
        console.log(params);
        setNotes(prevNotes => {
            return [...prevNotes,params]
        })
        setIsNote(true)
    }
    return (
        <div>
            <Header />
            <SideBar onClick={trashWasClicked}/>
            {(trashClicked==="Trash") ?<Trash />:<div>
            <TakeNote onAddClick={addNote}/>
            <DisplayNotes notesToDisplay={notes} isNote={isNote}/>
            </div>}
            
        </div>
    );
}

export default App;
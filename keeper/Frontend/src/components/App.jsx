import React, { useState } from "react";
import Header from "./Header/Header.jsx";
import MainArea from "./NoteArea/MainArea.jsx";
function App() {
    const [menuclicked, setMenuClicked]=useState(false)
    function operateMenu() {
        menuclicked ? setMenuClicked(false): setMenuClicked(true)
    }
    return(
        <div>
            <Header menu={operateMenu} showMenu={menuclicked}/>
            <MainArea show={menuclicked}/>
        </div>
    );
}

export default App;
import React from "react";
import Header from "../components/Header/Header.jsx";
import TakeNote from "../components/Notes/TakeNote.jsx";
import SideBar from "../components/Notes/sideBar.jsx";

function App() {
    
    return (
    <div>
    <Header />
    <SideBar />
    <TakeNote />
    </div>
    );
}

export default App;
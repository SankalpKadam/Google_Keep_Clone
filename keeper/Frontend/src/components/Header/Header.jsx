import React from "react";
import "../../styles/header.css"
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import LightBulbIcon from "@mui/icons-material/Lightbulb";
import SettingsIcon from '@mui/icons-material/Settings';
import Controls from "./Controls";

function Header(props) {

    function openMenu(){
        props.menu()
    }

    return (
        <header>
            <div id="menu" onClick={openMenu}>
                <MenuIcon style={{backgroundColor:props.showMenu?"#f1f3f4":"#ffffff",padding:".5rem"}}/>
            </div>
            <div id="logo">
                <LightBulbIcon className="bulbIconStyle"/>
                <p>Keep</p>
            </div>
            <div id="searchBar">
                <SearchBar />
            </div>
            <div id="controls">
                <Controls />
            </div>
        </header>
    );

}

export default Header;
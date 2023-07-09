import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Fab from '@mui/material/Fab';
import AccountData from "./Account";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header(){
    const bulbIconStyle={
        color : "#fbbc04",
        borderRadius : "10%",
        marginRight : ".5rem",
        height:"40px"
    }
    const menu={
        marginLeft:"1.5rem",
        height: "100%",
        alignItems:"center"
    }

    const searchInput = {
        width:"85%",
        height:"100%",
        backgroundColor:"#f1f3f4",
        border:"none",
        outline:"none",
        fontSize:"1.3rem"
    }
    const searchButton = {
        height:"80%",
        margin:".2rem 0rem",
        backgroundColor : "#f1f3f4",
        boxShadow: "none",
        color:"grey"
    }
    return(
        <header>
                <MenuIcon style={menu}/>
                <div style={{padding:".5rem 0"}}>
                    <LightbulbIcon style={bulbIconStyle}/>
                    <h1 className="headerText">Keep</h1>
                </div>
                <div className="searchBar">
                <Fab style={searchButton}>
                <SearchIcon />
                </Fab>
                <input  placeholder="Search .." style={searchInput}/>
                </div>
            <div className="settingsInHeader">
                <RefreshIcon style={{margin:"0rem .5rem", height:"100%"}}/>
                <AccountCircleIcon style={{margin:"0rem 1.5rem", height:"100%"}}/>
            </div>
            
        </header>
    );
}

export default Header;
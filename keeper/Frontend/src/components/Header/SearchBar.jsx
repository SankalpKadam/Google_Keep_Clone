import React, { useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
function SearchBar() {
    
    const FabButton={
        height:"92%",
        margin:".2rem 0rem",
        backgroundColor : "#f1f3f4",
        boxShadow: "none",
        color:"grey",
        width:"10%"
    }
    return (
        <div className="searchInput">
            <Fab style={FabButton}>
                <SearchIcon />
            </Fab>
            <input placeholder="Search ..." />
        </div>
    );
}


export default SearchBar;
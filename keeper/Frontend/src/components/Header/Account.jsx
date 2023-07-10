import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AccountData(params) {

    function clicked(){
        console.log("clicked");
    }
    return (
        <div style={{display: "inline-block", margin:"-0.5rem 0rem", height : "100%"}}>
            <AccountCircleIcon onClick={clicked}/>
            {/* <div className="userAccountDetails">
                <p>Sankalp Kadam</p>
                <p>sankalptp07@gmail.com</p>
            </div> */}
        </div>
    );
}

export default AccountData;
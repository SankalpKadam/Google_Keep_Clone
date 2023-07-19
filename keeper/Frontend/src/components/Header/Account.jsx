import React, { useEffect } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import jwtdecode from "jwt-decode";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google"
function AccountData(params) {

    function handleresponse(response) {
        console.log(response);
    }

    useEffect(()=>{
        /* global google */
        
    },[])
    function clicked(){
        console.log("clicked");
    }
    return (
        <div style={{display: "inline-block", margin:"-0.5rem 0rem", height : "100%"}} id="signInDiv">
            {/* <AccountCircleIcon onClick={clicked}/> */}
            {/* <div className="userAccountDetails">
                <p>Sankalp Kadam</p>
                <p>sankalptp07@gmail.com</p>
            </div> */}
            <GoogleOAuthProvider clientId="617576154690-a7bou4fkn5snlel8qsfbmr6tk6j5prvv.apps.googleusercontent.com">
                <GoogleLogin 
                    onSuccess={credentialResponse=>{console.log(credentialResponse)}}
                    onError={()=>{
                        console.log("Login Failed")
                    }}
                    type="icon"
                    theme="outline"
                    size="medium"
                    text="Sign In with Google"
                />
            </GoogleOAuthProvider>
        </div>
    );
}

export default AccountData;
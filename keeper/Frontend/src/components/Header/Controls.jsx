import React from "react";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";

function Controls() {
    const client_id="617576154690-a7bou4fkn5snlel8qsfbmr6tk6j5prvv.apps.googleusercontent.com";
    return(
        <GoogleOAuthProvider clientId="str">
            <GoogleLogin 
                onSuccess={(res)=>{
                    console.log(res)
                }}
                onError={()=>{
                    console.log("Failure")
                }}
                type="standard"
                shape="rectangular"
                text="Sign In with Google"
            />
        </GoogleOAuthProvider>
    )
}

export default Controls;
import React from "react";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";

function Controls() {
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
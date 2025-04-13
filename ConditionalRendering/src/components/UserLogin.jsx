import { useState } from "react";

function UserLogin()
{
    const [isloggedIn,setisloggedIn]=useState(false);
    function handleLogin(){
        setisloggedIn(!isloggedIn);
    }
    return(
        <div>
            <button onClick={handleLogin} style={{backgroundColor:"Black",color:"yellow",fontSize:"28px",padding:"35px"}}>{isloggedIn? "Logout":"Login"}</button>
        <h1>{}
            {isloggedIn? "welcome back":"pls login"}
        </h1>
        </div>
    )
    

}
export default UserLogin;
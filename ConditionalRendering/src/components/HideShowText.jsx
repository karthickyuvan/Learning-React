import { useState } from "react";

function ShowHide()
{
const [show,setShow]=useState(true);

function handleClick()
{
    setShow(!show);
}
return(
    <div>
       <h1> {show? "":"Welcome Machi"} </h1>
        <button style={{backgroundColor:"Purple",color:"white",padding:"10px"}} onClick={handleClick}>{show? "Show":"Hide"}
        </button>
    </div>
)
}
export default ShowHide;
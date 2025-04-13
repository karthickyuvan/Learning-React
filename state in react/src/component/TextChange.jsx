import { useState } from "react";

function TextChange()
{
    const[text,setText]=useState("");
    function handleChange()
    {
        setText("Text Changed");
    }
    return(
        <div>
           <h1>{text || "Welcome to the World of State in React"}</h1>
            <button onClick={handleChange}>Click Me</button>
        </div>
    )
}
export default TextChange;
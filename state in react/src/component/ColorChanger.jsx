import { useState } from "react";

function ColorChanger()
{
    const[color,setColor]=useState("black"); // default color
    function changeRedColor()
    {
        setColor("red");
    }
    function changeGreenColor()
    {
        setColor("green");
    }
    return(
        <div>
              {/* Apply the color here using inline style */}
            <h2 style={{ color: color }}>I'm colorful!</h2>
            <button onClick={changeRedColor}>Red</button>
            <button onClick={changeGreenColor}>Green</button>
        </div>
    )
}
export default ColorChanger;
import { useState } from "react";

function ColorChanger() {
    const [color, setColor] = useState("red");

    function changeRedColor() {
        setColor("red");
    }

    function changeGreenColor() {
        setColor("green");
    }

    return (
        <div>
            <h1 style={{ color: color }}>The current color is {color}</h1>
            <button 
                onClick={changeRedColor} 
                style={{ backgroundColor: color === "red" ? "lightcoral" : "white" }} // if current color is red, background is lightcoral
                // else, white background
            >
                Red
            </button>
            <button 
                onClick={changeGreenColor} 
                style={{ backgroundColor: color === "green" ? "lightgreen" : "white" }}
            >
                Green
            </button>
        </div>
    );
}
/*
<div>
<button
  onClick={() => setRedColor("red")}
  style={{ color: redColor }}
>
  Red
</button>

<button
  onClick={() => setGreenColor("green")}
  style={{ color: greenColor }}
>
  Green
</button>
</div>*/
export default ColorChanger;
import { useState } from "react";

function Dropdown()
{
    const [selectedOption,setSelectedOption]=useState("");  // State to store selected value

    // const options=["Chennai" ,"Madurai" ,"Coimbatore" ,"Tirchy"];
    const handleChange=(event)=>{
        setSelectedOption(event.target.value);// Update the state when user selects option
    }
    return(
        <div>
            <label>Select Your City:</label>
            <select value={selectedOption} onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Tirchy">Tirchy</option>
                <option value="Salem">Salem</option>
            </select>
            <p>Selected City is : {selectedOption}</p>
        </div>
    )
}
export default Dropdown;
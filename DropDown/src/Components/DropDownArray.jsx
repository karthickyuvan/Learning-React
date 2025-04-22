import { useState } from "react";

function DropDownArray()
{
    const [selectedOption,setSelectedOptions]=useState("");
    const cities=["Chennai" ,"Madurai" ,"Coimbatore" ,"Tirchy"];
    const handledClick=(event)=>{
        setSelectedOptions(event.target.value);
    }
    return(
        <div>
            <h2>Display Drop Down using Map Function</h2>
           <select value={selectedOption} onChange={handledClick}>
            <option value="">-- Select --</option>
            {
                cities.map((city,index)=>(
                  <option value={city} key={index}>{city}</option>
    ))
            }
           </select>
            <p>The Selected City is : {selectedOption}</p>
        </div>
    )
}
export default DropDownArray;
import { useState } from "react";

function Controlledinputs(){
//     const [usertext,Setusertext]=useState("")
//     return(
// <div>
//     <h1>ControlledInputs</h1>
//     <input type="text" placeholder="Pls Enter Your Name" onChange={(e)=>Setusertext(e.target.value)} /> 
//     <h2>Welcome {usertext}</h2>
// </div>
//     )
const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <p>Welcome {name} 🙌</p>
    </div>
  );
}
export default Controlledinputs;
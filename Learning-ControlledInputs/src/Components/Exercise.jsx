import { useState } from "react";

function Exercise() {
  const [username, Setusername] = useState("");
  const [userage, Setuserage] = useState("");
  const [usercity, Setusercity] = useState("");
  // function handledtext(e)
  // {
  //     Setusername(e.target.value)
  // }
  return (
    <div>
      <h1>This is to show what i was learnrd in Controlled inputs</h1>
      <input
        type="text"
        placeholder="Pls Emter Your Name"
        onChange={(e) => Setusername(e.target.value)}
        value={username}
      />
      <input
        type="text"
        placeholder="Pls Emter Your age "
        onChange={(e) => Setuserage(e.target.value)}
        value={userage}
      />
      <input
        type="text"
        placeholder="Pls Emter Your City"
        onChange={(e) => Setusercity(e.target.value)}
        value={usercity}
      />
      <p>
        Hi, my name is <b>{username}</b>, I'm <b>{userage}</b> years old, and I live in 
       <b> {usercity}</b>
      </p>
    </div>
  );
}
export default Exercise;

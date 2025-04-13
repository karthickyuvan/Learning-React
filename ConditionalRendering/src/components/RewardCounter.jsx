import { useState } from "react";

function RewardCounter()
{
    let [count,setCount]=useState(0);
 
    let rewardMessage;
    let remaingCount= 10-count;

    let style={
        textAlign:"center",
        color:"darkblue",
        padding:"10px",
        fontsize:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"auto"
    }
    function handleCount()
    {
      setCount(count+1);
    }
   if(count>=20)
    {
        rewardMessage=" Congratulations ! you have Unlocked Mystery Box";
       
    }
    else if(count>=10)
    {
        rewardMessage=" Congratulations ! you have Unlocked 10% Discount";
    }
    else
    {
        rewardMessage = "Click 10 Times to Unlock Reward" ;
    }
    
return(
    <div>
        <h1 style={{textAlign:"center",color:"darkblue"}}>Click To Unlock Rewards 🎉 </h1>
        {/* <p style={{textAlign:"center",color:"darkblue"}}> Current Reward Count : {count} / Counts Left to Reward : {remaingCount }</p> */}
        <p style={{ textAlign: "center", color: "darkblue" }}>
                Current Reward Count: {count}
                {/* Show remaining count only if less than 10 */}
                {count < 10 && <> / Counts Left to Reward: {remaingCount}</>}
            </p>

        <button style={style} onClick={handleCount} disabled={count >= 20} >Click for Rewards</button>
        {/* <p style={{textAlign:"center",color:"darkblue"}}>Click 10 Times to Unlock Reward</p> */}
        <p style={{textAlign:"center",color:"darkblue"}}> {rewardMessage}</p>
        
    </div>
)
}
export default RewardCounter;
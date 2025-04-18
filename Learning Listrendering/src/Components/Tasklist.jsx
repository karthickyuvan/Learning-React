function Tasklist()
{
    const tasklist=[{id:"1",task:"Learn Html",checked:true},{id:"2",task:"Learn CSS",checked:true},
        {id:"3",task:"Learn Javascript",checked:true},{id:"4",task:"Learn node Js",checked:false},
        {id:"5",task:"Learn React",checked:true}
    ]

    return(
<div>
    <h1>Task List</h1>
    {tasklist.map((tasklist)=>(
   
   <div key={tasklist.id}>
    <input type="checkbox" checked={tasklist.checked} readOnly />
    <label>{tasklist.task}</label>
  
</div>
    ))}
</div>
    )
}
export default Tasklist;
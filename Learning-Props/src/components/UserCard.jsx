function UserCard({name,location,role})
{
    return(
   
            <div style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>
                <h1>{name}</h1>
                <p>📍{location}</p>
                <p>⛳️{role}</p>
            </div>
  
    )
}
export default UserCard;
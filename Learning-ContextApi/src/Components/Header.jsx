import { useContext } from "react";
import UserContext from "../../UserContext";

function Header()
{
    
    const { UserDetails } = useContext(UserContext); // 👈 get userDetails object
    const { uName, email } = UserDetails; // 👈 then get uName & email from that
//    const { userDetails: { uName, email } } = useContext(UserContext);- this also works

    return(
       <>
       <h1>Welcome {uName}</h1>
       <p>Your E-mail id is : {email}</p>
       <p>Thanks You...!</p>
       </>
    )
}
export default Header;
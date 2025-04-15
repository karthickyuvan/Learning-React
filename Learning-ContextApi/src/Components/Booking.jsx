import { useContext } from "react";
import UserContext from "../../UserContext";

function Booking()
{

    // const { isLoggedIn } = useContext(UserContext);
    const { UserDetails } = useContext(UserContext); // Get the actual user object
    const { isLoggedIn } = UserDetails;              // Then get isLoggedin


    return(
        <div>
        {isLoggedIn ? (
          <p>📅 Book your room now!</p>
        ) : (
          <p>🚪 Please login to continue</p>
        )}
      </div>
    );

}
export default Booking;

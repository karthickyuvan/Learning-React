
import { useState } from 'react'
import UserContext from '../UserContext'
import './App.css'
import Booking from './Components/Booking'
import Header from './Components/Header'

function App() {

const [UserDetails,setUserDetails]=useState({
  uName:"KarthickYuvan",email:"xxyyzz@mail.com", isLoggedIn: true,
});
return (
  <UserContext.Provider value={{UserDetails, setUserDetails}}>
    <div>
      <Header />
      <Booking />
    </div>
  </UserContext.Provider>
);
}

export default App

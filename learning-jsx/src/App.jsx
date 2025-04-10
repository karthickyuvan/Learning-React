
import './App.css'

/* 
Simple JSX Example -1

function App() {
  const name="Karthick";
  return (
 <div>
  <h1>Welcome , {name}</h1>
 </div>

  )
} 
*/


//Simple JSX Example -2  How to use className , JSX la HTML class use panna kudathu — use className
/*
function App(){
  const food="DOSA";
  const price=50;
  return(
    <div>
      <h1 className='title'> Now Availability Foods </h1>
     
      <h2 style ={{backgroundColor:"lightblue",color:'black'}}> 
        {food} is available at ${price}
      </h2>
    </div>
  )
}
*/

//Simple JSX Example -3  How to use Inline CSS Style , JSX la style use pannumbothu, value must be in camelCase + object format.
/*
function App(){
  const styleObj={
    backgroundColor:'lightblue',
    color:'black',
    padding:'10px',
    borderRadius:'10px'
  }
  return (
    <div>
      <h1 style={styleObj}>Welcome , this is How we can use Inline CSS in JSX</h1>
    </div>
  )
}
*/

//Simple JSX Example -4  Text Color Dynamically , 
/*
function App(){
  const isMorning=false;
  const greetingStyle={
    color: isMorning ? 'orange' : 'blue',
    fontSize: '24px'
  }
  return(
    <div>
      <h1 style={greetingStyle}>{isMorning ? "Good Morning!" : "Good Evening!"} </h1>
    </div>
  )
}
*/

//Simple JSX Example -5  Conditional Rendering , Use ternary (? :) inside {} for conditionals in JSX
/*
function App(){
  const isLoggedin=true;
  return(
    <div>
      <h1>{isLoggedin ? "welcome Back ! ": "pls log in" }</h1>
    </div>
  )
}
*/

//Simple JSX Example -6  Multiple Elements + One Parent
/*
function App(){
  const name="karthick";
  const city="madurai";

  return(
    <div>
      <h1>{name}</h1>
      <p>{city}</p>
    </div>
  )
}
*/

//Simple JSX Example -7  Custom CSS
/*
function App(){
  const mood = "😊";

  return (
    <div style={{ fontSize: '40px', textAlign: 'center' }}>
      Today’s mood: {mood}
    </div>
  );
}
*/

//  exercising what i learned
// 1. Basic JSX & className
/*
function App()
{
  return (
    <>
    <h1 className="main-box">JSX Practise</h1>
    <p>React la learning super!</p>
    </>
  )
}*/

// 2. Inline Style
/*
function App()
{
  return (
    <>
    <button style={{backgroundColor:'green',color: 'white', borderRadius: '8px' }}>Click Me</button>
    </>
  )
}*/

// 3. JS Expression in JSX
// 0/p->My name is Arun and I am 24 years old
/*
function App()
{
  const name="Arun";
  const age=25;
  return (
    <>
    <h1>My name is {name} and i am {age} years old.</h1>
    
    </>
  )
}
*/
// 4. Conditional Rendering (Ternary)
/* 
function App()
{
  const isLoggedin=false;
  return(
    <>
    <h1>{isLoggedin ? "welcome back":"pls login"}</h1>
    </>
  )
}*/

// 5. Dynamic List Rendering
/* 
function App()
{
  const fruits=["apple","banana","orange","grapes"];

  return(
    <div>
    <h2>Fruit List</h2>
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index} style={{ color: 'green' }}>
          {fruit}
        </li>
      ))}
    </ul>
  </div>
  )
}
*/
// Exercise 6: Conditional Class Application – Dark Mode UI
function App()
{
  const isDarkMode=false;
  return(
  <div className={isDarkMode ? "dark-mode": "light-mode"}>
    <h1>{isDarkMode ? "dark-mode": "light-mode"}</h1>

  </div>

  )
}
export default App

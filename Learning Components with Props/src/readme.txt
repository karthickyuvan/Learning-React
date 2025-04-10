What are Props?
Props = “PROperties” → Data you pass from parent component to child component.

Just like:

Amma saptuku lunch box prepare panni school ku anupra 🤱🍱
So lunch box = prop
Amma = parent, neenga = child 😂


Why use props?
Send dynamic data from one component to another
Make components reusable with different content
Like giving input → and output will change accordingly

Step-by-step: Passing Props in React
Step 
1. Create Welcome.jsx inside components/

function Welcome(props) {
  return (
    <div>
      <h2>Vanakkam {props.name} 🙌</h2>
    </div>
  );
}

export default Welcome;

🔍 props.name → 'name' nu varudhu from parent

Step 2. In App.jsx, import and use it with data

import './App.css'
import Header from './components/Welcome'

function App() {


  return (
    <>
      <div>
      <h1>Props Demo App</h1>
      {/* Pass props here */}
      <Header name="Arun" />
      <Header name="Sushma" />
      <Header name="VJ Kudos" />
    </div>
    </>
  )
}

export default App

name="Arun" → this is a prop, passed to Welcome component

Best Practices

✅ Use {props.name} inside component
✅ You can pass multiple props: name, age, city, etc.
✅ Use destructuring inside component like this:

function Welcome({ name }) {
  return <h2>Vanakkam {name}</h2>;
}

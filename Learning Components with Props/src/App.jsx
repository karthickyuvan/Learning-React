
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

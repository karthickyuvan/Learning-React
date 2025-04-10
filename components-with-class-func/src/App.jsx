
import './App.css'
import { Content } from './components/content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
let user="karthick"

  return (
    <>
      <div>
        <Header user={user}/>
      <Content/>
      <Footer user="Yuvan"/>
    </div>
    </>
  )
}

export default App
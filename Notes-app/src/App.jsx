
import { useState } from 'react'
import './App.css'
import NoteForm from './Components/NoteForm'
import Noteitem from './Components/NoteItem'
import NoteList from './Components/NoteList'
import SearchBar from './Components/SearchBar'

function App() {
 // Notes store panna state
const[notes,setNotes]=useState([]);
// Modal open or close state
const [isOpen,setIsOpen]=useState(false);

  return (
    <>
      <h1 style={{padding:"20px",color:"lightseagreen",textAlign:"center",fontSize:"3rem"}}>Welcome To Notes APP</h1>
      <NoteList notes={notes} setNotes={setNotes} handleClick={() => setIsOpen(true)}  />
      <NoteForm  notes={notes} setNotes={setNotes} isOpen={isOpen} setIsOpen={setIsOpen}/>
      
     </>
  )

}


export default App

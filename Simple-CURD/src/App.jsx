import { useState } from 'react';

import './App.css'
import StudentForm from './Components/StudentForm';
import StudentItem from './Components/StudentItem';
import StudentList from './Components/StudentList';

function App() {

const [student, setStudent] = useState([]);

  return (
    <div>
    <h1>Student Information</h1>
    <StudentForm  student={student} setStudent={setStudent}/>
      <StudentList student={student}/>
     
      
    </div>
  )
}

export default App;

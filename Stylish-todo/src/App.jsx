import React, { useState } from "react";
import TodoForm from "./Components/TodoForm"; // Task add panna form
import TodoList from "./Components/TodoList"; // List of tasks
import "./App.css"; // Styling

function App() {
  // tasks store panna state
  const [todos, setTodos] = useState([]);

  // Modal open or close state
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <h1>TODO LIST</h1>

      {/* Task form render pannuvom, data pass pannrom */}
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      {/* Task list render + Add button click handle */}
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        onAddClick={() => setShowModal(true)} 
      />
    </div>
  );
}

export default App;

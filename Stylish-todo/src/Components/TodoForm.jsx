import React, { useState } from "react";

function TodoForm({ todos, setTodos, showModal, setShowModal }) {
  const [task, setTask] = useState(""); // Input la type panna value

  const handleAdd = () => {
    if (task.trim() === "") return; // Empty task add panna koodadhu

    const newTask = {
      id: Date.now(), // Unique ID
      text: task, // 👉 this is "Buy Milk"
      completed: false,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };

    setTodos([newTask, ...todos]); // New task add pannrom // 🔁 Updates state in App.jsx
    setTask(""); // Clear input 
    setShowModal(false); // Close modal  // ❌ hides popup
  };

  if (!showModal) return null; // Modal close state na return pannadhu

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add a New Task</h3> 
        {/* Input field */}
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />

        {/* Add + Cancel buttons */}
        <div className="modal-buttons">
          <button className="add-btn" onClick={handleAdd}>Add</button>
          <button className="add-btn" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;

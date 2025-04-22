import React, { useState } from "react";

function TodoItem({ todo, todos, setTodos }) {
  const [edit, setEdit] = useState(false); // Edit mode toggle
  const [text, setText] = useState(todo.text); // Edit text

  // Completed toggle
  const handleToggle = () => {
    // Step 1: Loop through all todos using .map
    const updated = todos.map(t =>
      // Step 2: Check if current task is the one we clicked (matching id)
      t.id === todo.id
        ? { ...t, completed: !t.completed } // If match, flip its completed status (true <-> false)
        : t // If not match, return same task
    );
  
    // Step 3: Update the todos list with the new array
    setTodos(updated);
  };
  

  // Delete task
  const handleDelete = () => {
    // Step 1: Filter the todos list and remove the one with matching id
    const updated = todos.filter(t => t.id !== todo.id);
  
    // Step 2: Set the new list to state
    setTodos(updated);
  };
  

  // Save edited text
  const handleEdit = () => {
    // Step 1: Loop through all todos
    const updated = todos.map(t =>
      // Step 2: If id matches, update the text with new value from input
      t.id === todo.id ? { ...t, text } : t
    );
  
    // Step 3: Set updated list
    setTodos(updated);
  
    // Step 4: Exit edit mode
    setEdit(false);
  };
  

  return (
    // Outer div for each todo item. Adds class "done" if the task is completed (used for styling like strikethrough)
    <div className={`todo-item ${todo.completed ? "done" : ""}`}>
  
      {/* Complete checkbox */}
      // Shows a checkbox. Checked = true if task is completed.
      // When checkbox is clicked, it triggers handleToggle (to mark complete/incomplete)
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
  
      {/* Edit or display mode */}
      // If 'edit' is true, show an input field to edit the text
      {edit ? (
        <input 
          value={text} // Controlled input — its value is managed by state
          onChange={(e) => setText(e.target.value)} // Updates text state as user types
          onBlur={handleEdit} // When user clicks outside the input, it saves the edited text
          autoFocus // Automatically focuses input when it appears
        />
      ) : (
        // If not in edit mode, just show the todo text normally
        <span>{todo.text}</span>
      )}
  
      {/* Time and Date */}
       {/* Displays the time and date when the task was added */}
      <p>{todo.time}, {todo.date}</p>
  
      {/* Action buttons */}
      <div className="actions">
        // Trash button — deletes the task when clicked
        <button onClick={handleDelete}>🗑️</button>
  
        // Edit button — toggles the 'edit' state on/off
        <button onClick={() => setEdit(!edit)}>✏️</button>
      </div>
  
    </div>
  );
  
}

export default TodoItem;

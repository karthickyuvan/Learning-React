import React, { useState } from "react";

function TodoItem({ todo, todos, setTodos }) {
  const [edit, setEdit] = useState(false); // Edit mode toggle
  const [text, setText] = useState(todo.text); // Edit text

  // Completed toggle
  const handleToggle = () => {
    const updated = todos.map(t =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
  };

  // Delete task
  const handleDelete = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  // Save edited text
  const handleEdit = () => {
    const updated = todos.map(t =>
      t.id === todo.id ? { ...t, text } : t
    );
    setTodos(updated);
    setEdit(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "done" : ""}`}>
      {/* Complete checkbox */}
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />

      {/* Edit or display mode */}
      {edit ? (
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          onBlur={handleEdit} 
          autoFocus 
        />
      ) : (
        <span>{todo.text}</span>
      )}

      {/* Time and Date */}
      <p>{todo.time}, {todo.date}</p>

      {/* Action buttons */}
      <div className="actions">
        <button onClick={handleDelete}>🗑️</button>
        <button onClick={() => setEdit(!edit)}>✏️</button>
      </div>
    </div>
  );
}

export default TodoItem;

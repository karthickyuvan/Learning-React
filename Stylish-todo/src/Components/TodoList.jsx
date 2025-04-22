// Import React and the useState hook from React
import React, { useState } from "react";

// Import the TodoItem component (used to render each individual task)
import TodoItem from "./TodoItem";

// Define the TodoList component which receives props: todos, setTodos, and onAddClick
function TodoList({ todos, setTodos, onAddClick }) {
  // This state controls which filter is active: All, Completed, or Incomplete
  const [filter, setFilter] = useState("All");

  // First, we filter the todos based on the selected filter option
  // Then, we sort them so incomplete tasks come first, and completed ones are at the bottom
  const filteredTodos = todos
    .filter(todo =>
      filter === "All"       // If "All" is selected, include all todos
        ? true
        : filter === "Completed"
        ? todo.completed     // If "Completed", only include completed todos
        : !todo.completed    // Else (Incomplete), include only incomplete ones
    )
    .sort((a, b) => a.completed - b.completed); // Sort: false (incomplete) first, true (complete) after

  // Component return JSX (the UI part)
  return (
    <div className="todo-container">
      {/* Top bar: contains the Add Task button and filter dropdown */}
      <div className="top-bar">
        {/* Add Task button — triggers the popup/modal when clicked */}
        <button className="add-btn" onClick={onAddClick}>Add Task</button>

        {/* Dropdown to select filter option — All, Completed, Incomplete */}
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>

      {/* Render each filtered and sorted todo using the TodoItem component */}
      {/* We use .map to loop through each todo and pass it to the TodoItem component */}
      {filteredTodos.map(todo => (
        // Each TodoItem gets a unique key, the todo object itself, the full todos list, and setTodos function
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
}

// Export this component so it can be used in other parts of the app (like App.jsx)
export default TodoList;

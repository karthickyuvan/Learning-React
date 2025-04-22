import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos, onAddClick }) {
  const [filter, setFilter] = useState("All");
// Filter logic
  const filteredTodos = todos
  .filter(todo =>
    filter === "All" ? true :
    filter === "Completed" ? todo.completed :
    !todo.completed
  )
  .sort((a, b) => a.completed - b.completed);

  return (
    <div className="todo-container">
        {/* Top Add + Filter bar */}
      <div className="top-bar">
        <button className="add-btn" onClick={onAddClick}>Add Task</button>
        {/* Filter select dropdown */}
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>
    {/* Render each task */}
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
}

export default TodoList;

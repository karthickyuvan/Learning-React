import { useState } from "react";
// Step 1: Create our functional component
function TodoApp() {
  // Step 3: Create state to store the list of todos (tasks)
  // todos = current task list
  // setTodos = update pannradhukku function
  const [todos, setTodos] = useState([]);
  // Step 4: Create state to store what user types in the input box
  // input = current text value from the input box
  // setInput = update the input box value
  const [input, setInput] = useState("");

  // Step 5: Function to add a new todo item
  const handleAddTodo = () => {
    // Input box la edhachum type pannala na, nothing should happen
    if (input.trim() === "") return;
    // Create a new todo object
    const newTodo = {
      id: Date.now(), // Unique id for each todo (we use current time)
      text: input, // Text user typed
    };
    // Add newTodo to the todos array (spread old + new)
    setTodos([...todos, newTodo]);
    // Input box empty aagum after adding
    setInput("");
  };

  // Step 6: Function to delete a todo item
  const handleDeleteTodo = (id) => {
    // Filter panni, id match aagatha items mattum vechikiradhudhaan
    // So matching ID item gets removed
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    // Update the todos list with the new filtered array
    setTodos(updatedTodos);
  };

  // Step 7: Return UI - what you see on the screen
  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 To-Do App</h1>

      {/* Step 8: Input box for typing tasks */}
      {/* value={input} → input box shows whatever is in input state */}
      {/* onChange → every time we type, setInput updates the state */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />

      {/* Step 9: Button to add a task - onClick calls the function */}
      <button onClick={handleAddTodo}>Add</button>

      {/* Step 10: Show the list of todos */}
      {/* map() → goes through todos array and displays each item */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {/* Button to delete this todo - calls delete function with ID */}
            <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;

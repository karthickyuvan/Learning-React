🧠 What is Props in React?

Props = Properties
It’s the way to send data from one component (parent) to another (child).

🔄 Think like passing data as function arguments, but in React components.

👉 Parent Component
<ChildComponent name="Machi" age={25} />

👉 Child Component
function ChildComponent(props) {
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

You can also destructure props:

function ChildComponent({ name, age }) {
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

Imagine you're creating a User Card that displays name, location, and role of the user.
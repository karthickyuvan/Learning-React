function Studentslist()
{
    const studentNames = ["Karthick", "Divya", "Ramesh", "Sneha"];

  return (
    <div>
      <h2>📋 Students List</h2>
      <ul>
        {studentNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
    
}
export default Studentslist;
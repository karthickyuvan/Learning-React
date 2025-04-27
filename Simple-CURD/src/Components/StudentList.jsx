import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ student }) {
  return (
    <div>
      <h2>Student List</h2>
      {student.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        student.map((item) => <StudentItem key={item.id} student={item} />)
      )}
    </div>
  );
}

export default StudentList;

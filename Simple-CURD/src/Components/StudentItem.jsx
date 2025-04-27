import React from 'react'

function StudentItem({student}) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <p><strong>Name :</strong>{student.name}</p>
      <p><strong>Age :</strong>{student.age}</p>
      <p><strong>E-mail Id :</strong>{student.email}</p>
      <p><strong>Phone Number :</strong>{student.phoneNumber}</p>
    </div>
  )
}

export default StudentItem
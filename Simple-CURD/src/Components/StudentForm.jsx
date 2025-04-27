import React, { useState } from 'react'

function StudentForm({student,setStudent}) {

    // console.log("StudentForm Loaded");


const [name,setName]=useState('');
const [age,setAge]=useState('');
const [email,setEmail]=useState('');
const [phoneNumber,setPhoneNumber]=useState('');

    const handleClick =(e)=>{
        e.preventDefault();
      

        const newStudent={
            id:Date.now(),
            name:name,
            age:age,
            email:email,
            phonenumber:phoneNumber,
        };
          
        setStudent([newStudent,...student]);
        // console.log(newStudent);
        
    }

  return (
    <div>
        <form onSubmit={handleClick}> 
            <div>
                <input type="text" placeholder='Enter Student Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="number" placeholder='Enter Student Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
                <input type="email" placeholder='Enter Student E-mail Id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="number" placeholder='Enter Student Phone Number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                <button type='submit'>Submit</button>

            </div>
        </form>
    </div>
  )
}

export default StudentForm;
import React from 'react'

export default function Ninth_assigment() {
    const student = {
        name: 'Nilesh panchal',
        age: 20,
        id: 14,
        hobbies: ['Haking', 'Cricket', 'Coding'],
        brithday: "14/02/2004",
        
      };
  return (
    <div>
        <h1>Ninth Assigment</h1>
        <h4>Name is:- {student.name}</h4>
        <h4>Age is:- {student.age}</h4>
        <h4>Id number is:- {student.id}</h4>
        <h4>Hobbies is:- {student.hobbies.join(',') }</h4>
        <h4>Brithday is:- {student.brithday}</h4>
        <hr />

    </div>
  )
}

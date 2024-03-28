import React from 'react'

export default function Seven_assigment() {
     // Question 7 ====================>
  const LeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return (
      <div>
    <h2>Seven_assigment</h2>
      <p>2024 is Leap Year:- {LeapYear ? `Yes` : ` no`}</p>
      <br />
      <hr />
    </div>
  )
}

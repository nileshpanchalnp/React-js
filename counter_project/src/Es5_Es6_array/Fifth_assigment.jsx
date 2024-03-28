import React from 'react'

export default function Fifth_assigment() {
    let a = [10,20,30,40,50]
    let sum = 0;
 
// Running the for loop
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
  return (
    <div>
        <h1>Fifth Assigment</h1>
    <h2>Sum of Array Elements {sum}</h2><hr />
    </div>
  )
}

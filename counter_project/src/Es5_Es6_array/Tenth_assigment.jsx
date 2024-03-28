import React from 'react'

export default function Tenth_assigment() {
     // Question 10 ====================>

  const arrs = ["mango", "orange", "mango", "apple", "apple", "pineple", "apple"];
  const counts = {};
  arrs.forEach(element => {
    if (counts[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  });
  return (
      <>
    <h2>Ten Assigment</h2>
   
   <ul>
       {Object.keys(counts).map((key, index) => (
         <li key={index}>
           {key}: {counts[key]}
         </li>
       ))}
     </ul>
    </>
  )
}

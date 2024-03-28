import React from 'react'

export default function Third_assigment() {
  let b = [11,22,33,44,55]
  return (
    <div>
      <h1>Third_Assigment</h1>
      
      <ul>
        {
          b.map((i,index)=>(
      <li key={index}>{i}</li>
))
}
      </ul>
      <hr />
    </div>
  )
}

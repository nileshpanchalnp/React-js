import React from 'react'

export default function Eighth_assigment() {
    const array = [10,20,30,40,50]
    const arr =[60,70,80,90,100]
    const Merge =[...array,...arr]
  return (
    <div>
        <h1>Eight Assigment</h1>
        <h2>Merged Arrays</h2>
        <ul>
            {
                Merge.map((i,index)=>(
                    <li key={index}>{i}</li>
                    ))
            }
        </ul>
        <hr />
    </div>
  )
}

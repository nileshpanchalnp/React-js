import React from 'react'

export default function Sixth_assigment() {
    let arr = [11,22,33,44,55]

    const even = arr.filter((i)=>i%2 === 0)
    const odd = arr.filter((i)=>i%2 !== 0)

        
  return (
    <div>
        <h1>Six Assigment</h1>
        <h2>even number</h2>
        <ul>
            {
                even.map((i,index)=>(
                    <li key={index}>{i}</li>
                    ))
            }
        </ul>
            <h2>Odd number</h2>
        <ul>
            {
                odd.map((i,index)=>(
                    <li key={index}>{i}</li>
                    ))
            }
        </ul>
        <hr />

    </div>
  )
}

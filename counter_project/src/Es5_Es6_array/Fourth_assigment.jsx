import React from 'react'

export default function Fourth_assigment() {

  let array = [11,22,33,44,55]

  let a = array.filter((i)=>{
    return i === 66
  })

  return (
    <div>
      <h1>Fourth Assignment</h1>
      {a.length > 0 ? (
        <h3 style={{color:"red"}}>is found</h3>
      ) : (
        <h3 style={{color:"red"}}>is not found</h3>
      )}
      <hr />
    </div>
  );
}

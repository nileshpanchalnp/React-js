import React from 'react'

export default function Second_assigment() {
    let a = [1, 2, 3, 4, 5];
  const squareCubeArray = a.map(num => ({ square: num ** 2, cube: num ** 3 }));
  return (
    <div>
      <h2>Second Assigment</h2>

{squareCubeArray.map((item, index) => (
  <p key={index}> Square: {item.square}, Cube: {item.cube}</p>
))
}

<br /><hr />
    </div>
  )
}

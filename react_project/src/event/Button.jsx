import React, { useState } from 'react'

export default function Button() {
    const [a, setA] = useState(false)

    const handleToggle = () =>{
        setA(prevstate => !prevstate);
    }
  return (
    <div>
        <hr />
      <h4> Button Example</h4>
      <button onClick={handleToggle}>
        {a ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

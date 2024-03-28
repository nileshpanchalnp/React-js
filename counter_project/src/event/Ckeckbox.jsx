import React, { useState } from 'react'

export default function Ckeckbox() {
  const [check,setCheck] = useState(false)
  const handleform =(e)=>{
    e.preventDefault()
    console.log(check)
  }
 
  return (
    <>
    <form onSubmit={handleform}>
    <label htmlFor="">Checkbox</label>
        <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}/>
        <br /><br />
        <button>submit</button>
    </form>
    <br />
    <hr />
        
    </>
  )
}

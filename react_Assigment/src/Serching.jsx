import React, { useState } from 'react'

export default function Serching() {
  const [serchlist] =useState(["Gt musteng","Hania amir","defender","Creta","Fz","G wagon","RR"])
    const [list,setlist] =useState(serchlist)
    const [val,setval] = useState("");
    const handleSerch =(e)=>{
      setval(e.target.value)
      if(e.target.value){
        let result = list.filter((item)=>item.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setlist(result)
      }else{
        setlist(serchlist)
      }
    }
  return (
    <>
      <input value={val} onChange={(e)=>handleSerch(e)} />
      {
        list.map((item,index)=>{
          return(
            <li key={index}>{item}</li>
          )
        })
      }
    </>
  )
}

import React from 'react'

export default function ArrayandArrayofObject() {
    const aaryobj =[
        {
            id:"1",
            name:"Nilesh",
            hobby:"coding",
        }
    ]
    const arry=[1,2,3,4,5]
  return (
    <>
      <h1>Arry of Object</h1>
      <h3>
          <ul>
              {
                  arry.map((i,index)=>(
                      <li key={index}>{i}</li>
                      ))
              }
          </ul>
      </h3>
      <h3>
      
          <ul>
         
              {
                   
                  
                  aaryobj.map((i,index)=>(
                      <li key={index}> id is:-{i.id} name is-{i.name} hobby is-{i.hobby}</li>
                     
                     

                      ))
                      
              }
               
          </ul>
         
      </h3>
    </>
  )
}

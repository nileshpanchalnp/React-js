import React from 'react'

export default function First_assigment() {


  let pi = 3.14
  let r=5 

    const findcircle = (r)=>{
        return (pi*r*r)
    }

//rectengle

let length=10,width=20
function rectengle(){
  return(length*width)
}
 
//  triangle
function triangleArea(base, height) {
  return 0.5 * base * height;
}

let baseLength = 10;
let heightLength = 5;
let area = triangleArea(baseLength, heightLength);
    
    
        return (
          <div>
            <h1>First Assigment</h1>
            <h2>circle is {findcircle(r)}</h2>
            <h3>Triangle is {area}</h3>
            <h4>rectenge is {rectengle()}</h4>
            <hr />
          </div>
        );
      };


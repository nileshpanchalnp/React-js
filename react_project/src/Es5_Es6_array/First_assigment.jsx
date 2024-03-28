import React from 'react'

export default function First_assigment() {
  //---------------- First Assigment---------
  let pi = 3.14
  let r = 5
  const findcircle = (r) => {
    return (pi * r * r)
  }
  //rectengle
  let length = 10, width = 20
  function rectengle() {
    return (length * width)
  }
  //  triangle
  function triangleArea(base, height) {
    return 0.5 * base * height;
  }
  let baseLength = 10;
  let heightLength = 5;
  let area = triangleArea(baseLength, heightLength);
  //------------------Second_assigment-------------------
  let a = [1, 2, 3, 4, 5];
  const squareCubeArray = a.map(num => ({ square: num ** 2, cube: num ** 3 }));
  //------------------Third_assigment-------------------
  let b = [11, 22, 33, 44, 55]
  //------------------Fourth_assigment-------------------
  let array = [11, 22, 33, 44, 55]

  let np = array.filter((i) => {
    return i === 66
  })
  //------------------fifth_assigment-------------------
  let q = [10, 20, 30, 40, 50]
  let sum = 0;

  // Running the for loop
  for (let i = 0; i < q.length; i++) {
    sum += q[i];
  }
  //------------------Sixth_assigment-------------------
  let arr = [11, 22, 33, 44, 55]

  const even = arr.filter((i) => i % 2 === 0)
  const odd = arr.filter((i) => i % 2 !== 0)
  //------------------Seven_assigment-------------------
  const LeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  //------------------Eight_assigment-------------------
  const arraye = [10,20,30,40,50]
    const arre =[60,70,80,90,100]
    const Merge =[...arraye,...arre]
  //------------------Ninth_assigment-------------------
  const student = {
    name: 'Nilesh panchal',
    age: 20,
    id: 14,
    hobbies: ['Haking', 'Cricket', 'Coding'],
    brithday: "14/02/2004",
  };
  //------------------Tenth_assigment-------------------
  const arrs = ["mango", "orange", "mango", "apple", "apple", "pineple", "apple"];
  const counts = {};
  arrs.forEach(element => {
    if (counts[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  });




  return (
    <div>
      {/* ------------------Frist_assigment------------------- */}

      <h1>First Assigment</h1>
      <h2>circle is {findcircle(r)}</h2>
      <h3>Triangle is {area}</h3>
      <h4>rectenge is {rectengle()}</h4>
      <hr />
      {/* ------------------Second_assigment------------------- */}
      <h2>Second Assigment</h2>
      {squareCubeArray.map((item, index) => (
        <p key={index}> Square: {item.square}, Cube: {item.cube}</p>
      ))
      }
      <br /><hr />
      {/* ------------------Third_assigment------------------- */}
      <h1>Third_Assigment</h1>
      <ul>
        {
          b.map((i, index) => (
            <li key={index}>{i}</li>
          ))
        }
      </ul>
      <hr />
      {/* ------------------Fourth_assigment------------------- */}
      <h1>Fourth Assignment</h1>
      {np.length > 0 ? (
        <h3 style={{ color: "red" }}>is found</h3>
      ) : (
        <h3 style={{ color: "red" }}>is not found</h3>
      )}
      <hr />
      {/* ------------------Fifth_assigment------------------- */}
      <h1>Fifth Assigment</h1>
      <h2>Sum of Array Elements {sum}</h2><hr />
      {/* ------------------Sixth_assigment------------------- */}
      <h1>Six Assigment</h1>
      <h2>even number</h2>
      <ul>
        {
          even.map((i, index) => (
            <li key={index}>{i}</li>
          ))
        }
      </ul>
      <h2>Odd number</h2>
      <ul>
        {
          odd.map((i, index) => (
            <li key={index}>{i}</li>
          ))
        }
      </ul>
      <hr />
      {/* ------------------Seven_assigment------------------- */}

      <h2>Seven_assigment</h2>
      <p>2024 is Leap Year:- {LeapYear ? `Yes` : ` no`}</p>
      <br />
      <hr />
      {/* ------------------eight_assigment------------------- */}
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
      {/* ------------------Ninth_assigment------------------- */}
      <h1>Ninth Assigment</h1>
        <h4>Name is:- {student.name}</h4>
        <h4>Age is:- {student.age}</h4>
        <h4>Id number is:- {student.id}</h4>
        <h4>Hobbies is:- {student.hobbies.join(',') }</h4>
        <h4>Brithday is:- {student.brithday}</h4>
        <hr />
      {/* ------------------Tenth_assigment------------------- */}

      <h2>Ten Assigment</h2>
   
   <ul>
       {Object.keys(counts).map((key, index) => (
         <li key={index}>
           {key}: {counts[key]}
         </li>
       ))}
     </ul>

    </div>

  );
};


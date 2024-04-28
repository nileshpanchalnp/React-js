import React, { useEffect, useState } from 'react'

export default function Sessationstorage() {
    const [items, setItems] = useState(() => {
        const storedData = sessionStorage.getItem("itemData")
        return storedData ? JSON.parse(storedData) : []
      });
      const [inputValue, setInputValue] = useState({
        name: "",
        password: ""
      });
    const [editItem,seteditItem] = useState(null)
    const handleData = () => {
        setItems([...items, inputValue])
        setInputValue({
            name: "",
            password: ""
        })
        seteditItem(null)
    }
    useEffect(() => {
        sessionStorage.setItem("itemData", JSON.stringify(items));
      });
    const handleEdit = (index)=>{
        seteditItem(index)
        setInputValue(items[index])
    }
    const handleSaveItem =()=>{
        const updateData = [...items]
        updateData[editItem]=inputValue
        setItems(updateData)
        seteditItem(null)
        setInputValue({
            name: "",
            password: ""
        })
    }
    const handleDelete = (index) =>{
        const updateData = [...items]
        updateData.splice(index,1)
        setItems(updateData)
    }
  return (
    <>
<div className="form">
                <h5>Crud operation using Sessionstorage</h5>
                <input type="text" placeholder='Enter Name' value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} /><br />
                <input type="password" placeholder='Enter password'value={inputValue.password} onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} /><br />
                {
                    editItem === null ?
                    <button onClick={() => {handleData()}}>Add Data</button> 
                    :
                    <button onClick={() => {handleSaveItem()}}>Save Chages</button>
                }
                
            </div>
            <br /><br />
            <table border={1}>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    items.map((i, index) => {
                        return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.password}</td>
                                    <td onClick={()=>handleDelete(index)}> <button>Delete</button> </td>

                                    <td onClick={()=>handleEdit(index)}> <button>Edit</button> </td>
                                </tr>
                        )
                    })
                }
            </table>
    </>
  )
}

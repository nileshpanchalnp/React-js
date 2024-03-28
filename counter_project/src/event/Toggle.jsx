import React, { useState } from 'react';

const Toggle = () => {
    const [name, setName] = useState(" Iron Man")

    const Change = () => {
        if (name === " Tony stark") {
            setName(" Iron Man")
        } else {
            setName(" Tony stark")
        }
    }
    return (

        <div >
            <h1>{name}</h1>
            <button onClick={Change}>Toggle</button>
            <br /><br /><hr />
        </div>
    );
}

export default Toggle;

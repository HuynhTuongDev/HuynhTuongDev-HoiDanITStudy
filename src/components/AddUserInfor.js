import React, { useState } from 'react'

const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Hoi dan IT');
    const [age, setAges] = useState('');

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }
    const handleOnChangeAge = (event) => {
        setAges(event.target.value);
    }
    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age,
        });
    }

    return (
        <div>
            My name is {name} and I'm  {age}
            <form form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => { handleOnChangeName(event) }}
                />
                <label>Your age:</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <button>Submit</button>
            </form>
        </div >
    )
}
export default AddUserInfor; 
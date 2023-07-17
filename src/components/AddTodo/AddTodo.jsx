import React, { useState } from 'react'
import './AddTodo.css'
import { v4 as uuid } from 'uuid'

function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('');
    function saveTodo() {

        setTodo([...todo, {
            id: uuid(),
            title: value,
            status: false
        }])
        setValue('');
        console.log(todo);
    }

    return (
        <div className='addTask'>
            <input type="text" className='addTask__inp' placeholder='Введи завдання' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveTodo} className='addTask__btn'>Додати +</button>
        </div>
    )
}

export default AddTodo;
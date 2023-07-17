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
        <div>
            <input type="text" placeholder='Введи завдання' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveTodo}>Додати +</button>
        </div>
    )
}

export default AddTodo;
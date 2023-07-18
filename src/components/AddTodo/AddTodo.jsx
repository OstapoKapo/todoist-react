import React, { useState } from 'react'
import './AddTodo.css'
import { v4 as uuid } from 'uuid'

function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('');
    const [difficulty, setDifficulty] = useState('');
    
    function saveTodo() {
         let Today = new Date()
         let minutes = Today.getMinutes()>9 ? Today.getMinutes() : '0'+Today.getMinutes()
         let month = ("0" + (Today.getMonth() + 1)).slice(-2);
         let date = ("0" + Today.getDate()).slice(-2);
        
        setTodo([...todo, {
            id: uuid(),
            title: value,
            status: false,
            change:false,
            submitTime:Today.getHours() + ':' + minutes,
            submitData:date+'.'+month,
            time:Date.now(),
            difficultyWord: difficulty.length == 0 ? 'Easy'  : difficulty.substring(1),
            difficultyNumber:difficulty.length == 0 ? 1  : difficulty.substring(0, 1),
        }])
        setValue('');
        console.log(todo);  
        
    }

    

    return (
        <div className='addTask'>
            <input type="text" className='addTask__inp' placeholder='Введи завдання' value={value} onChange={(e) =>  setValue(e.target.value)} />
            <select  name="select" className='addTask__select' value={difficulty} onChange={(e) =>  setDifficulty(e.target.value)}>
                <option value='1Easy' >Easy</option>
                <option value='2Medium' >Medium</option>
                <option value='3Hard'  >Hard</option>
            </select>
            <button onClick={saveTodo} className='addTask__btn'>Додати +</button>
        </div>
    )
}

export default AddTodo;
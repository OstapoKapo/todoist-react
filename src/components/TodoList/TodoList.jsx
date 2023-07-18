import React from 'react';
import './Todolist.css'

export default function TodoList({ todo, setTodo }) {


    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }
    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status;
            }
            return item;
        });
        setTodo(newTodo);
        deleteTodo(id)
    }

    function editTodo(id){
        
    }
    return (
        <div className='taskContainer'>
            {
                todo.map(item =>
                    <div key={item.id} className='task'>
                        <h1 className='task__text'>{item.title}</h1>
                        <h3 className='task__text'>Data:10.08.2007</h3>
                        <h3 className='task__text'>Difficulty:Hard</h3>
                        <button onClick={() => deleteTodo(item.id)}>Видалити</button>
                        <button onClick={() => statusTodo(item.id)}>Виконати</button>
                        <button onClick={() => editTodo(item.id)}>Редагувати</button>
                    </div>
                )
            }
        </div>
    )
}

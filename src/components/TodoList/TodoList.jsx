
import React, {useState} from 'react';
import './Todolist.css'


export default function TodoList({ todo, setTodo }) {
    
    const [deleteTodos, setDeleteTodos] = useState([]);

    function deleteTodo(id) {
        let newDeleteTodos = []
        let item = todo.filter(item => item.id == id);
        console.log(item)
        newDeleteTodos = newDeleteTodos.push(item)
        setDeleteTodos(newDeleteTodos)
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
        console.log(deleteTodos);
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
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.change = true;
            }
            return item;
        });
        setTodo(newTodo);
        console.log(newTodo)
    }

    const [value, setValue] = useState('');

    const [difficulty, setDifficulty] = useState('');
    
    function submitChangesTodo (id){
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.title = value;
                item.change = false;
                let Today = new Date();
                let minutes = Today.getMinutes()>9 ? Today.getMinutes() : '0'+Today.getMinutes();
                item.submitTime = Today.getHours() + ':' + minutes;
                item.time = Date.now();
                item.difficultyWord =  difficulty.length == 0 ? 'Easy'  : difficulty.substring(1);
                item.difficultyNumber = difficulty.length == 0 ? 1  : difficulty.substring(0, 1);
        }
            return item;
        });  
        setTodo(newTodo)
        setValue('')
        setDifficulty('');
    }


   
    return (
        <div className='taskContainer'>
            
            {   todo.length == 0 ? <h1 className='task__text'>Nothing yet</h1> :
                todo.map(item => 
                    item.change ? (
                        <div key={item.id} className='task'>
                            <input type="text" className='addTask__inp' placeholder='Введи завдання' value={value} onChange={(e) => setValue(e.target.value)} />
                            <select  name="select" className='addTask__select' onChange={(e) =>  setDifficulty(e.target.value)}>
                                <option value='1Easy' >Easy</option>
                                <option value='2Medium' >Medium</option>
                                <option value='3Hard'  >Hard</option>
                            </select>
                            <button onClick={() => submitChangesTodo(item.id)} className='addTask__btn'>Submit</button>
                        </div>
                    ) : (
                        <div key={item.id} className='task'>
                        <h1 className='task__text'>{item.title}</h1>
                        <h3 className='task__text'>Time: {item.submitTime}</h3>
                        <h3 className='task__text'>Data: {item.submitData}</h3>
                        <h3 className='task__text'>Difficulty: {item.difficultyWord}</h3>
                        <div className="task__row">
                        <button className='task__btn' onClick={() => deleteTodo(item.id)}>Видалити</button>
                        <button className='task__btn' onClick={() => statusTodo(item.id)}>Виконати</button>
                        <button className='task__btn' onClick={() => editTodo(item.id)}>Редагувати</button>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    )
}

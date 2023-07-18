
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([
   
  ]);
  const [deleteTodoList, setDeleteTodoList] = useState(false)
  return (
    <div className="App">
      <Header deleteTodoList={deleteTodoList}  setDeleteTodoList={setDeleteTodoList} />
      <AddTodo todo={todo} setTodo={setTodo} deleteTodoList={deleteTodoList}  setDeleteTodoList={setDeleteTodoList} />
      <TodoList todo={todo} deleteTodoList={deleteTodoList}  setDeleteTodoList={setDeleteTodoList} setTodo={setTodo} />
    </div>
  );
}

export default App;

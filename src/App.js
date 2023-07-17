
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first',
      status: true
    },
    {
      id: 2,
      title: 'second',
      status: false
    },
    {
      id: 3,
      title: 'third',
      status: true
    }
  ]);
  return (
    <div className="App">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;

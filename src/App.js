
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { useState } from 'react';
import './App.css';
import "./components/components.css";

function App() {

  const [todos, setTodos] = useState([{
        input: "Hello! Add your first task!",
        completed: false
      }]);

      const [selectedTab, setSelectedTab] = useState('Active');

      function handleAddTodo(newTodo){
        const newTodoList = [...todos,{ input: newTodo, completed: false }];
        setTodos(newTodoList);
      }

      function handleDeleteTodo(){}

      function handleEditTodo(){}

  return (
    <>
      <Header todos= {todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList todos={todos} selectedTab={selectedTab}/>
      <TodoInput handleAddTodo={handleAddTodo}/>

    </>
  );
}

export default App;

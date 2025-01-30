
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { useState, useEffect } from 'react';

import './App.css';
import "./components/components.css";


function App() {

  const [todos, setTodos] = useState([{
        input: "Add your first task!",
        completed: false
      }]);

      const [selectedTab, setSelectedTab] = useState('Active');

      function handleAddTodo(newTodo){
        const newTodoList = [...todos,{ input: newTodo, completed: false }];
        setTodos(newTodoList);
        handleSaveData(newTodoList);
      }

      function handleDeleteTodo(index){
        let newTodoList = todos.filter((val, valIndex) => {
         return valIndex !== index;
        });
        setTodos(newTodoList);
        handleSaveData(newTodoList);
      }

      function handleCompletedTodo(index){
        let newTodoList = [...todos];
        let completedTodo = todos[index];
        completedTodo['completed'] = true
        newTodoList[index] = completedTodo;
        setTodos(newTodoList);
        handleSaveData(newTodoList);
      }

      function handleSaveData(currentTodos){
        localStorage.setItem('todo-list', JSON.stringify({ todos: currentTodos }));
      }

      useEffect(() => {
        if(!localStorage || !localStorage.getItem('todo-list')) return;
          let db = JSON.parse(localStorage.getItem('todo-list'));
          setTodos(db.todos);
      },[]);


  return (
    <>
      <Header todos= {todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompletedTodo={handleCompletedTodo} />
      <TodoInput handleAddTodo={handleAddTodo}/>

    </>
  );
}

export default App;

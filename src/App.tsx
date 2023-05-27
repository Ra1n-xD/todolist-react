// import TodoList from './TodoList';
import AddTask from './components/AddTask/AddTask';
import AppInfo from './components/AppInfo/AppInfo';
import TasksList from './components/TasksList/TasksList';
import TasksFilter from './components/TasksFilter/TasksFilter';

import React, { useState } from 'react';

import './App.css';

interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<ITask[]>([
    { id: Math.random() * 1000, title: 'Максим', completed: true },
    { id: Math.random() * 1000, title: 'не', completed: true },
    { id: Math.random() * 1000, title: 'лох', completed: false }
  ]);

  function addTask(titleTask: string) {
    setTodos([{ id: Math.random() * 1000, title: titleTask, completed: false }, ...todos]);
  }

  return (
    <div className="app">
      <AppInfo />
      <TasksFilter />
      <AddTask addTask={addTask} />
      <TasksList todos={todos} />
    </div>
  );
};

export default App;

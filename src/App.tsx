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
  favorites: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<ITask[]>([
    { id: Math.floor(Math.random() * 1000), title: 'Максим', completed: false, favorites: false },
    { id: Math.floor(Math.random() * 1000), title: 'не', completed: false, favorites: false },
    { id: Math.floor(Math.random() * 1000), title: 'лох', completed: false, favorites: false }
  ]);

  const [visibleTodos, setVisibleTodos] = useState<ITask[]>(todos);

  const addTask = (titleTask: string) => {
    const newTask: ITask = {
      id: Math.floor(Math.random() * 1000),
      title: titleTask,
      completed: false,
      favorites: false
    };

    setTodos((prevTodos) => [newTask, ...prevTodos]);
    setVisibleTodos((prevTodos) => [newTask, ...prevTodos]);
  };

  const deleteTask = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
    setVisibleTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
  };

  const completeTask = (id: number) => {
    const complete = (prevTodos: any) => {
      const newTodos = prevTodos.map((task: any) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed, favorites: false };
        }
        return task;
      });

      const completedTasks = newTodos.filter((task: any) => task.completed);
      const activeTasks = newTodos.filter((task: any) => !task.completed);
      return [...activeTasks, ...completedTasks];
    };

    setTodos((prevTodos) => complete(prevTodos));
    setVisibleTodos((prevTodos) => complete(prevTodos));
  };

  const favoritesTask = (id: number) => {
    const favorites = (prevTodos: any) => {
      return prevTodos.map((task: any) => {
        if (task.id === id) {
          return { ...task, favorites: !task.favorites };
        }
        return task;
      });
    };

    setTodos((prevTodos) => favorites(prevTodos));
    setVisibleTodos((prevTodos) => favorites(prevTodos));
  };

  const showAll = () => {
    setVisibleTodos(todos);
  };

  const showIncomplete = () => {
    setVisibleTodos(todos.filter((task) => !task.completed));
  };

  const showFavorites = () => {
    setVisibleTodos(todos.filter((task) => task.favorites));
  };

  return (
    <div className="app">
      <AppInfo todos={todos} />
      <TasksFilter showAll={showAll} showIncomplete={showIncomplete} showFavorites={showFavorites} />
      <AddTask addTask={addTask} />
      <TasksList todos={visibleTodos} deleteTask={deleteTask} completeTask={completeTask} favoritesTask={favoritesTask} />
    </div>
  );
};

export default App;

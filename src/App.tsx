import { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import AppInfo from './components/AppInfo/AppInfo';
import TasksList from './components/TasksList/TasksList';
import TasksFilter from './components/TasksFilter/TasksFilter';

import './App.css';

interface ITask {
  id: number;
  title: string;
  completed: boolean;
  favorites: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<ITask[]>([
    { id: Math.random() * 1000, title: 'Максим', completed: false, favorites: false },
    { id: Math.random() * 1000, title: 'Не', completed: false, favorites: false },
    { id: Math.random() * 1000, title: 'Лох', completed: false, favorites: false }
  ]);

  const addTask = (titleTask: string) => {
    const newTask: ITask = {
      id: Math.random() * 1000,
      title: titleTask,
      completed: false,
      favorites: false
    };

    setTodos((prevTodos) => [newTask, ...prevTodos]);
  };

  const deleteTask = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
  };

  const completeTask = (id: number) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((task: any) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed, favorites: false };
        }
        return task;
      });

      const completedTasks = newTodos.filter((task: any) => task.completed);
      const activeTasks = newTodos.filter((task: any) => !task.completed);
      return [...activeTasks, ...completedTasks];
    });
  };

  const favoritesTask = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((task) => {
        if (task.id === id) {
          return { ...task, favorites: !task.favorites };
        }
        return task;
      })
    );
  };

  const filterTasks = (filter: string) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'incomplete':
        return todos.filter((task) => !task.completed);
      case 'favorites':
        return todos.filter((task) => task.favorites);
      default:
        return todos;
    }
  };

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const visibleTodos = filterTasks(filter);

  return (
    <div className="app">
      <AppInfo todos={todos} />
      <TasksFilter handleFilterChange={handleFilterChange} selectedFilter={filter} />
      <AddTask addTask={addTask} />
      <TasksList todos={visibleTodos} deleteTask={deleteTask} completeTask={completeTask} favoritesTask={favoritesTask} />
    </div>
  );
};

export default App;

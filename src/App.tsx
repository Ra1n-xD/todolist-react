import { useState, useEffect } from 'react';
import AddTask from './components/AddTask/AddTask';
import AppInfo from './components/AppInfo/AppInfo';
import TasksList from './components/TasksList/TasksList';
import TasksFilter from './components/TasksFilter/TasksFilter';

import './App.css';

interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  favorites: boolean;
}

const App = () => {
  const startOfUse: ITask[] = [
    {
      id: -1,
      title: 'Добро пожаловать в самую крутую тудушку, посмотри описание',
      completed: false,
      favorites: false,
      description: 'Данная тудушка имеет следующий функционал...\n\nНу тут я типо дал гайд чо и как тут работает =)'
    }
  ];

  const saveTasksToLocalStorage = (tasks: ITask[]) => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      localStorage.setItem('tasks', JSON.stringify([]));
      console.error('Ошибка сохранения данных в localStorage:', error);
    }
  };

  const getTasksFromLocalStorage = () => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : startOfUse;
    } catch (error) {
      console.error('Ошибка получения данных из localStorage:', error);
      return [{ id: -2, title: 'Ты долбаеб, ты как умудрился сломать localstorage?', completed: false, favorites: false, description: '' }];
    }
  };

  const initialTasks = getTasksFromLocalStorage();
  const [todos, setTodos] = useState(initialTasks);

  useEffect(() => {
    saveTasksToLocalStorage(todos);
  });

  const addTask = (titleTask: string) => {
    const newTask: ITask = {
      id: Math.floor(Math.random() * 10000),
      title: titleTask,
      completed: false,
      favorites: false,
      description: ''
    };

    setTodos((prevTodos: ITask[]) => [newTask, ...prevTodos]);
  };

  const deleteTask = (id: number) => {
    setTodos((prevTodos: ITask[]) => prevTodos.filter((task) => task.id !== id));
  };

  const completeTask = (id: number) => {
    setTodos((prevTodos: ITask[]) => {
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
    setTodos((prevTodos: ITask[]) =>
      prevTodos.map((task) => {
        if (task.id === id) {
          return { ...task, favorites: !task.favorites };
        }
        return task;
      })
    );
  };

  const updateTaskName = (id: any, newName: any) => {
    setTodos((prevTodos: ITask[]) =>
      prevTodos.map((task) => {
        if (task.id === id) {
          return { ...task, title: newName };
        }
        return task;
      })
    );
  };

  const updateTaskDescription = (id: any, newDescription: any) => {
    setTodos((prevTodos: ITask[]) =>
      prevTodos.map((task) => {
        if (task.id === id) {
          return { ...task, description: newDescription };
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
        return todos.filter((task: ITask) => !task.completed);
      case 'favorites':
        return todos.filter((task: ITask) => task.favorites);
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
      <TasksList todos={visibleTodos} deleteTask={deleteTask} completeTask={completeTask} favoritesTask={favoritesTask} updateTaskName={updateTaskName} updateTaskDescription={updateTaskDescription} />
    </div>
  );
};

export default App;

// import TodoList from './TodoList';
import AddTask from './components/AddTask/AddTask';
import AppInfo from './components/AppInfo/AppInfo';
import TasksList from './components/TasksList/TasksList';
import TasksFilter from './components/TasksFilter/TasksFilter';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <AppInfo />
      <AddTask />
      <TasksFilter />
      <TasksList />
    </div>
  );
};

export default App;

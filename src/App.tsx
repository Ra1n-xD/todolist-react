// import TodoList from './TodoList';
import AppInfo from './components/AppInfo/AppInfo';
import AppFilter from './components/AppFilter/AppFilter';
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <AppInfo />
      <AddTask />
      <AppFilter />
      <TasksList />
    </div>
  );
};

export default App;

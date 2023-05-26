import TasksListItem from '../TasksListItem/TasksListItem';

// import './TasksList.css';

const TasksList = () => {
  return (
    <div className="task-list">
      <TasksListItem name={'я'} />
      <TasksListItem name={'люблю'} />
      <TasksListItem name={'Максима <3'} />
    </div>
  );
};

export default TasksList;

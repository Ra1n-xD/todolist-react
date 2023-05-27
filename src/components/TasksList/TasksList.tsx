import TasksListItem from './TasksListItem';

const TasksList = () => {
  return (
    <ul className="task-list">
      <span className="task-separator"></span>
      <TasksListItem name={'я'} styleName="" />
      <span className="task-separator"></span>
      <TasksListItem name={'люблю'} styleName="task-completed" />
      <span className="task-separator"></span>
      <TasksListItem name={'Максима <3'} styleName="" />
      <span className="task-separator"></span>
    </ul>
  );
};

export default TasksList;

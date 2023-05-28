import TasksListItem from './TasksListItem';

const TasksList = ({ todos, deleteTask, completeTask, favoritesTask }: any) => {
  const tasksList = todos.map((task: any) => {
    const { id, title, completed, favorites } = task;

    let taskStyle = '';
    if (completed) taskStyle += ' task-completed';
    else if (favorites) taskStyle += ' tast-item-favorites';

    return <TasksListItem key={id} id={id} name={title} styleName={taskStyle} deleteTask={deleteTask} completeTask={completeTask} favoritesTask={favoritesTask} />;
  });

  return <ul className="task-list">{tasksList}</ul>;
};

export default TasksList;

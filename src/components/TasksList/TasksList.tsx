import TasksListItem from './TasksListItem';

const TasksList = ({ todos }: any) => {
  // console.log(todos);
  const tasksList = todos.map((task: any) => {
    const { id, title, completed } = task;

    return <TasksListItem key={id} name={title} styleName={completed ? 'task-completed' : ''} />;
  });

  return <ul className="task-list">{tasksList}</ul>;
};

export default TasksList;

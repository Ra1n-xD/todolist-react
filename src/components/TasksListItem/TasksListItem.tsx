import './TasksListItem.css';

const TasksListItem = ({ name }: { name: string }) => {
  const handleTaskClick = () => {};

  return (
    <div className="task-list-item">
      <span className="task-label" onClick={handleTaskClick}>
        {name}
      </span>
      <div className="task-buttons">
        <button type="button" className="btn btn-favorite">
          В избранное
        </button>
        <button type="button" className="btn btn-delete">
          Удалить
        </button>
      </div>
    </div>
  );
};

export default TasksListItem;

import Button from '../Button/Button';

import './TasksList.css';

const TasksListItem = ({ id, name, styleName, deleteTask, completeTask, favoritesTask }: any) => {
  return (
    <>
      <li className={'task-list-item ' + styleName} onClick={() => completeTask(id)}>
        <span className="task-label">{name}</span>
        <div className="task-buttons">
          <Button name={'В избранное'} styleName={'btn btn-favorite ' + styleName} onClick={() => favoritesTask(id)} />
          <Button name={'Удалить'} styleName={'btn btn-delete'} onClick={() => deleteTask(id)} />
        </div>
      </li>
      <span className="task-separator"></span>
    </>
  );
};

export default TasksListItem;

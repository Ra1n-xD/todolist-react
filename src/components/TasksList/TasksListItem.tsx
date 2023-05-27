import Button from '../Button/Button';

import './TasksList.css';

const TasksListItem = ({ name, styleName }: { name: string; styleName: string }) => {
  const handleTaskClick = () => {};

  return (
    <>
      <li className={'task-list-item ' + styleName}>
        <span className="task-label" onClick={handleTaskClick}>
          {name}
        </span>
        <div className="task-buttons">
          <Button name={'В избранное'} styleName={'btn btn-favorite'} />
          <Button name={'Удалить'} styleName={'btn btn-delete'} />
        </div>
      </li>
      <span className="task-separator"></span>
    </>
  );
};

export default TasksListItem;

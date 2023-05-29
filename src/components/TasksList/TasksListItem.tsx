import React, { useState } from 'react';
import Button from '../Button/Button';

import './TasksList.css';

const TasksListItem = ({ id, name, completed, styleName, deleteTask, completeTask, favoritesTask, updateTaskName }: any) => {
  const [newName, setNewName] = useState(name);
  const [editing, setEditing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleNameClick = (e: any) => {
    e.stopPropagation();
    setEditing(true);
    setIsFocused(true);
  };

  const handleSaveClick = () => {
    updateTaskName(id, newName);
    setEditing(false);
    setIsFocused(false);
  };

  const handleInputChange = (e: any) => {
    setNewName(e.target.value);
  };

  const handleInputBlur = () => {
    if (editing) {
      handleSaveClick();
    }
  };

  const handleInputKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      if (editing) {
        handleSaveClick();
        setIsFocused(false);
      }
    }
  };

  return (
    <>
      <li className={'task-list-item ' + styleName}>
        <div className="task-details">
          <input type="checkbox" checked={completed} onClick={() => completeTask(id)} className="checkbox-input" />
          <input
            type="text"
            value={newName}
            className="editable-field"
            onChange={handleInputChange}
            onClick={handleNameClick}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            readOnly={!editing}
            autoFocus={isFocused}
          />
        </div>
        <div className="task-buttons">
          {editing && <Button name={'Сохранить'} styleName="btn btn-outline-light" onClick={handleSaveClick} />}
          <Button name={'В избранное'} styleName={'btn btn-favorite ' + styleName} onClick={() => favoritesTask(id)} />
          <Button name={'Удалить'} styleName={'btn btn-delete'} onClick={() => deleteTask(id)} />
        </div>
      </li>
      <span className="task-separator"></span>
    </>
  );
};

export default TasksListItem;

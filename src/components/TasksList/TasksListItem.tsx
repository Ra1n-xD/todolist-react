import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import './TasksList.css';

const TasksListItem = ({ id, name, completed, styleName, deleteTask, completeTask, favoritesTask, updateTaskName }: any) => {
  const [newName, setNewName] = useState(name);
  const [editing, setEditing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
          {editing && <Button styleName="btn btn-outline-light" onClick={handleSaveClick} type={'save'} />}
          <Button styleName="btn btn-outline-light" onClick={handleModalOpen} icon={'modal'} />
          <Button styleName="btn btn-favorite" onClick={() => favoritesTask(id)} icon={'favorite'} />
          <Button styleName="btn btn-delete" onClick={() => deleteTask(id)} icon={'delete'} />
        </div>
      </li>
      <span className="task-separator"></span>

      {modalOpen && (
        <Modal onClose={handleModalClose} id={id} styleName={styleName} deleteTask={() => deleteTask(id)} newName={newName} onUpdate={handleSaveClick} favoritesTask={() => favoritesTask(id)}>
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
        </Modal>
      )}
    </>
  );
};

export default TasksListItem;

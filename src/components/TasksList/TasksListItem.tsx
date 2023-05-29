import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal'; // Подставьте ваш компонент модального окна

import './TasksList.css';

const TasksListItem = ({ id, name, completed, styleName, deleteTask, completeTask, favoritesTask, updateTaskName }: any) => {
  const [newName, setNewName] = useState(name);
  const [editing, setEditing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [description, setDescription] = useState('');

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

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
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
          <Button styleName={'btn btn-delete'} onClick={handleModalOpen} type={'modal'} />
          <Button styleName={'btn btn-favorite ' + styleName} onClick={() => favoritesTask(id)} type={'favorite'} />
          <Button styleName={'btn btn-delete'} onClick={() => deleteTask(id)} type={'delete'} />
        </div>
      </li>
      <span className="task-separator"></span>
      {modalOpen && (
        <Modal onClose={handleModalClose} deleteTask={() => deleteTask(id)} onUpdate={handleSaveClick} favoritesTask={() => favoritesTask(id)}>
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

          <span className="task-separator"></span>
          <textarea value={description} onChange={handleDescriptionChange} />
          <span className="task-separator"></span>
          <div className="task-buttons">
            <Button styleName={'btn btn-favorite ' + styleName} onClick={() => favoritesTask(id)} type={'favorite'} />
            <Button styleName={'btn btn-delete'} onClick={() => deleteTask(id)} type={'delete'} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default TasksListItem;

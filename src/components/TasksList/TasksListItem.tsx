import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import './TasksList.css';

const TasksListItem = ({ id, name, description, completed, styleName, deleteTask, completeTask, favoritesTask, updateTaskName, updateTaskDescription }: any) => {
  const [newName, setNewName] = useState(name);
  const [editing, setEditing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSave = () => {
    updateTaskName(id, newName);
    setEditing(false);
    setIsFocused(false);
  };

  const handleNameClick = (e: any) => {
    e.stopPropagation();
    setEditing(true);
    setIsFocused(true);
  };

  const handleInputChange = (e: any) => {
    setNewName(e.target.value);
  };

  const handleInputBlur = () => {
    if (editing) {
      handleSave();
    }
  };

  const handleInputKeyDown = (e: any) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      handleSave();
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const autoResizeTextarea = (e: any) => {
    e.style.height = '40px';
    e.style.height = `${e.scrollHeight}px`;
  };

  const handleTextareaRef = (e: any) => {
    if (e) {
      autoResizeTextarea(e);
    }
  };

  return (
    <>
      <li className={'task-list-item ' + styleName}>
        <div className="task-details">
          <input type="checkbox" checked={completed} onChange={() => completeTask(id)} className="checkbox-input" />
          <input
            type="text"
            value={newName}
            className="editable-field"
            onChange={(e) => setNewName(e.target.value)}
            onClick={handleNameClick}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            readOnly={!editing}
            autoFocus={isFocused}
          />
        </div>
        <div className="task-buttons">
          <Button styleName="btn btn-outline-light" onClick={handleModalOpen} icon="modal" />
          <Button styleName="btn btn-favorite" onClick={() => favoritesTask(id)} icon="favorite" />
          <Button styleName="btn btn-delete" onClick={() => deleteTask(id)} icon="delete" />
        </div>
      </li>
      <span className="task-separator"></span>

      {modalOpen && (
        <Modal
          id={id}
          onClose={handleModalClose}
          styleName={styleName}
          deleteTask={() => deleteTask(id)}
          newName={newName}
          description={description}
          updateTaskDescription={updateTaskDescription}
          favoritesTask={() => favoritesTask(id)}
        >
          <div className="task-details">
            <input type="checkbox" checked={completed} onChange={() => completeTask(id)} className="checkbox-input" />
            <textarea
              value={newName}
              className="modal-title"
              onChange={handleInputChange}
              onClick={handleNameClick}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              readOnly={!editing}
              autoFocus={isFocused}
              ref={handleTextareaRef}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default TasksListItem;

import { useState } from 'react';
import Button from '../Button/Button';

import './Modal.css';

const Modal = ({ id, styleName, onClose, deleteTask, onUpdate, favoritesTask, newName, children }: any) => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={'modal-body ' + styleName}>
          <div className="modal-task">{children}</div>
          <span className="task-separator"></span>
          <textarea className="modal-description" value={description} placeholder="Описание" onChange={handleDescriptionChange} />
          <span className="task-separator"></span>
          <div className="task-buttons">
            <Button styleName="btn btn-favorite" onClick={() => favoritesTask(id)} icon="favorite" />
            <Button styleName="btn btn-delete" onClick={() => deleteTask(id)} icon="delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

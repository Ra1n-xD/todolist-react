import { useState } from 'react';

import './AddTask.css';

const AddTask = ({ addTask }: any) => {
  const [value, setValue] = useState('');

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  function handleClick(e: any) {
    e.preventDefault();
    if (value.trim().length < 1) return;
    addTask(value);
    setValue('');
  }

  return (
    <div className="app-add-form">
      <form className="add-form">
        <input type="text" className="form-control" value={value} placeholder="Добавить задачу" onChange={handleChange} />
        <button type="submit" className="btn btn-outline-light" onClick={handleClick}>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddTask;

import { useState } from 'react';
import Button from '../Button/Button';

import './AddTask.css';

const AddTask = ({ addTask }: any) => {
  const [value, setValue] = useState('');

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  function handleClick(e: any) {
    if (value.trim().length < 1) return;
    addTask(value);
    setValue('');
  }

  return (
    <div className="app-add-form">
      <form className="add-form">
        <input type="text" className="form-control" value={value} placeholder="Добавить задачу" onChange={handleChange} />
        <Button type="submit" styleName="btn btn-outline-light" onClick={handleClick} name="Добавить" />
      </form>
    </div>
  );
};

export default AddTask;

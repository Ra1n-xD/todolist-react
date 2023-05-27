import Button from '../Button/Button';
import React, { useState } from 'react';

import './AddTask.css';

const AddTask = ({ addTask, findTask }: any) => {
  const [value, setValue] = useState<string>('');

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  function handleClick(e: any) {
    if (value.length < 1) return;
    addTask(value);
    setValue('');
  }

  return (
    <div className="app-add-form">
      <form className="add-form">
        <input type="text" className="form-control" value={value} placeholder="Добавить/найти задачу" onChange={handleChange} />
        <Button name={'Добавить'} styleName={'btn btn-outline-light'} onClick={handleClick} />
        {/* <Button name={'Поиск'} styleName={'btn btn-outline-light'} onClick={handleClick} /> */}
      </form>
    </div>
  );
};

export default AddTask;

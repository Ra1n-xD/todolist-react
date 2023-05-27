import Button from '../Button/Button';

import './AddTask.css';

const AddTask = () => {
  return (
    <div className="app-add-form">
      <form className="add-form">
        <input type="text" className="form-control" placeholder="Добавить/найти задачу" />
        <Button name={'Добавить'} styleName={'btn btn-outline-light'}/>
        <Button name={'Поиск'} styleName={'btn btn-outline-light'}/>
      </form>
    </div>
  );
};

export default AddTask;

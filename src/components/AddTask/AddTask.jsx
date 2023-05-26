import './AddTask.css';

const AddTask = () => {
  return (
    <div className="app-add-form">
      <form className="add-form">
        <input type="text" className="form-control" placeholder="Добавьте задачу" />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddTask;

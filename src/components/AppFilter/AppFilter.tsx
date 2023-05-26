import './AppFilter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">
        Все
      </button>
      <button type="button" className="btn btn-outline-light">
        Не выполнено
      </button>
      <button type="button" className="btn btn-outline-light">
        Избранное
      </button>
    </div>
  );
};

export default AppFilter;

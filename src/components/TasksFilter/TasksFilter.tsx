import Button from '../Button/Button';

import './TasksFilter.css';

const TasksFilter = ({ handleFilterChange, selectedFilter }: any) => {
  return (
    <div className="btn-group">
      <Button name={'Все'} styleName={`btn ${selectedFilter === 'all' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => handleFilterChange('all')} />
      <Button name={'Не выполнено'} styleName={`btn ${selectedFilter === 'incomplete' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => handleFilterChange('incomplete')} />
      <Button name={'Избранное'} styleName={`btn ${selectedFilter === 'favorites' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => handleFilterChange('favorites')} />
    </div>
  );
};

export default TasksFilter;

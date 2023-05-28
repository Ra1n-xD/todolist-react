import Button from '../Button/Button';

import './TasksFilter.css';

const TasksFilter = ({ showAll, showIncomplete, showFavorites }: any) => {
  return (
    <div className="btn-group">
      <Button name={'Все'} styleName={'btn btn-outline-light'} onClick={showAll} />
      <Button name={'Не выполнено'} styleName={'btn btn-outline-light'} onClick={showIncomplete} />
      <Button name={'Избранное'} styleName={'btn btn-outline-light'} onClick={showFavorites} />
    </div>
  );
};

export default TasksFilter;

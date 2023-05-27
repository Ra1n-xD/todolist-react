import Button from '../Button/Button';

import './TasksFilter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <Button name={'Все'} styleName={'btn btn-light'} />

      <Button name={'Не выполнено'} styleName={'btn btn-outline-light'} />
      <Button name={'Избранное'} styleName={'btn btn-outline-light'} />
    </div>
  );
};

export default AppFilter;

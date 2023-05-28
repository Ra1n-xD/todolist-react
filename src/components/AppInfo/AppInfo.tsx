import './AppInfo.css';

const AppInfo = ({ todos }: any) => {
  const completedTasks = todos.reduce((acc: number, item: any) => (item.completed ? ++acc : acc), 0);
  const favoriteTasks = todos.reduce((acc: number, item: any) => (item.favorites ? ++acc : acc), 0);

  return (
    <div className="app-info">
      <h1>Пажылая ТуДуШка 6Seniors</h1>
      <h2>Общее число задач: {todos.length}</h2>
      <h2>Задач выполнено: {completedTasks}</h2>
      <h2>Избранных задач: {favoriteTasks}</h2>
    </div>
  );
};

export default AppInfo;

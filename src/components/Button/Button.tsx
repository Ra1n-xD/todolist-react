import './Button.css';

const Button = ({ name, styleName, onClick }: any) => {
  const handleTaskClick = (e: any) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button type="button" className={styleName} onClick={handleTaskClick}>
      {name}
    </button>
  );
};

export default Button;

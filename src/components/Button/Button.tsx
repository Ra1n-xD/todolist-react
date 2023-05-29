import { FaHeart, FaTrashAlt, FaCheck } from 'react-icons/fa';
import { TbAlignBoxLeftTop } from 'react-icons/tb';
import './Button.css';

const Button = ({ name, styleName, onClick, type }: any) => {
  let icon;
  if (type === 'favorite') icon = <FaHeart />;
  else if (type === 'delete') icon = <FaTrashAlt />;
  else if (type === 'save') icon = <FaCheck />;
  else if (type === 'modal') icon = <TbAlignBoxLeftTop />;

  const handleTaskClick = (e: any) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button type="button" className={styleName} onClick={handleTaskClick}>
      {type ? icon : name}
    </button>
  );
};

export default Button;

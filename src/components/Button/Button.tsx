import { FaHeart, FaTrashAlt, FaCheck } from 'react-icons/fa';
import { TbAlignBoxLeftTop } from 'react-icons/tb';
import './Button.css';

const Button = ({ name, styleName, type, onClick, icon }: any) => {
  if (icon) {
    if (icon === 'favorite') icon = <FaHeart />;
    else if (icon === 'delete') icon = <FaTrashAlt />;
    else if (icon === 'save') icon = <FaCheck />;
    else if (icon === 'modal') icon = <TbAlignBoxLeftTop />;
  }

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <button type={type || 'button'} className={styleName} onClick={handleButtonClick}>
      {icon ? icon : name}
    </button>
  );
};

export default Button;

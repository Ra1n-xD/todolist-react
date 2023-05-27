import './Button.css';

interface IButtonProps {
  name: string;
  styleName: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ name, styleName, onClick }: any) => {
  return (
    <button type="button" className={styleName} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;

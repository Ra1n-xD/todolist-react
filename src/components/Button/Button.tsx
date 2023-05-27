import './Button.css';

const Button = ({ name, styleName }: { name: string; styleName: string }) => {
  return (
    <button type="button" className={styleName}>
      {name}
    </button>
  );
};

export default Button;

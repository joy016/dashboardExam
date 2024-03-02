
import './Button.css';




const Button = ({
  btnName,
  btnColor,
  btnBorderRadius,
  btnSize,
  btnPadding,
  iconPosition,
  textColor,
  icon,
}) => {
  const buttonStyle = {
    backgroundColor: btnColor,
    borderRadius: btnBorderRadius,
    width: btnSize,
    padding: btnPadding,
    color: textColor,
  };
  return (
    <button style={buttonStyle} className="button-style">
      {iconPosition == 'right' && icon}
      {btnName}
      {iconPosition == 'left' && icon}
    </button>
  );
};

export default Button;

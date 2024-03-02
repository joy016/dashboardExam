import './HorizontalLine.css';

const HorizontalLine = ({ flex, bgColor, lineHeight }) => {
  const horizontalLineStyle = {
    flex: flex,
    backgroundColor: bgColor,
    height: lineHeight,
  };
  return <hr style={horizontalLineStyle} className="thick-line" />;
};

export default HorizontalLine;

import { FaSearch } from 'react-icons/fa';
import './Icon.css';
import { ReactNode } from 'react';

const Icon = ({ icon, color, iconColor }) => {
  const iconStyle = {
    backgroundColor: color,
    color: iconColor,
  };

  return (
    <div style={iconStyle} className="icon-container">
      {icon}
    </div>
  );
};

export default Icon;

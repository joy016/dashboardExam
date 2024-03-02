import Icon from '../../atoms/Icon/Icon';
import Heading from '../../atoms/Text/components/Heading';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <Heading headerText="Hello, Jhon .D" />
      <div className="search-container">
        <label>View and control your finances here!</label>
        <Icon icon={<FaSearch />} color="#FFFFFF" />
      </div>
    </div>
  );
};

export default Header;

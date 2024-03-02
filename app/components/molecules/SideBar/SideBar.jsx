import './Sidebar.css';
import { FaRegFolderOpen } from 'react-icons/fa';
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaRegBell, FaRegClock } from 'react-icons/fa';
import { GoPersonAdd } from 'react-icons/go';
import { LuWallet } from 'react-icons/lu';
import { MdExitToApp } from 'react-icons/md';
import Icon from '../../atoms/Icon/Icon';
const SideBar = () => {
  return (
    <div className="side-container">
      <div className="upper-icons">
        <h2>S.</h2>
        <Icon icon={<FaRegFolderOpen />} color="#FFCF96" />
      </div>
      <div className="center-icons">
        <Icon icon={<IoHomeOutline />} color="#0B60B0" iconColor="#FFFFFF" />
        <FaRegBell />
        <FaRegClock />
        <GoPersonAdd />
        <LuWallet />
        <IoSettingsOutline />
      </div>
      <div className="bottom-icons">
        <img src="images/woman.png" className="sidebar-img" />
        <MdExitToApp />
      </div>
    </div>
  );
};

export default SideBar;

import SideBar from '../../molecules/SideBar/SideBar';
import SideCard from '../../organisms/components/SideCard';
import './MainDashboardTemplate.css';

const MainDashboardTemplate = ({ children }) => {
  return (
    <div className="container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="dashboard-container">{children}</div>
      <SideCard />
    </div>
  );
};

export default MainDashboardTemplate;

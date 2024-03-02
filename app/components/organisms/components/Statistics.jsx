import Button from '../../atoms/Button/Button';
import CardHeading from '../../atoms/Text/components/CardHeading';
import DashBoardCard from './../../molecules/Card/components/DashboardCard';
import { FaAngleDown } from 'react-icons/fa';
import { MdArrowUpward } from 'react-icons/md';

import '../style/Statistics.css';

const Statistics = () => {
  return (
    <DashBoardCard>
      <div className="stat-heading-container">
        <CardHeading headingText="Balance statistics" />
        <Button
          btnName="Filter"
          btnColor="#f6f5f5"
          btnBorderRadius="5px"
          btnPadding="10px"
          textColor="#000000"
          iconPosition="left"
          icon={<FaAngleDown />}
        />
      </div>
      <div className="stat-center-container">
        <div className="stat-left-container">
          <label className="stat-balance">$564</label>
          <div className="coins-container">
            <img src="/images/coins.png" />
            <label>
              Your total <br />
              balance
            </label>
          </div>
          <hr />
            <div>
                <MdArrowUpward/>
                <label className='stat-progress-text'>6%</label>
            </div>
          <label className="stat-mini-text">
            Always see your earnings updates
          </label>
        </div>
        <div className="stat-right-container">side 1</div>
      </div>
    </DashBoardCard>
  );
};

export default Statistics;

import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import CardHeading from '../../atoms/Text/components/CardHeading';
import Card from '../../molecules/Card/components/Card';
import { IoArrowForward } from 'react-icons/io5';
import { HiDotsVertical } from 'react-icons/hi';
import { spendinglistData } from '@/app/constants/data';
import '../style/Spending.css';

const Spending = () => {
  return (
    <Card>
      <div className="spend-head-container">
        <CardHeading headingText="Latest spending" />
        <Icon icon={<HiDotsVertical />} iconColor="#000000" />
      </div>
      {spendinglistData.map((item, index) => (
        <div className="list-container" key={index}>
          <img src={item.imgSrc} className="spending-imgs" />
          <div className="list-text-container">
            <label className="spend-list-text">{item.listText}</label>
            <label className="spend-list-mini-text">{item.miniListText}</label>
          </div>
        </div>
      ))}

      <Button
        btnName="View All"
        icon={<IoArrowForward />}
        iconPosition="left"
        textColor="#387ADF"
        btnColor="transparent"
      />
    </Card>
  );
};

export default Spending;

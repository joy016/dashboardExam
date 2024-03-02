import CardHeading from '../../../atoms/Text/components/CardHeading';
import { IoIosArrowForward, IoIosAdd } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import '../style/ListItems.css';

const devicesItem = [
  { itemName: 'Macbook', check: true },
  { itemName: 'Bicycle', check: false },
  { itemName: 'Motorcyle', check: false },
  { itemName: 'Iphone 14 pro max', check: true },
];

const ListItem = () => {
  return (
    <div className="list-items-container">
    <div className="items-container">
      <CardHeading headingText="List of items to buy" />
      <div className="time-container">
        <div className="date-container">
          <label className="time-label">02:00</label>
          <label className="date-label">Sat, August 12</label>
        </div>
        <IoIosArrowForward />
        <div className="date-container">
          <label className="time-label">5:00</label>
          <label className="date-label">Sat, September 12</label>
        </div>
      </div>
      <div className="shopping-container">
        <div className="shopping-list-container">
          <label className="date-label">0/3</label>
          <label className="list-label">Shopping list</label>
        </div>
        <div className="shopping-list-container">
          <IoIosAdd />
          <label className="list-label">Add an Item</label>
        </div>
      </div>
      <div class="grid-container">
        {devicesItem.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="device">
              <input
                className="checkBox"
                type="checkbox"
                id={index}
                name={item.itemName}
                value={item.itemName}
                defaultChecked={item.check}
              />
              <label className="device-label">{item.itemName}</label>
            </div>
            <BsThreeDotsVertical />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ListItem;

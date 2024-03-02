'use client';

import { useState } from 'react';
import CardHeading from '../../atoms/Text/components/CardHeading';
import DashboardCard from '../../molecules/Card/components/DashboardCard';
import '../style/LastTransactionCard.css';
import MiniLabel from './../../atoms/Text/components/MiniLabel';
import { lastTransactionData } from '@/app/constants/data';
import PersonImage from '../../atoms/Image/Person';

const LastTransactionCard = () => {
  const [transactionData, setTransactionData] = useState(lastTransactionData);
  return (
    <DashboardCard>
      <div className="transact-main-container">
        <div className="transact-heading-container">
          <CardHeading headingText="Last transactions" />
          <div>
            <label>Newest</label>
            <label>Oldest</label>
          </div>
        </div>
        {transactionData.map((item, index) => (
          <div key={index} className="transact-list-container">
            <div className="info-container">
              <PersonImage imgSource={item.imgSrc} />
              <div className="text-container">
                <label>{item.name}</label>
                <MiniLabel labelTxt={item.date} />
              </div>
            </div>

            <div className="text-container">
              <label>{item.amount}</label>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default LastTransactionCard;

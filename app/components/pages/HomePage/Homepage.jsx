import Header from '../../molecules/Header/Header';
import DashBoard from '../../templates/Dashboard/MainDashboardTemplate';
import LastTransactionCard from '../../organisms/components/LastTransactionCard';
import CreditCard from '../../molecules/Card/components/CreditCard';
import Statistics from '../../organisms/components/Statistics';
import CenterContent from '../../organisms/component/CenterContent';

import './HomePage.css';

const HomePage = () => {
  return (
    <DashBoard>
      <Header />
      <div class="parent">
        <div class="div1">
          <Statistics />
        </div>
        <div class="div2">
          <CreditCard />
        </div>
        <div class="div3">
          <CenterContent/>
        
        </div>
        <div class="div4">
          <LastTransactionCard />
        </div>
        <div class="div5">
          <LastTransactionCard />
        </div>
      </div>
    </DashBoard>
  );
};

export default HomePage;

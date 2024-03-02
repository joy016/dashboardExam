import Header from "../../molecules/Header/Header";
import DashBoard from "../../templates/Dashboard/MainDashboardTemplate";
import LastTransactionCard from "../../organisms/components/LastTransactionCard";
import CreditCard from "../../molecules/Card/components/CreditCard";
import Statistics from "../../organisms/components/Statistics";
import ListItem from "../../molecules/Card/components/ListItem";
import ConvoCard from "../../molecules/Card/components/ConvoCard";
import Analytics from "../../organisms/components/Analytics";

import "./HomePage.css";

const HomePage = () => {
  return (
    <DashBoard>
      <Header />
      <div class="parent">
        <div class="div1">
          <Statistics />
          <CreditCard />
        </div>
        <div class="div2">
          <ListItem />
          <ConvoCard />
        </div>
        <div class="div3">
          <LastTransactionCard />
          <Analytics />
        </div>
      </div>
    </DashBoard>
  );
};

export default HomePage;

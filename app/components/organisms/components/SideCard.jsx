import '../style/SideCard.css';
import ExpensesList from '../../organisms/components/ExpensesList';
import Spending from '../components/Spending';
import Premium from '../components/Premium';

const SideCard = () => {
  return (
    <div className="sidecard-container">
      <ExpensesList />
      <Spending />
      <Premium textHeader="Need more features" />
    </div>
  );
};

export default SideCard;

import HorizontalLine from '../../atoms/Lines/HorizontalLine';
import CardHeading from '../../atoms/Text/components/CardHeading';
import Card from '../../molecules/Card/components/Card';
import '../style/Expenses.css';

const ExpensesList = () => {
  return (
    <Card>
      <CardHeading headingText="Expenses and income" />
      <div className="expenses-list">
        <div className="expenses">
          <label className="normal-text">Expense</label>
          <label className="normal-text">75%</label>
          <label className="mini-text">5.653</label>
        </div>
        <div className="center-expenses">
          <div className="vl"></div>
          <label className="normal-text">vs</label>
          <div className="vl"></div>
        </div>
        <div className="expenses">
          <label className="normal-text">Expense</label>
          <label className="normal-text">75%</label>
          <label className="mini-text">5.653</label>
        </div>
      </div>
      <div className="progressline-container">
        <HorizontalLine flex="3" bgColor="#387ADF" lineHeight="20px" />
        <HorizontalLine flex="1" bgColor="#FAA300" lineHeight="20px" />
      </div>
    </Card>
  );
};

export default ExpensesList;

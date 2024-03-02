import ListItem from "./../../molecules/Card/components/ListItem";
import ConvoCard from "./../../molecules/Card/components/ConvoCard";
import "../style/CenterContent.css";

const CenterContent = () => {
  return (
    <div className="center-content-list">
      <ListItem />
      <ConvoCard />
    </div>
  );
};

export default CenterContent;

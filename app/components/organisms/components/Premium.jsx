import Button from '../../atoms/Button/Button';
import CardHeading from '../../atoms/Text/components/CardHeading';
import Card from '../../molecules/Card/components/Card';
import '../style/Premium.css';

const Premium = () => {
  return (
    <Card>
      <div>
        <div className="prem-text-label-container">
          <label className="prem-text-label">Go to premuim</label>
        </div>
        <img src="/images/crown.png" className="img-crown" />
        <CardHeading headingText="Need more featurers?" />
        <label className="prem-subtext-label">
          Update your account to premium to get more features
        </label>
      </div>
      <Button
        btnName="Get now"
        btnColor="#387ADF"
        textColor="#FFFFFF"
        btnPadding="10px"
        btnBorderRadius="10px"
      />
    </Card>
  );
};

export default Premium;

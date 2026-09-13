import "../styles/ServiceCard.css";
const ServiceCard = ({ number, title, description }) => {
  return (
    <div className="info-card">
      <div className="info-card-header">
        <h3 className="info-title">{title}</h3>
        <span className="info-number">{number}</span>
      </div>
      <p className="info-description">{description}</p>
    </div>
  );
};
export default ServiceCard;

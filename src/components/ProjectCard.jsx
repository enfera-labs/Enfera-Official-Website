import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";
const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img
          src={image || "src/assets/images/ProjectCard.jpg"}
          alt="Project Image"
          className="project-card-image"
        />
      </div>
      <div className="project-card-body">
        <h3 className="project-title">{title || "Sample Project 01"}</h3>
        <p className="project-description">
          {description ||
            "ENFERA designed a sleek, high-performing e-commerce platform that enhances user experience with intuitive navigation, seamless checkout, and visually captivating product displays. "}
        </p>
        <Link to={link} target="blank">
          <button className="view-button">View Web</button>
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;

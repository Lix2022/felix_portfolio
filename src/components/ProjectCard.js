import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, description1, imgUrl, linkUrl }) => {
  return (
    <Col sm={6} md={4}>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br></br>
            <br></br>
            <span style={{ color: "yellow", fontStyle: "normal", fontSize: "14px" }}>{description1}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

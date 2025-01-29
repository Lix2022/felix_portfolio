import navIcon1 from "../assets/devicon/html.png";
import navIcon2 from "../assets/devicon/css-3.png";
import navIcon3 from "../assets/devicon/java-script.png";
import navIcon4 from "../assets/devicon/bootstrap.png";
import navIcon5 from "../assets/devicon/react.png";
import navIcon6 from "../assets/devicon/adobe-photoshop-logo.png";
import navIcon7 from "../assets/devicon/illustrator.png";
import navIcon8 from "../assets/devicon/premiere-pro.png";
import navIcon9 from "../assets/devicon/figma.png";
import navIcon10 from "../assets/devicon/visual-studio.png";

import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const Devicon = () => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div className="devicon">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon1} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon2} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon3} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon4} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon5} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon6} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon7} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon8} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon9} alt="Icon" className="icon-image" />
              </Col>
              <Col xs="auto" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={navIcon10} alt="Icon" className="icon-image" />
              </Col>
              
            </Row>
          </Container>
        </div>
      )}
    </TrackVisibility>
  );
};

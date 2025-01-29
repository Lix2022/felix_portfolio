
import meter11 from "../assets/img/meter75.svg";
import meter80 from "../assets/img/meter80.svg";
import meter90 from "../assets/img/meter90.svg";
//import meter3 from "../assets/img/meter3.svg";
//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
//import colorSharp from "../assets/img/color-sharp.png"
import "animate.css/animate.min.css";
import TrackVisibility from "react-on-screen";
import { Row, Col } from "react-bootstrap";

export const Skills = () => {
 //Caroasel unta ni//
  /*const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  */

  return (
    <section className="skill" id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-bx wow zoomIn">
           
                  <h2>About</h2>
                  <p>
                    Hello! I am Felix; As a versatile professional, I excel in various digital disciplines. From web
                    development with React, WordPress and HTML to creating captivating designs as a web and graphic designer.
                    My knowledge of the VB.NET framework allows me to develop efficient software solutions, and my video
                    editing skills bring stories to life through compelling visual storytelling. I am a proactive problem
                    solver and effective communicator, ready to take on any digital challenge that comes my way.
                  </p>
              
           
                        <h1>Skills Percentage</h1>
                
                        <TrackVisibility>
                {({ isVisible }) => (
                 // <Carousel
                 <Row className="grid-row">
                 <Col xs={12} sm={6} md={3}>
                   <div className={`item ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
                     <img src={meter11} alt="HTML" className="small-image" />
                     <h5>Web Development</h5>
                   </div>
                 </Col>
                 <Col xs={12} sm={6} md={3}>
                   <div className={`item ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
                     <img src={meter90} alt="Design" className="small-image" />
                     <h5>Graphics Design</h5>
                   </div>
                 </Col>
                 <Col xs={12} sm={6} md={3}>
                   <div className={`item ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
                     <img src={meter11} alt="Program" className="small-image" />
                     <h5>Programming</h5>
                   </div>
                 </Col>
                 <Col xs={12} sm={6} md={3}>
                   <div className={`item ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
                     <img src={meter80} alt="Editing" className="small-image" />
                     <h5>Video Editing</h5>
                   </div>
                 </Col>
               </Row>
                  //</TrackVisibility></Carousel>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="background" /> */}
    </section>
  )
}
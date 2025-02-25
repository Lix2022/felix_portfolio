import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
//import colorSharp2 from "../assets/img/color-sharp2.png";

import kerporformerImg1 from "../assets/img/graphicsDesign/indvidual.png";
import kerporformerImg2 from "../assets/img/graphicsDesign/Der_Checkup.png";
import kerporformerImg3 from "../assets/img/graphicsDesign/Coaching.png";
import kerporformerImg4 from "../assets/img/graphicsDesign/Der_Turbo.png";
import kerporformerImg5 from "../assets/img/graphicsDesign/Inbody.png";
import fairetailImg1 from "../assets/img/graphicsDesign/fairetail1.png";
import fairetailImg2 from "../assets/img/graphicsDesign/fairetail2.png";
import fairetailImg3 from "../assets/img/graphicsDesign/fairetail3.png";
import finanzeImg1 from "../assets/img/graphicsDesign/finanze.png";
import finanzeImg2 from "../assets/img/graphicsDesign/finanze2.png";
import finanzeImg3 from "../assets/img/graphicsDesign/finanze3.png";
import finanzeImg4 from "../assets/img/graphicsDesign/finanze4.png";
import techvisionImg1 from "../assets/img/graphicsDesign/techvision1.png";
import techvisionImg2 from "../assets/img/graphicsDesign/techvision2.png";
import techvisionImg3 from "../assets/img/graphicsDesign/techvision3.png";
import jerseyImg from "../assets/img/graphicsDesign/jersey.png";
import nbaposterImg from "../assets/img/graphicsDesign/nba_poster.png";
import yamhaImg from "../assets/img/graphicsDesign/yamaha.png";
import desigImgLogo from "../assets/img/graphicsDesign/logo_design.png";
import programImg1 from "../assets/img/program/program-img1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import VideoEmbed from "./VideoEmbed";




export const Projects = () => {

  const projects = [
    {
      title: "Tractolator",
      description: "Payment & Time",
      imgUrl: projImg1,
      description1:  "Visit Site",
      linkUrl: "https://lix2022.github.io/tractolator/"
      
    },
    {
      title: "Katipun Parish",
      description: "Saint Francis Xavier",
      imgUrl: projImg2,
    },
    {
      title: "SewSew Barbershop",
      imgUrl: projImg3,
      description: "Visit Site",
      linkUrl: "https://sewsewbarbershop.glixdev.site"

    },
      {
      title: "InComEnergo LLP",
      imgUrl: projImg4,
      description: "Visit Site",
      linkUrl: "https://incomenergo.com"

    },
      {
      title: "Entrümpel Express",
      imgUrl: projImg5,
      description: "Visit Site",
      linkUrl: "https://entruempel-express.de"

    },
   
  ];

  const graphicsDesignCards = [
   
    {
      title: "Korperformer",
      description: "Advertising Campaigns",
      imgUrl: kerporformerImg1,
    },
   
    {
      title: "Korperformer",
      description: "Advertising Campaigns",
      imgUrl: kerporformerImg2,
    },
    {
      title: "Korperformer",
      description: "Advertising Campaigns",
      imgUrl: kerporformerImg3,
    },
    {
      title: "Korperformer",
      description: "Advertising Campaigns",
      imgUrl: kerporformerImg4,
    },
    {
      title: "Korperformer",
      description: "Advertising Campaigns",
      imgUrl: kerporformerImg5,
    },
    {
      title: "FaiRetail",
      description: "Advertising Campaigns",
      imgUrl: fairetailImg1,
    },
     {
      title: "FaiRetail",
      description: "Mobile Mockup",
      imgUrl: fairetailImg2,
    },
     {
      title: "FaiRetail",
      description: "Tablet Mockup",
      imgUrl: fairetailImg3,
    },

    {
      title: "Finanzberatung",
      description: "Advertising Campaigns",
      imgUrl: finanzeImg1,
    }, 
    {
      title: "Finanzberatung",
      description: "Advertising Campaigns",
      imgUrl: finanzeImg2,
    },
     {
      title: "Finanzberatung",
      description: "Advertising Campaigns",
      imgUrl: finanzeImg3,
    }, 
    {
      title: "Finanzberatung",
      description: "Advertising Campaigns",
      imgUrl: finanzeImg4,
    },

    {
      title: "TechVision",
      description: "Advertising Campaigns",
      imgUrl: techvisionImg1,
    },
    {
      title: "TechVision",
      description: "Advertising Campaigns",
      imgUrl: techvisionImg2,
    },
    {
      title: "TechVision",
      description: "Advertising Campaigns",
      imgUrl: techvisionImg3,
    },
    {
      title: "NBA Poster",
      description: "Advertising Campaigns",
      imgUrl: nbaposterImg,
    },
    {
      title: "Basketball Jersey",
      description: "Basketball Mockup Jersey",
      imgUrl: jerseyImg,
    },

    {
      title: "Yamaha",
      description: "Advertising Campaigns",
      imgUrl: yamhaImg,
    },
    {
      title: "Logo Creation",
      description: "By: Felix Gayawon",
      imgUrl: desigImgLogo,
    },
    
  ];

  const programCards = [
    {
      title: "Parish Record Management System",
      description: "Visual Basic .Net",
      imgUrl: programImg1,
     
      
    },
  ];
 
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Below are all of my projects. I have created these projects based on my clients' requirements, and I would like to share my skills with your company or contribute to your future projects.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Graphics Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Programming VB.NET</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Video Editing</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      
                      <Tab.Pane eventKey="first">
                        <Row>
                        {projects.map((project, index) => (
                                  <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                        
                      <Tab.Pane eventKey="second">
                      <Row>
                      {graphicsDesignCards.map((graphicsDesignCard, index) => (
                                  <ProjectCard key={index} {...graphicsDesignCard} />
                           ))}
                           </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                      <Row>
                      {programCards.map((programCard, index) => (
                                  <ProjectCard key={index} {...programCard} />
                           ))}
                           </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                      <VideoEmbed/>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     {/*  <img className="background-image-right" src={colorSharp2} alt=""></img>*/}
    </section>
  )
}

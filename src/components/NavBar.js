import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-scroll';
import logo from '../assets/img/glixLogo.svg';
//import navIcon1 from '../assets/img/nav-icon1.svg';
//import navIcon2 from '../assets/img/nav-icon2.svg';
//import navIcon3 from '../assets/img/nav-icon3.svg';
import closeIcon from '../assets/img/close-icon.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Navbar expand="sm" className={scrolled ? "scrolled" : ""}>
      <Container>
      
        <Navbar.Brand href="https://lix2022.github.io/felix_portfolio/">
         {/*  <span className="navbar-textL">Glix.dev</span>*/}
          <img src={logo} alt="Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
          {isExpanded ? (
            <img src={closeIcon} alt="Close Icon" className="close-icon" />
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('project')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            {/* <div className="social-icon">
             <a href="https://www.linkedin.com/in/felix-g-b9aaa6217/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/FelixG28" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/glix29/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="" />
              </a>
              
            </div>*/}
            <Link
              to="connect"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

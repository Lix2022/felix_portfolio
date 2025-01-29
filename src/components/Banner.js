
//import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner.png";
//import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
//import { Link } from 'react-scroll';

export const Banner = () => {

  //Banner Animation typwriter//

 /* const [loopNum, setLoopNum] = useStatse(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
 const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Graphics Designer", "Programmer/VB.net", "Video Editor" ];
  const period = 2000; 

 useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  } 

*/

const handleDownloadCV = () => {
  // Assuming "cv.pdf" is in the public/pdfs folder
  const cvFile = process.env.PUBLIC_URL + "/pdfs/cv.pdf";

  // Create an anchor element
  const downloadLink = document.createElement("a");
  downloadLink.href = cvFile;
  downloadLink.target = "_blank"; // Open the link in a new tab
  downloadLink.download = "cv.pdf"; // File name for the download

  // Append the anchor element to the document
  document.body.appendChild(downloadLink);

  // Trigger the click event on the anchor element
  downloadLink.click();

  // Remove the anchor element from the document
  document.body.removeChild(downloadLink);
};

const openPdfInNewTab = () => {
  const pdfUrl = `${window.location.origin}/felix_portfolio/pdfs/cv.pdf`; // Use the full path including the GitHub Pages base path
  window.open(pdfUrl, '_blank'); // Opens in a new tab
};



  return (
    
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                 <span className="tagline" >Welcome to my Portfolio</span>
                <h1>{`Hello! I'm Felix`}
               
                 {/*<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span>*/}
                 </h1>
                  <p> Passionate about creating engaging digital experiences through web development, design and video editing.</p>
                  {/*<button onClick={() =>  window.location.replace("https://lix2022.github.io/My-Personal-Portfolio/#connect")}>Let’s Connect <ArrowRightCircle size={25} /></button>*/}

               {/*  
                  <Link
              to="connect"
              smooth={true}
              duration={500}
              offset={-50}
            >

             <button className="vvd">
                <span>Let’s Connect <ArrowRightCircle size={25}/></span>
              </button>
             
          </Link>
          */} 


              <button1 className="button1" onClick={handleDownloadCV}>
                <span>Download CV</span>
              </button1>
             
              <button2 className="button2" onClick={openPdfInNewTab}>
        <span>View CV</span>
      </button2>

 
    
           
              </div>}
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg}  alt="Header Img"/>
                  
                </div>}
          
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

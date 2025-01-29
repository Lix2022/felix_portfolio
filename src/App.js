import React, { useState, useEffect } from 'react';
//import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Devicon } from './components/Devicon';
import ScrollUpButton from './components/ScrollUpButton';
import TrackVisibility from 'react-on-screen';
import "animate.css/animate.min.css";
import Loader from './components/loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? ( // Show loader while isLoading is true
        <Loader />
      ) : (
        <>
          <NavBar />
          <Banner />
          <TrackVisibility>
            {({ isVisible }) => (
              <Devicon className={isVisible ? "animate__animated animate__bounceIn" : ""} />
            )}
          </TrackVisibility>
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <ScrollUpButton />
        </>
      )}
    </div>
  );
}

export default App;

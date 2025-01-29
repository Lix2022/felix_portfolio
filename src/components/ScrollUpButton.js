import React, { useState, useEffect } from 'react';
import arrowUpIcon from '../assets/img/arrow-up.png';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-up-button" onClick={scrollToTop}>
          <img src={arrowUpIcon} alt="Scroll Up" />
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;

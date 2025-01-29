import React from "react";

const VideoEmbed = () => {
    return (
        <div className="video-row">

    <div className="video-container">
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fNPjNBWDbac" 
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <div className="video-container">
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/s10fbkCDKok" 
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    
    <div className="video-container">
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7QV324O8Bd8"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
          

    <div className="video-container">
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OXpAEgbUfvY" 
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
        </div>
      );
    };
    
    export default VideoEmbed;
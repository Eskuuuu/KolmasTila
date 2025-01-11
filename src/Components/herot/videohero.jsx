import "./videohero.css";
import React from "react";

function VideoHero() {
  return (
    <div className="video-hero-container">
      <div className="text-container">
        <h1 className="video-hero-text">
          Mikä on sinun
          <span className="video-hero-text-hl"> Kolmas tilasi?</span>
        </h1>
      </div>
      <div className="video-overlay">
        <a href="https://youtu.be/Nt69l65sgwM">
          <video src="/videos/VJP_kamppanjavideo.mp4" autoPlay muted loop></video>
        </a>
      </div>
      
    </div>
    
  );
}

export default VideoHero;

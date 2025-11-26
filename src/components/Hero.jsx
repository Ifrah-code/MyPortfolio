

import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import developerImage from '../assests/developer.jpeg';



const Hero = () => {
  const particlesInit = (engine) => {
    loadSlim(engine);
  };

  return (
    <section id="home" className="hero-section">
      <img
        src={developerImage}
        alt="Background"
        className="hero-background-image"
      />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      
      <div className="hero-content-container">
        <div className="hero-text-content">
          <div className="social-links-left">
            <a 
    href="https://github.com/Ifrah-code" 
    target="_blank" 
     rel="noopener noreferrer"
  > 
  </a>

  <a 
    href="https://www.linkedin.com/in/ifrahs" 
    target="_blank" 
    rel="noopener noreferrer"
  >

  </a>
          </div>
          <div className="intro-text">
            <h1>HELLO I AM IFRAH SHAIKH , BUILDING APPLICATIONS  PIXEL BY PIXEL</h1>
            <p className="description">
              
               As a Full Stack Developer I'm committed to building powerful, user-centric applications,  passionate for both the UI and the backbone of an application.
            </p>
          </div>
        </div>

        <div className="hero-image-content">
          <img
            src={developerImage}
            alt="Ifrah Shaikh"
            className="main-image"
          />
        </div>
      </div>

      <div className="copyright">
        © 2025 My Portfolio. All rights reserved.
      </div>
    </section>
  );
};

export default Hero;

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
            <a href="https://github.com/Ifrah-code" target="_blank" rel="noopener noreferrer">
              {/* Replace this placeholder with your actual GitHub icon (e.g., <FaGithub /> if using react-icons, or <img src="/path/to/github.svg" alt="GitHub" />) */}
              {/* <img src="https://via.placeholder.com/32/ffffff/000000?text=GH" alt="GitHub icon" /> */}
            </a>
            <a href="https://www.linkedin.com/in/ifrahs?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              {/* Replace this placeholder with your actual LinkedIn icon (e.g., <FaLinkedinIn /> if using react-icons, or <img src="/path/to/linkedin.svg" alt="LinkedIn" />) */}
              {/* <img src="https://via.placeholder.com/32/ffffff/000000?text=LI" alt="LinkedIn icon" /> */}
            </a>
          </div>
          <div className="intro-text">
            <h1>HELLO, I'M IFRAH SHAIKH</h1>
            <p className="description">
               A Dedicated Full Stack Developer committed to building powerful, user-centric applications,  responsible for both the UI and the backbone of an application.
            </p>
          </div>
        </div>

        <div className="hero-image-content">
          <img
            src={developerImage}
            alt="Saif Sayyed"
            className="main-image"
          />
        </div>
      </div>

      <div className="copyright">
        © 2024 My Portfolio. All rights reserved.
      </div>
    </section>
  );
};

export default Hero;
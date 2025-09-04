import React from "react";

const About = () => {
  return (
    <div className="about-container">
      {/* Left Side - About Content */}
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I am a passionate Full Stack Developer with a strong foundation in Java, Spring Boot, React, and MySQL. 
I enjoy building dynamic, user-friendly, and scalable applications that solve real-world problems. 
During my projects, I have worked extensively on backend services, database management, and frontend design, 
with additional experience integrating external APIs and implementing client-side validations. 
My goal is to continuously learn and enhance my skills while contributing to impactful software solutions 
that blend efficiency with great user experience.

        </p>
      </div>

      {/* Right Side - Skills */}
      <div className="skills-content">
        <h2>My Skills</h2>
        <ul>
          <li>Java</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>React.JS</li>
          <li>React Router</li>
          <li>MySQL</li>
          <li>REST API Development</li>
          <li>SpringBoot</li>
          <li>Github</li>
          <li>Hibernate</li>
          <li>Postman</li>
        </ul>
      </div>
    </div>
  );
};

export default About;

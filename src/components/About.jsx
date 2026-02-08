import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJquery,
  SiBootstrap,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiEclipseide,
  SiGithub,
  SiGit,
  SiDocker,
  SiMongodb,
  SiNodedotjs,
  SiAmazonwebservices

} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <br></br>
        <h1>WHO AM I ?</h1>
        <p>
          Full Stack Developer who enjoys building things that actually get
          used. I specialize in creating responsive frontends backed by
          reliable, well-architected backend systems. With a strong focus on
          clean code, scalability, and real-world problem solving, I collaborate
          closely with teams and continuously evolve my skill set to create
          impact.{" "}
        </p>
      </div>

      <div className="skills-content">
        <h2>MY SKILLS</h2>
        <div className="skills-grid">

          <p>
            <SiHtml5 size={24} /> HTML5
          </p>
          <p>
            <SiCss3 size={24} /> CSS3
          </p>
          <p>
            <SiReact size={24} /> React.js / JavaScript
          </p>
          <p>
            <SiJquery size={24} /> jQuery
          </p>
          <p>
            <SiBootstrap size={24} /> Bootstrap
          </p>
          <p>
            <DiJava size={26} /> Java
          </p>
          <p>Advanced Java</p>
          <p>
            <SiSpringboot size={24} /> Spring Boot
          </p>
          <p>
            <SiSpringsecurity size={24} /> Spring Security
          </p>
          <p>
            <SiHibernate size={24} /> Hibernate / JPA
          </p>
          <p>
            <SiMysql size={24} /> MySQL
          </p>
          <p>
            <SiPostman size={24} /> Postman
          </p>
          <p>
            <SiAmazonwebservices size={24}/> AWS
          </p>
        
          

          <p>
            <SiGithub size={24} /> GitHub
          </p>
          <p>
            <SiGit size={24} /> Git
          </p>
          <p>
            <VscVscode size={24} /> VS Code
          </p>
          <p>
            <SiEclipseide size={24} /> Eclipse
          </p>

          <p>
            <SiDocker size={24} /> Docker
          </p>
          <p>REST APIs</p>
<p>Jira</p>
          <p>Microservices</p>
          <p>Gen AI</p>
          <p>
            <SiMongodb size={24} /> MongoDB
          </p>
          <p>
            <SiNodedotjs size={24} /> Node.js
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

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
  SiNetlify,
  SiRender,
  SiEclipseide,
  SiGithub,
  SiGit,
  SiJavascript 
} from "react-icons/si";
import { DiJava } from "react-icons/di";       
import { VscVscode } from "react-icons/vsc";   

const About = () => {
  return (
    <div className="about-container">  
      <div className="about-content"><br></br>
        <h1>WHO AM I ?</h1>
        <p>
         As a Full Stack Developer, I'm passionate about designing and implementing robust web applications using my knowledge of backend technologies and modern frontend frameworks. My focus is on creating efficient, maintainable, and responsive solutions that solve real-world problems. I thrive in collaborative environments and continuously seek opportunities to expand my skills and contribute to impactful projects.
        </p>
      </div>

      <div className="skills-content">
        <h2>MY SKILLS</h2>
        <div className="skills-grid">
          <p><SiHtml5 size={24}/> HTML5</p>
          <p><SiCss3 size={24}/> CSS3</p>
          <p><SiJavascript size={24}/> JavaScript</p> {/* New skill added */}
          <p><SiReact size={24}/> React.js</p>
          <p><SiJquery size={24}/> jQuery</p>
          <p><SiBootstrap size={24}/> Bootstrap</p>
          <p><DiJava size={26}/> Java</p>
          <p> <DiJava size={26}/>Advanced Java</p>
          <p><SiSpringboot size={24}/> Spring Boot</p>
          <p><SiSpringsecurity size={24}/> Spring Security</p>
          <p><SiHibernate size={24}/> Hibernate / JPA</p>
          <p><SiMysql size={24}/> MySQL</p>
          <p><SiPostman size={24}/> Postman</p>
          <p><SiNetlify size={24}/> Netlify</p>
          <p><SiRender size={24}/> Render</p>
          <p><VscVscode size={24}/> VS Code</p>
          <p><SiEclipseide size={24}/> Eclipse</p>
          <p><SiGithub size={24}/> GitHub</p>
          <p><SiGit size={24}/> Git</p>
        </div>
      </div>
    </div>
  );
};

export default About;

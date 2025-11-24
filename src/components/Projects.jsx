import React from "react";



const projects = [
{
    title: "Expense Tracker (React + SpringBoot)",
    description:
      `"Expense Tracker is a full-stack web application designed to help users efficiently manage their income and expenses, featuring seamless real-time balance updates. `,
    stack: [
      "React.js - Developed dynamic, responsive user interfaces and real-time financial charts using React.js.",
      "Spring Boot -  Engineered robust RESTful APIs and secure backend logic with Spring Boot to manage core business operations.",
      "MySQL - Implemented reliable data storage and transaction management in MySQL for persistent, consistent records.",
      "Axios -  Integrated Axios for efficient, real-time communication between frontend and backend, powering live updates and seamless user experience."
    ],
    github: "https://github.com/Ifrah-code/MoneyTracker.git",
    image: "/expense.png"
  },

  

  {
    title: "School Management System",
    description:
      `"School Management System" efficiently handles student and admin operations.`,
    stack: [
      "Designed dynamic user interfaces and implemented DOM-level validation using Thymeleaf integrated with JavaScript.",
      "Spring Boot -  Developed secure REST APIs and MVC architecture in Spring Boot to manage student and admin functionalities.",
      "MySQL - Managed persistent storage and retrieval of student and administrative data through MySQL.",
      "Geolocation API -  Utilized the Geolocation API to automatically fetch and submit the user’s city and country for enhanced data relevance.",
      "Spring Security - Implemented admin authentication and login protection using Spring Security, ensuring robust access control for administrative operations.."
    ],
    github: "https://github.com/Ifrah-code/School-Management-System.git",
  
   image : "/Registered_Students_Details.png"
   
  },
 
  {
    title: "SimpleMinds Quiz App (Java Swing + MySQL)",
    description: `""SimpleMinds" is an interactive Java-based quiz application designed to provide a smooth user experience with engaging, multiple-choice quizzes.`,
    stack: [
      "Core Java -  Implements robust backend logic for quiz flow, scoring, and user authentication.",
      "Swing -    Modern, responsive GUI with gradient backgrounds and intuitive layouts.",
      "MySQL & JDBC -     User registration & login, dynamic question loading, score tracking, and quiz rules guidance.",
      "Design Focus -   Clean, visually appealing interface with seamless navigation and real-time validation."
    ],
    github: "https://github.com/Ifrah-code/QuizzeyBee.git",
    image: "/MCQ's.png"

  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>MY PROJECTS</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-item">
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="project-details">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <ul>
                {proj.stack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                GitHub Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

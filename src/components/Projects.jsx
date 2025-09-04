import React from "react";


const projects = [
  {
    title: "SimpleMinds Quiz App Using Java",
    description: `"SimpleMinds" is a dynamic Java quiz app featuring user-friendly interface and diverse Java-related quizzes.`,
    stack: [
      "Core Java: Core logic for stable quiz foundation.",
      "Swing: Graphical user interface.",
      "MySQL: Stores user data & questions.",
      "JDBC: Handles data retrieval/updates."
    ],
    github: "https://github.com/yourusername/quizapp",
    image: "/MCQ's.png"

  },
  {
    title: "Expense Tracker (React + SpringBoot)",
    description:
      `"Expense Tracker" enables users to manage income/expenses with real-time balance updates.`,
    stack: [
      "React.js: Dynamic UI, charts, responsive.",
      "Spring Boot: API endpoints & logic.",
      "MySQL: Persistent transaction data.",
      "Axios: Frontend-backend communication."
    ],
    github: "https://github.com/yourusername/expensetracker",
    image: "/expense.png"
  },
  {
    title: "School Management System",
    description:
      `"School Management System" efficiently handles student and admin operations.`,
    stack: [
      "Thymeleaf + JS (DOM validation).",
      "Spring Boot: REST APIs, MVC architecture.",
      "MySQL: Persistent student/admin data.",
      "Geolocation API: Fetches city/country."
    ],
    github: "https://github.com/yourusername/schoolmgmt",
    image: "/school.png"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>PROJECTS</h2>
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

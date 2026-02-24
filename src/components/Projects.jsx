
import React, { useState } from "react";

const projects = [
  {
    title: "AI Expense Tracker",
    description:
      `"Full-stack personal finance web application with AI-driven insights for managing income, expenses, and providing personalized financial recommendations..
.`,
    stack: [
      "Designed the application using MVC architecture , ReactJS frontend Spring Boot REST controller  and MySQL with JPA/Hibernate data layer  for separation of concern.",
      "Integrated AI using OpenAI Chat Completions API (GPT-3.5) to analyze user transactions and generate personalized financial advice based on  spending patterns.",
      "Built and tested RESTFUL APIs using SpringBoot and SpringDataJPA , validated all endpoints via postman following SDLC phases.",
      "Integrated Axios for efficient, real-time communication between frontend and backend, powering live updates and seamless user experience.",
      "Optimized React components with memoization and lazy loading, reducing re-renders by 40% and ensuring smooth UI transitions"
    ],
    github: "https://github.com/Ifrah-code/MoneyTracker.git",
    images: ["/Expense tracker1.png", "/Expense tracker2.png", "/Expense Tracker 3.png" ,"Expense tracker 4.png"]
  },
  {
    title: "EduCore",
    description:
      `"EduCore" efficiently handles student and admin operations, with line location tracked.`,
    stack: [
      "Designed dynamic user interfaces and implemented DOM-level validation using Thymeleaf integrated with JavaScript.",
      "Spring Boot - Developed secure REST APIs and MVC architecture in Spring Boot to manage student and admin functionalities.",
      "MySQL - Managed persistent storage and retrieval of student and administrative data through MySQL.",
      "Geolocation API - Utilized the Geolocation API to automatically fetch and submit the user's city and country for enhanced data relevance.",
      "Spring Security - Implemented admin authentication and login protection using Spring Security, ensuring robust access control for administrative operations."
    ],
    github: "https://github.com/Ifrah-code/School-Management-System.git",
    images: ["/1.png", "/2.png","/3.png","/4.png","/5.png","/6.png"] 
  },
  {
    title: "SimpleMinds Quiz App",
    description: `"SimpleMinds" is an interactive Java-based quiz application designed to provide a smooth user experience with engaging, multiple-choice quizzes.`,
    stack: [
      "Core Java - Implements robust backend logic for quiz flow, scoring, and user authentication.",
      "Swing - Modern, responsive GUI with gradient backgrounds and intuitive layouts.",
      "MySQL & JDBC - User registration & login, dynamic question loading, score tracking, and quiz rules guidance.",
      "Design Focus - Clean, visually appealing interface with seamless navigation and real-time validation."
    ],
    github: "https://github.com/Ifrah-code/QuizzeyBee.git",
    images: ["/sm1.png", "/sm2.png","/sm3.png","/sm4.png","/sm5.png"] 
  }
];

const Projects = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    projects.map(() => 0)
  );

  const handlePrevImage = (projectIndex) => {
    setCurrentImageIndexes(prev => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[projectIndex];
      const totalImages = projects[projectIndex].images.length;
      newIndexes[projectIndex] = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
      return newIndexes;
    });
  };

  const handleNextImage = (projectIndex) => {
    setCurrentImageIndexes(prev => {
      const newIndexes = [...prev];
      const currentIndex = newIndexes[projectIndex];
      const totalImages = projects[projectIndex].images.length;
      newIndexes[projectIndex] = (currentIndex + 1) % totalImages;
      return newIndexes;
    });
  };

  return (
    <section className="projects-section">
      <h2 style={{ fontSize: 25, fontWeight: 700 }}>MY PROJECTS</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-item">
            <div className="project-image" style={{ position: 'relative' }}>
              <img 
                src={proj.images[currentImageIndexes[index]]} 
                alt={proj.title}
                style={{ objectFit: 'contain' }} 
              />
              
              
              {proj.images.length > 1 && (
                <>
                 
                  <button
                    onClick={() => handlePrevImage(index)}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#fff',
                      fontSize: '24px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(5px)',
                      zIndex: 10
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(65, 105, 225, 0.7)';
                      e.target.style.transform = 'translateY(-50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 0, 0, 0.5)';
                      e.target.style.transform = 'translateY(-50%) scale(1)';
                    }}
                  >
                    ‹
                  </button>

                 
                  <button
                    onClick={() => handleNextImage(index)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#fff',
                      fontSize: '24px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(5px)',
                      zIndex: 10
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(65, 105, 225, 0.7)';
                      e.target.style.transform = 'translateY(-50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 0, 0, 0.5)';
                      e.target.style.transform = 'translateY(-50%) scale(1)';
                    }}
                  >
                    ›
                  </button>

                 
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    {currentImageIndexes[index] + 1} / {proj.images.length}
                  </div>
                </>
              )}
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

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div
      style={{
        position: "fixed",
        top: "40%",
        left: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        zIndex: 10,
      }}
    >
      <a href="https://github.com/Ifrah-code" target="_blank" rel="noreferrer">
        <FaGithub size={30} color="white" />
      </a>
     
      <a href="https://linkedin.com/in/ifrahs" target="_blank" rel="noreferrer">
        <FaLinkedin size={30} color="white" />
      </a>
    </div>
  );
}

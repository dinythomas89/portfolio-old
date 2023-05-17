import React from "react";
import "./Projects.css";
import { myProjects } from "./myProjects";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <div className="my-projects-container">
        {myProjects.map((project, index) => (
          <div key={index} className="my-project">
            <img src={project.image} alt="" />
            <div>
              <h3>{project.name}</h3>
              <p>{project.language}</p>
              <p className="project-desc">{project.description}</p>
              <p>
                <a href={project.website} target="_blank" rel="noreferrer">
                  {project.id === 5 ? "Figma" : "Github"}
                </a>
                <a
                  className="live-link"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-button">
        <a
          href="https://github.com/dinythomas89?tab=repositories"
          target="_blank" rel="noreferrer"
        >
          View more
        </a>
      </div>
    </div>
  );
}

export default Projects;

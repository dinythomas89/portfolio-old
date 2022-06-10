import React from "react";
import "./Skills.css";
import { mySkills } from "./mySkills";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="my-skills">
        {mySkills.map((skill, index) => (
          <div key={index}>
            <img src={skill.logo} alt="" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

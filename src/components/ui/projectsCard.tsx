import React from "react";
import TechUsed from "./techUsed";
import { projectsData } from "../../data/projectsData";

const projectsCard = () => {
  return projectsData.map((project) => (
    <a href={project.externalLink} key={project.title} target="_blank" className="block h-full">
      <div
        className="flex flex-col h-full rounded-2xl dark:bg-[rgba(27,3,49,0.9)] shadow-[0_6px_15px_2px_var(--color-highlightColor)] overflow-hidden transform-[perspective(1000px)_rotateX(0deg)_rotateY(0deg)_scale3d(1,1,1)]
      transition-transform duration-300 ease-out
      hover:transform-[perspective(1200px)_rotateX(10deg)_rotateY(15deg)_scale3d(1.05,1.05,1.05)]"
      >
        <div className="h-1/2 w-full">
          <img
            className="w-full h-full object-cover border-b-3 border-highlightColor"
            src={project.imageLink}
          />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <h1 className="mb-1 text-variableText font-bold text-highlightColor">
            {project.title}
          </h1>
          <p className="text-variableText">{project.description}</p>
          <div className="flex flex-wrap mt-4 gap-2">
            <TechUsed languages={project.languages} />
          </div>
        </div>
      </div>
    </a>
  ));
};

export default projectsCard;

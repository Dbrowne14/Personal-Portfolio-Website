import React from "react";
import TechUsed from "./techUsed";
import { projectsData } from "../../data/projectsData";

const projectsCard = () => {
  return projectsData.map((project) => (
    <div className="flex flex-col rounded-2xl dark:bg-[rgba(27,3,49,0.9)] shadow-[0_6px_15px_2px_var(--color-highlightColor)] overflow-hidden">

      <div className="h-1/2 w-full">
        <img className="w-full h-full object-cover" src={project.imageLink} />
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
  ));
};

export default projectsCard;

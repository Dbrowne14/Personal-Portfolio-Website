import React from "react";
import TechUsed from "./techUsed";
import { projectsData } from "../../data/projectsData";

const projectsCard = () => {
  return projectsData.map((project) => (
    <div className="h-110 sm:h-130 rounded-2xl bg-iconBg shadow-[0_6px_15px_2px_var(--color-highlightColor)] block overflow-hidden mt-1">
      <div className="h-[50%] w-full bg-black rounded-t-2xl border-b-highlightColor border-b">
        <img className="object-cover object-[50%_20%]" src={project.imageLink} />
      </div>
      <div className="h-[50%] w-full p-4">
        <h1 className="mb-1 text-variableText font-bold text-highlightColor">
          {project.title}
        </h1>
        <p className="text-variableText">{project.description}</p>
        <div className="flex flex-wrap mt-4 gap-2">
          <TechUsed />
          <TechUsed />
          <TechUsed />
          <TechUsed />
          <TechUsed />
        </div>
      </div>
    </div>
  ));
};

export default projectsCard;

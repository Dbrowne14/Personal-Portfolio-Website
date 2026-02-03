import React from 'react'
import TechUsed from './techUsed'

const projectsCard = () => {
  return (
    <div className="h-110 sm:h-120 rounded-2xl bg-iconBg shadow-[0_6px_15px_2px_var(--color-highlightColor)] block overflow-hidden mt-1">
      <div className="h-[50%] w-full bg-black rounded-t-2xl border-b-highlightColor border-b"></div>
      <div className="h-[50%] w-full p-4">
        <h1 className="border text-variableText font-bold text-highlightColor">Dummy Title text</h1>
        <p className="text-variableText">Text used to describe the project.
            Text used to describe the project
            Text used to describe the project
        </p>
        <div className="flex flex-wrap mt-2 gap-2">
            <TechUsed />
            <TechUsed />
            <TechUsed />
            <TechUsed />
            <TechUsed />

        </div>
      </div>
    </div>
  )
}

export default projectsCard

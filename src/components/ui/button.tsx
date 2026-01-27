import React from "react";

type NamedComponent = {
  name: string;
};

const button = ({ name }: NamedComponent) => {
  return (
    <div className="special-border w-[30%] h-10 rounded-full flex items-center ">
      <button className=" dark:bg-[rgba(27,3,49,0.9)] w-full h-full rounded-full text-amberHome hover:pb-1 dark:text-iconText text-[clamp(0.8rem,1.5vw,1.1rem)]">{name}</button>
    </div>
  );
};

export default button;

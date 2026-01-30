import React from "react";

type NamedComponent = {
  name: string;
  link: string;
};

const button = ({ name, link }: NamedComponent) => {
  return (
    <div className="special-border drop-shadow-xl/20  w-[30%] h-10 rounded-full flex items-center ">
      <a
        className=" dark:bg-[rgba(27,3,49,0.9)] w-full h-full rounded-full flex items-center justify-center text-amberHome hover:pb-1 dark:text-iconText text-[clamp(0.8rem,1.5vw,1.1rem)]"
        target="_blank"
        href={link}
      >
        {name}
      </a>
    </div>
  );
};

export default button;

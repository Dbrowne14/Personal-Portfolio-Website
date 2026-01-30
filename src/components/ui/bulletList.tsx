import React from "react";

type Bullet = {
  content: string;
};

const bulletList = ({ content }: Bullet) => {
  return (
    <li className="flex justify-start items-center flex-row gap-4 h-10 md:h-18 w-full text-[clamp(0.7rem,2.5vw,1.1rem)]">
      <div className=" rounded-full bg-white md:h-10 md:w-10 border h-5 w-5 border-highlightColor">
      </div>
      <p className="dark:text-white px-2 lg:px-8 drop-shadow-xl/20 h-full w-full flex justify-start items-center bg-[rgba(228,217,217,0.54)] dark:bg-[rgba(27,3,49,0.9)] rounded-2xl">{content}</p>
    </li>
  );
};

export default bulletList;

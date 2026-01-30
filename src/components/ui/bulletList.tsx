import React from "react";

type Bullet = {
  content: string;
};

const bulletList = ({ content }: Bullet) => {
  return (
    <li className="flex justify-start items-center flex-row gap-4 md:gap-8 h-full w-full text-[clamp(0.7rem,2.5vw,1.3rem)]">
      <div className=" rounded-full bg-highlightRed h-2 w-2">
      </div>
      <p>{content}</p>
    </li>
  );
};

export default bulletList;

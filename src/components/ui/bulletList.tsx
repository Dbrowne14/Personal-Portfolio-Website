import React from "react";

type Bullet = {
  content: string;
  logo: string;
};

const bulletList = ({ content, logo }: Bullet) => {
  return (
    <li className="flex justify-start items-center flex-row gap-4 md:gap-8 h-14 w-60 md:w-full text-[clamp(0.7rem,2.5vw,1.3rem)]">
      <div className=" flex items-start ">
        {logo}
      </div>
      <p className="">{content}</p>
    </li>
  );
};

export default bulletList;

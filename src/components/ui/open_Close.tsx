import React from "react";
import { useScrollStatus } from "../../hooks/useScrollStatus";

type Toggle = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const open_Close = ({ toggle, setToggle }: Toggle) => {
  const scrollThreshold = useScrollStatus(30);
  return (
    <div
      className={`flex absolute ${scrollThreshold ? "bg-white" : "dark:bg-[rgba(255,255,255,0.2)] bg-lightBg"}  rounded-full justify-center place-items-center flex-col w-7 h-7 gap-[0.1rem] cursor-pointer`}
      onClick={() => setToggle((prev) => !prev)}
    >
      <span
        className={`w-5 h-[0.2rem] relative bg-highlightColor ${toggle ? "transform -rotate-45 top-[18%]" : "block"} rounded-2xl transition ease-in-out`}
      ></span>
      <span
        className={`w-5 h-[0.2rem] relative bg-highlightColor ${toggle ? "opacity-0" : "block"} rounded-2xl transition ease-in-out`}
      ></span>
      <span
        className={`w-5 h-[0.2rem] relative bg-highlightColor ${toggle ? "transform rotate-45 -top-[18%]" : "block"} rounded-2xl transition ease-in-out`}
      ></span>
    </div>
  );
};

export default open_Close;

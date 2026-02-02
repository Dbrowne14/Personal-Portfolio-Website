import type { LinkProp } from "../../types/components";

type Bullet = LinkProp & {
  content: string;
};

const bulletList = ({ content, link }: Bullet) => {
  return (
    <li className="flex justify-start items-center flex-row gap-4 h-10 md:h-18 w-full text-[clamp(0.7rem,2.5vw,1.1rem)] ">
      <div className=" rounded-full md:h-10 md:w-10 dark:border sm:h-8 sm:w-8 h-6 w-6 border-foreground flex justify-center items-center hover:pb-2">
        {" "}
        {link}
      </div>
      <p className=" px-2 lg:px-8 drop-shadow-xl/20 h-full w-full flex justify-start items-center bg-lightBg sm:bg-transparent dark:bg-[rgba(27,3,49,0.9)] rounded-2xl">
        {content}
      </p>
    </li>
  );
};

export default bulletList;

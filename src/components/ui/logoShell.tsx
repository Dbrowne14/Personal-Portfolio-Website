import type { NameWithLink } from "../../types/propTypes";

const logoShell = ({ name, link }: NameWithLink) => {
    console.log("Parent Rendered")
  return (
    <div className="flex flex-col drop-shadow-xl/20 logo-card p-1 dark:bg-iconBg dark:text-iconText  hover:border-4 dark:hover:border-iconBg hover:border-standardBg">
      <div className="h-[75%] flex justify-center items-center">
        <img src={link} className="justify-self-center h-[85%] w-[90%]" />
      </div>
    </div>
  );
};

export default logoShell;

import { logos } from "../../data/logoData";

/*{ name: "React", link: reactLogo },
  { name: "CSS", link: cssLogo },
  { name: "JavaScript", link: JavaScriptLogo },
  { name: "TypeScript", link: typeScriptLogo },
  { name: "NodeJS", link: nodeLogo },
  { name: "ExpressJS", link: expressLogo },
  { name: "Redux", link: reduxLogo },
  { name: "Tailwind", link: tailwindLogo },
  { name: "Git", link: gitLogo },
  { name: "HTML", link: htmlLogo },
];*/

const techUsed = () => {
  return (
    <div className="flex gap-2 rounded-2xl bg-[rgba(53,42,42,0.74)] px-2 py-1 justify-center items-center">
      <div className="h-4 w-4 flex justify-center items-center">
        {" "}
        <img className="justify-self-center" src={logos[0].link} />
      </div>
      <p className="text-variableText">CSS</p>
    </div>
  );
};

export default techUsed;

//techused takes in an array [css,]
/* names.forEach( name => {
logos.forEach( if(name === logos.name) {
return (
    <div className="flex gap-2 rounded-2xl bg-[rgba(53,42,42,0.74)] px-2 py-1 justify-center items-center">
      <div className="h-4 w-4 bg-black"></div>
      <p className="text-variableText">{logos.name}</p>
    </div>
  );}*/

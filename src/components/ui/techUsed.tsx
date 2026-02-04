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

type techUsedProps = {
  languages: string[];
};

const techUsed = ({ languages }: techUsedProps) => {
  return (
    <>
      {languages.map((language) => {
        const logo = logos.find((l) => l.name === language);
        if (!logo) return null;

        return (
          <div
            key={logo.name}
            className="flex gap-2 rounded-2xl bg-[rgba(53,42,42,0.74)] px-2 py-1 justify-center items-center"
          >
            <div className="h-4 w-4 flex justify-center items-center">
              <img src={logo.link} alt={logo.name} />
            </div>
            <p className="text-variableText">{logo.name}</p>
          </div>
        );
      })}
    </>
  );
};
export default techUsed;

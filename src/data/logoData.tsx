import reactLogo from "../assets/logos/react.svg";
import cssLogo from "../assets/logos/css-3-svgrepo-com.svg";
import JavaScriptLogo from "../assets/logos/128px-Unofficial_JavaScript_logo_2.svg.png";
import typeScriptLogo from "../assets/logos/128px-Typescript_logo_2020.svg.png";
import nodeLogo from "../assets/logos/nodejs-icon-svgrepo-com.svg";
import expressLogo from "../assets/logos/expressLogo.png";
import reduxLogo from "../assets/logos/redux-logo-svgrepo-com.svg";
import tailwindLogo from "../assets/logos/128px-Tailwind_CSS_Logo.svg.png";
import gitLogo from "../assets/logos/git-icon-logo-svgrepo-com.svg";
import htmlLogo from "../assets/logos/128px-HTML5_logo_and_wordmark.svg.png";
import postGresLogo from "../assets/logos/postgresql-logo-svgrepo-com.svg";
import reactRouter from "../assets/logos/reactRouter.svg";
import nextJslogo from "../assets/logos/next_js.svg";
import type { LinkProp } from "../types/propTypes";
import type { AllowedLanguages } from "@/types/dataTypes";

export type LogoList = LinkProp & {
  name: AllowedLanguages;
};

export const logos: LogoList[] = [
  { name: "React", link: reactLogo },
  { name: "NextJS", link: nextJslogo },
  { name: "JavaScript", link: JavaScriptLogo },
  { name: "TypeScript", link: typeScriptLogo },
  { name: "NodeJS", link: nodeLogo },
  { name: "ExpressJS", link: expressLogo },
  { name: "PostgreSQL", link: postGresLogo },
  { name: "Redux", link: reduxLogo },
  { name: "React-Router", link: reactRouter },
  { name: "Tailwind", link: tailwindLogo },
  { name: "Git", link: gitLogo },
  { name: "CSS", link: cssLogo },
  { name: "HTML", link: htmlLogo },
];

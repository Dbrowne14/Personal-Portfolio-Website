import davidWebsite from "../assets/Image 03-02-2026 at 17.35.jpg";
import spotifyApp from "../assets//portfolio_images/spotifyapp.jpeg";
import { AllowedLanguages } from "@/types/dataTypes";
import redditAPI from "../assets/portfolio_images/Reddit_Api.jpeg";
import peImage from "../assets/portfolio_images/PE_website_blurred.png"
import staple from "../assets/portfolio_images/Staple.png"

type ProjectsData = {
  title: string;
  imageLink: string;
  description: string;
  languages: AllowedLanguages[];
  externalLink: string;
};
//add a link for clicking

export const projectsData: ProjectsData[] = [
    {
    title: "Staple ",
    imageLink: staple,
    description:
      "MTG Wordle-style PERN stack game, featuring daily challenges powered by PostgreSQL and cron automation",
    languages: ["React","NodeJS", "TypeScript", "JavaScript", "PostgreSQL", "ExpressJS", "Tailwind"],
    externalLink: "https://stapleedh.netlify.app/",
  },
  {
    title: "Ten Songs",
    imageLink: spotifyApp,
    description:
      "Interactive music game leveraging Spotify’s OAuth 2.0 authentication",
    languages: ["React", "TypeScript", "JavaScript", "Tailwind"],
    externalLink: "https://davejams.netlify.app/",
  },
  {
    title: "RedCanvas",
    imageLink: redditAPI,
    description:
      "Full-stack web app delivering curated Reddit content via a custom backend layer",
    languages: [
      "React",
      "Redux",
      "TypeScript",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "Tailwind",
    ],
    externalLink: "https://redcanvas.netlify.app/",
  },
      {title: "Big Boss Machine",
    imageLink: davidWebsite,
    description: "A machine for big bosses ",
    languages: ["ExpressJS", "NodeJS"],
    externalLink:
      "https://github.com/Dbrowne14/Boss-Machine-Codecademy-Project",
  },
  {
    title: "Website for Private Equity firm",
    imageLink: peImage,
    description: "Consulted on website design for a new European PE firm",
    languages: ["CSS", "HTML"],
    externalLink: "",
  },
];

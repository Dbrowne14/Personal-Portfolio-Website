import davidWebsite from "../assets/Image 03-02-2026 at 17.35.jpg";
import spotifyApp from "../assets//portfolio_images/spotifyapp.jpg"
import { AllowedLanguages } from "@/types/dataTypes";
import redditAPI from "../assets/portfolio_images/Reddit_Api.jpeg"

type ProjectsData = {
  title: string;
  imageLink: string;
  description: string;
  languages: AllowedLanguages[];
};

export const projectsData: ProjectsData[] = [
  {
    title: "Reddit API Project",
    imageLink: redditAPI,
    description:
      "Full-stack web app delivering curated Reddit content via a custom backend laye",
    languages: [
      "React",
      "Redux",
      "TypeScript",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "Tailwind",
    ],
  },
  {
    title: "Spotify Playlist Game",
    imageLink: spotifyApp,
    description:
      "Interactive music game leveraging Spotify’s OAuth 2.0 authentication",
    languages: ["React", "TypeScript", "JavaScript", "Tailwind"],
  },
  {
    title: "Custom Game Tracker for MTG",
    imageLink: davidWebsite,
    description:
      "A tracker for the popular trading card game Magic the Gathering for it's Chaos Draft format",
    languages: ["React", "TypeScript", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Calendar Scheduler",
    imageLink: davidWebsite,
    description: "A calendar scheduler for memos and required inputs",
    languages: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Big Boss Machine",
    imageLink: davidWebsite,
    description: "A machine for big bosses ",
    languages: ["ExpressJS", "NodeJS"],
  },
];

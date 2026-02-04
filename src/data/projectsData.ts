import davidWebsite from "../assets/Image 03-02-2026 at 17.35.jpg";
import { AllowedLanguages } from "@/types/dataTypes";

type ProjectsData = {
  title: string;
  imageLink: string;
  description: string;
  languages: AllowedLanguages[];
};

export const projectsData: ProjectsData[] = [
  {
    title: "Reddit API Project",
    imageLink: davidWebsite,
    description:
      "A web application that provides a gallery with custom subReddits",
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
    imageLink: davidWebsite,
    description:
      "A web app that challengers the user to make a perfect playlist on the basis of preset conditions",
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

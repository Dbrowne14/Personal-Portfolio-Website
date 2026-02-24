import ProjectsCard from "../../components/ui/projectsCard";

const Projects = () => {
  return (
    <section className="flex flex-col content-width gap-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] auto-rows-fr gap-8 p-2">
        <ProjectsCard />
      </div>
    </section>
  );
};

export default Projects;

// use this portfolio website as inspiration https://sumanthsamala.com/projects

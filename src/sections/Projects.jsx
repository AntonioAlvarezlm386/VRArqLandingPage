import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#DEE4EB] pb-14 pt-36" >
      <h2 className="text-center text-h2 font-playfair mb-5">Proyectos</h2>
      <div className="max-container px-5 grid grid-cols-1 gap-3 h-[900px]
                      sm:grid-cols-2 sm:h-[650px]
                      lg:grid-cols-3 lg:gap-8 lg:px-16 lg:h-[450px]">
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
        <ProjectsCard/>
      </div>
    </div>
  );
};

export default Projects;

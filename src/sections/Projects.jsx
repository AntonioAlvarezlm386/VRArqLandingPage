import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#DEE4EB] pb-14 pt-64" >
      <div className="max-container px-5 grid grid-cols-1 gap-2 h-[900px]
                      sm:grid-cols-2 sm:h-[650px]
                      lg:grid-cols-3 lg:gap-5 lg:px-16 lg:h-[450px]">
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

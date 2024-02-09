import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#DEE4EB] pb-18 pt-24 sm:pt-36">
      <h2 className="text-center text-h2 font-playfair mb-4">Proyectos</h2>
      <div
        className="max-container px-5 grid grid-cols-1 gap-x-4 gap-y-6 justify-items-center pb-5
                      sm:grid-cols-2
                      2xl:grid-cols-4 2xl:p-16"
      >
        {projects.map((item, index) => (
          <ProjectsCard
            cardProps={item.mainData}
            modalProps={item.modalData}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

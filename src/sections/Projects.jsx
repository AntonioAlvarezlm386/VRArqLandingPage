import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#DEE4EB] pb-24 pt-36" >
      <h2 className="text-center text-h2 font-playfair mb-5">Proyectos</h2>
      <div className="max-container px-5 grid grid-cols-1 gap-4
                      sm:grid-cols-2 sm:gap-2
                      xl:grid-cols-4 xl:gap-4 xl:p-16">
        {
          projects.map( (item, index) => (
            <ProjectsCard cardProps={item.mainData} modalProps={item.modalData} key={index}/>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;

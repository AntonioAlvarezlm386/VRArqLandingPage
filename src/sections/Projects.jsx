import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#DEE4EB] pb-14 pt-36" >
      <h2 className="text-center text-h2 font-playfair mb-5">Proyectos</h2>
      <div className="max-container px-5 grid grid-cols-1 gap-3
                      sm:grid-cols-2 
                      xl:grid-cols-4 xl:gap-8 xl:p-16">
        {
          projects.map( item => (
            <ProjectsCard title={item.title} image={item.img} desc={item.description}/>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;

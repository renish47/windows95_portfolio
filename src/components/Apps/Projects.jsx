import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../../content/projects";

const Projects = ({ isMaximized }) => {
  return (
    <div className=" flex flex-col gap-5 p-4 w-full h-[100%] overflow-y-scroll">
      {projects.map((project, i) => {
        return (
          <div className=" flex gap-7 bg-[#eaeaeaaf] w-full p-4" key={i}>
            <div className=" flex flex-col w-1/2 items-center">
              <img
                src={project.imagePath}
                alt=""
                className={`${isMaximized ? "w-[80%]" : "w-full"}`}
              />
              <div className=" flex m-3 mx-auto gap-2 flex-wrap">
                {project.techStack.map((tech, i) => {
                  return <img src={tech} alt="badges" className="h-[23px]" />;
                })}
              </div>
            </div>
            <div className="w-[47%] flex flex-col gap-2 justify-center pe-5">
              <h2 className=" font-extrabold text-2xl">{project.name}</h2>
              <p className=" text-sm">{project.description}</p>
              <div className="mt-2 flex justify-end gap-5">
                <a href={project.githubLink} target="_blank">
                  <FiGithub
                    size="30px"
                    color="grey"
                    className="hover:cursor-pointer"
                  />
                </a>
                <a href={project.websiteLink} target="_blank">
                  <FiExternalLink
                    size="30px"
                    color="grey"
                    className="hover:cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

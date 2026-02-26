import React from "react";
import { projectsList } from "../../constants";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  const renderList = (title, items) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="text-sm text-gray-600 mb-3">
        <span className="font-medium block mb-1">{title}</span>
        <ul className="list-disc pl-5 space-y-1">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="px-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-shadow-lg">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-xl overflow-hidden
              hover:shadow-lg transition transform hover:scale-105 hover:-translate-y-1
              duration-300 ease-out cursor-pointer"
          >
            {/* Image */}
            {project.src && (
              <ProjectCarousel
                images={
                  Array.isArray(project.src) ? project.src : [project.src]
                }
              />
            )}

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-3">
                {project.title}
              </h2>

              {project.projectType && (
                <p className="text-sm text-gray-500 mb-3">
                  <span className="font-medium">Type:</span>{" "}
                  {project.projectType}
                </p>
              )}

              {renderList("Scope:", project.scope)}
              {renderList("System:", project.system)}
              {renderList(
                "Coordination Elements:",
                project.coordinationElements
              )}
              {renderList("Solution:", project.solution)}

              {project.issue && (
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Issue:</span>{" "}
                  {project.issue}
                </p>
              )}

              {project.focus && (
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Focus:</span>{" "}
                  {project.focus}
                </p>
              )}

              {renderList("Roles:", project.responsibility)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
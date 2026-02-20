import React from "react";
import { projectsList } from "../../constants";

const Projects = () => {
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
              <div className="w-full pt-8 flex items-center justify-center bg-gray-50">
                <img
                  src={project.src}
                  alt={project.title}
                  className="max-h-52 max-w-full object-contain"
                />
              </div>
            )}

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-3">{project.title}</h2>

              {project.projectType && (
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Type:</span>{" "}
                  {project.projectType}
                </p>
              )}

              {project.scope && (
                <div className="text-sm text-gray-600 mb-3 whitespace-pre-line">
                  <span className="font-medium">Scope:</span>
                  <p>{project.scope}</p>
                </div>
              )}

              {project.system && (
                <div className="text-sm text-gray-600 mb-3 whitespace-pre-line">
                  <span className="font-medium">System:</span>
                  <p>{project.system}</p>
                </div>
              )}

              {project.coordinationElements && (
                <div className="text-sm text-gray-600 mb-3 whitespace-pre-line">
                  <span className="font-medium">Coordination Elements:</span>
                  <p>{project.coordinationElements}</p>
                </div>
              )}

              {project.issue && (
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Issue:</span> {project.issue}
                </p>
              )}

              {project.solution && (
                <div className="text-sm text-gray-600 mb-3 whitespace-pre-line">
                  <span className="font-medium">Solution:</span>
                  <p>{project.solution}</p>
                </div>
              )}

              {project.focus && (
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Focus:</span> {project.focus}
                </p>
              )}

              {project.responsibility && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Role:</span>{" "}
                  {project.responsibility}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

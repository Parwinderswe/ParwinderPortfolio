import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";
import projects from "../../constants/projects";

const ProjectGrid = ({ category }) => {
  //  const [showPopup, setShowPopup] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
 

  const selectedProject =
    selectedIndex !== null ? projects[selectedIndex] : null; //to show next image on popup

  const handleNext = () => {
    if (selectedIndex < projects.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex >= 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const filteredProjects =
    category === "All Projects"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <div className="grid grid-cols-1 gap-8 bg-white dark:bg-black md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project, index) => (
        <div
          key={index}
          className="overflow-hidden transition-all border rounded-lg shadow-md bg-card border-border hover:shadow-lg"
        >
          <div className="relative h-48 overflow-hidden cursor-pointer group">
            <img
              src={project.Image}
              alt={project.alt}
              className="object-cover w-full h-full transition duration-500 brightness-95 group-hover:brightness-110 group-hover:scale-110"
            ></img>

            {/* Purple tint layer using a real div for compatibility */}
            <div className="absolute inset-0 z-10 transition-opacity duration-300 opacity-0 pointer-events-none bg-brand-teal-dark/30 group-hover:opacity-100" />

            {/* View Details Text */}
            <div className="absolute inset-0 z-20 flex items-center justify-center font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <span>View Details</span>
            </div>
          </div>
          <div className="p-6 text-left">
            <h3 className="mb-2 text-xl font-bold">{project.name}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-500">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs text-black bg-gray-200 rounded-full dark:text-white dark:bg-gray-700"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs text-black bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            <button
              className="inline-flex items-center justify-center w-full px-3 text-sm font-medium transition-colors bg-transparent border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:opacity-50 border-input hover:bg-brand-gold hover:text-white h-9"
              onClick={() => setSelectedIndex(index)}
            >
              View Project
            </button>
          </div>
        </div>
      ))}

      {/* view project click actions */}
      {selectedProject && (
        <ProjectPopup
          name={selectedProject.name}
          img={selectedProject.Image}
          alt={selectedProject.alt}
          projOverview={selectedProject.projectOverview}
          tech={selectedProject.technologies}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default ProjectGrid;

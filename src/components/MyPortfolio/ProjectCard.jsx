import React from 'react';
import ProjectSelection from './ProjectSelection';
import ProjectGrid from './ProjectGrid';

const ProjectCard = () => {
  return (
    <div id='portfolio' className="py-20 text-black transition-colors duration-500 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Portfolio</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-purple-500"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Explore some of my recent projects, showcasing a range of technical skills and problem-solving approaches.
          </p>
        </div>

        {/* multiple projects */}
        <ProjectSelection />
        {/* <ProjectGrid /> */}
      </div>
    </div>
  );
};

export default ProjectCard;

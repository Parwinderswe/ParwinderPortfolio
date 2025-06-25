import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";

const ProjectGrid = ({ category }) => {
  //  const [showPopup, setShowPopup] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const projectList = [
    {
      name: "Matter Management",
      category: "Backend",
      Image:
        "https://img.freepik.com/free-photo/software-developer-programming-coding_53876-111054.jpg?semt=ais_hybrid&w=740",
      alt: "Feature Upgrade & Deployment",
      description:
        "Managed legal and operational matters with tailored workflows..",
      projectOverview:
        "Managed and created legal matters tailored to specific business units (PABUs). Linked responsible individuals to these matters and integrated a structured approval workflow, enforcing authority rules for actions and decisions.",
      technologies: ["React", "JavaScript", "java", "next.js"],
    },
    {
      name: "Organization Resource and Workflow System",
      category: "Full Stack",
      Image:
        "https://img.freepik.com/free-photo/team-business-people-collaborating-project_53876-95800.jpg?semt=ais_hybrid&w=740",
      alt: "Organization Resource and Workflow System",
      description:
        "Streamlined organizational resource management and workflow integration.",
      projectOverview:
        "Built comprehensive organizational profiles integrated with matters, managing roles, responsibilities, budgets, accruals, and timekeepers within defined workflows to enhance operational efficiency.",
      technologies: ["React", "JavaScript", "java", "next.js", "TypeScript"],
    },
    {
      name: "PABUs+Role based Security",
      category: "Frontend",
      Image:
        "https://img.freepik.com/free-photo/web-development-concept-with-laptop_23-2148162928.jpg?semt=ais_hybrid&w=740",
      alt: "Application Enhancement",
      description:
        "Developed comprehensive security protocols with user roles and permissions.",
      projectOverview:
        "Configured detailed security mechanisms for users, roles, and permissions tied to PABUs. Automated user associations to workflows based on permissions, enhancing secure access control across matters and organizational data for invoices",
      technologies: ["React", "JavaScript", "java", "next.js"],
    },
    {
      name: "Invoice Approval and Workflow Automation",
      category: "Backend",
      Image:
        "https://img.freepik.com/free-photo/hands-typing-computer-keyboard_53876-102786.jpg?semt=ais_hybrid&w=740",
      alt: "Core Module Development",
      description:
        "Designed an automated invoice approval system integrating rule-based workflows.",
      projectOverview:
        "Developed and implemented an automated invoice management system that linked invoices to specific matters and organizations. Defined customizable workflow rules ensuring systematic approval processes, validating authority levels, and automating decision outcomes (approval, rejection, pending, or failed).",
      technologies: ["React", "JavaScript", "next.js"],
    },
    
    {
      name: "Scheduled Processing & Third-Party Integration",
      category: "Frontend",
      Image:
        "https://img.freepik.com/free-photo/business-analytics-graph-financial-data-analysis_53876-136065.jpg?semt=ais_hybrid&w=740",
      alt: "Data Visualization",
      description:
        "Automated invoice status transitions and post-approval actions, including exporting finalized data to external systems for reporting and collaboration.",
      projectOverview:
        `Invoices passed through predefined workflows,  routed to authorized users for approval. Based on authority and budget permissions, invoices were approved, rejected, or failed. Scheduled jobs finalized approved invoices, triggered data exports, and generated reports.However, timekeeper, budget, and accrual data—managed at the organization level—were synced via a collaboration portal, with follow-up actions performed based on their updated statuses.
        `,
      technologies: ["React", "JavaScript", "java", "next.js"],
    },
    {
      name: "Project6",
      category: "Tailwind CSS",
      Image:
        "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740",
      alt: "E-commerce Platform",
      description:
        "Created seamless communication with external platforms for timekeeper, budget, and accrual data synchronization.",
      projectOverview:
        "Facilitated the exchange of critical financial information such as Timekeeper data, budgets, and accruals with third-party systems through collaborative portals. Monitored data synchronization status, performing necessary validations and actions within the primary application.",
      technologies: ["React", "JavaScript", "java", "next.js"],
    },
  ];

  const selectedProject =
    selectedIndex !== null ? projectList[selectedIndex] : null; //to show next image on popup

  const handleNext = () => {
    if (selectedIndex < projectList.length - 1) {
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
      ? projectList
      : projectList.filter((project) => project.category === category);

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
            <div className="absolute inset-0 z-10 transition-opacity duration-300 opacity-0 pointer-events-none bg-purple-700/30 group-hover:opacity-100" />

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
              className="inline-flex items-center justify-center w-full px-3 text-sm font-medium transition-colors bg-transparent border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground h-9 hover:bg-red-400 hover:text-gray-100"
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

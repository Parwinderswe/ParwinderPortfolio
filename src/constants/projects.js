const projects = [
  {
    name: "Matter Management System (MMS)",
    category: "Backend",
    Image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1115",
    alt: "Matter Management System (MMS)",
    description:
      "Managed legal and operational matters with tailored workflows",
    projectOverview:
      "Managed and created legal matters tailored to specific business units (PABUs). Linked responsible individuals to these matters and integrated a structured approval workflow, enforcing authority rules for actions and decisions.",
    technologies: ["Java", "Groovy", "Maven", "Sql Server"],
  },
  {
    name: "Organization Resource and Workflow System",
    category: "Backend",
    Image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    alt: "Organization Resource and Workflow System",
    description:
      "Streamlined organizational resource management and workflow integration.",
    projectOverview:
      "Built comprehensive organizational profiles integrated with matters, managing roles, responsibilities, budgets, accruals, and timekeepers within defined workflows to enhance operational efficiency.",
    technologies: ["Java", "Groovy", "Maven", "Gradle", "Sql Server"],
  },
  {
    name: "PABUs+Role based Security",
    category: "Fullstack",
    Image:
      "https://www.shutterstock.com/image-photo/access-management-businessman-analyzing-digital-260nw-2614008183.jpg",
    alt: "Application Enhancement",
    description:
      "Developed comprehensive security protocols with user roles and permissions.",
    projectOverview:
      "Configured detailed security mechanisms for users, roles, and permissions tied to PABUs. Automated user associations to workflows based on permissions, enhancing secure access control across matters and organizational data for invoices",
    technologies: ["React", "JavaScript", "java", "Jenkins", "Sql Server"],
  },
  {
    name: "Invoice Approval and Workflow Automation",
    category: "Fullstack",
    Image:
      "https://www.docuclipper.com/wp-content/uploads/Invoice-approval-workflow_.png",
    alt: "Core Module Development",
    description:
      "Designed an automated invoice approval system integrating rule-based workflows.",
    projectOverview:
      "Developed and implemented an automated invoice management system that linked invoices to specific matters and organizations. Defined customizable workflow rules ensuring systematic approval processes, validating authority levels, and automating decision outcomes (approval, rejection, pending, or failed).",
    technologies: ["React", "JavaScript", "Java", "Groovy", "Sql Server"],
  },

  {
    name: "Scheduled Processing & Third-Party Integration",
    category: "Backend",
    Image:
      "https://techifysolutions.com/wp-content/uploads/2024/12/Integrating-Third-Party-Services-blog.webp",
    alt: "Third-Party Integration",
    description:
      "Automated invoice status transitions and post-approval actions, including exporting finalized data to external systems for reporting and collaboration.",
    projectOverview:
      `Invoices passed through predefined workflows,  routed to authorized users for approval. Based on authority and budget permissions, invoices were approved, rejected, or failed. Scheduled jobs finalized approved invoices, triggered data exports, and generated reports.However, timekeeper, budget, and accrual data—managed at the organization level—were synced via a collaboration portal, with follow-up actions performed based on their updated statuses.
        `,
    technologies: ["java", "Groovy", "Sql Server"],
  },
  {
    name: "Expense & Spend Tracking System",
    category: "Frontend",
    Image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1102",
    alt: "Expense & Spend Tracking System",
    description:
      "Built interactive financial dashboards to visualize expenses, budgets, and approval flows across departments.",
    projectOverview:
      "Developed a responsive front-end dashboard for real-time expense tracking and budget utilization monitoring. Implemented approval workflows for expense requests, dynamic chart visualizations for spending trends, and user-level access management. Streamlined financial operations by enhancing transparency and supporting data-driven decision-making for administrators.",
    technologies: ["React", "JavaScript", "TypeScript", "Tailwind"],
  },
  {
    name: "Reporting and Analytics Dashboard",
    category: "Frontend",
    Image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    description:
      "Created a visually interactive dashboard for data visualization, performance insights, and real-time analytics.",
    projectOverview:
      "Developed an analytics platform to visualize matter, invoice, and organizational performance metrics through customizable reports. Utilized charting libraries and REST API integrations to deliver dynamic visualizations. Enabled filtering, drill-down analytics, and exportable reports to support management in informed strategic decisions.",
    technologies: ["React", "JavaScript", "TypeScript", "Tailwind"],
  },
  {
    name: "Daily Status & Attendance Tracker",
    category: "Frontend",
    Image:
      "../assets/daily-status.png",
    alt: "Daily Status & Attendance Tracker",
    description:
      "Developed an internal tracking system to log daily employee tasks, attendance, and project updates.",
    projectOverview:
      "Built a lightweight employee management interface allowing users to record attendance and submit daily work summaries. Integrated task categorization, calendar view, and reporting options for HR and project leads. Enhanced accountability, attendance accuracy, and productivity tracking across teams.",
    technologies: ["React", "JavaScript", "TypeScript", "Tailwind"],
  },
  {
    name: "PASG Remediation Projects Management",
    category: "Frontend",
    Image:
      "https://www.parmindersingh.info/_next/image?url=%2FIcons%2FProjects%2FPASGProjects.png&w=1920&q=75",
    alt: "PASG Remediation Projects Management",
    description:
      "Web-based system for managing restoration and remediation of old infrastructure and heritage buildings.",
    projectOverview:
      "Developed an application to track, manage, and document remediation progress for heritage and old building restoration projects. Included modules for project assignments, progress reports, compliance checklists, and contractor coordination. Improved transparency and collaboration between departments involved in PASG initiatives.",
    technologies: ["React", "JavaScript", "TypeScript", "Html", "Tailwind"],
  },
  {
    name: "Folder Management System (Personal Project)",
    category: "Frontend",
    Image:
      "../assets/folders.png",
    alt: "Folder Management System (Personal Project)",
    description:
      "A personal learning project designed to simulate a file explorer for organizing and managing folders and files efficiently.",
    projectOverview:
      "Built an interactive folder management system with features such as file creation, folder hierarchy, file previews, and metadata display. Designed a responsive and minimal interface for real-world practice of CRUD operations, state management, and UI optimization. Enhanced understanding of component structuring, React hooks, and scalable state management patterns.",
    technologies: ["React", "JavaScript", "TypeScript", "Html", "Tailwind"],
  },
];

export default projects;
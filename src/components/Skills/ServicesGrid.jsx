import ServiceCard  from "./ServiceCard";
import { FiDatabase,FiLayout, FiServer } from "react-icons/fi";

const services =[
    {
        id:1,
        imageUrl:<FiLayout size={40}/>, 
        title:"Frontend Development", 
        description:"Creating responsive, accessible, and performant user interfaces", 
        tags:[ "JavaScript","React.js","TypeScript","Rest Api","CSS", "BootStrap",  "Tailwind CSS"]
    },
    {
    id: 2,
    imageUrl: <FiServer size={40}/>,
    title: "Backend Development",
    description: "Building scalable APIs and database schemas",
    tags: ["Microsoft SQL Server","Java","Groovy"],
  },
  {
    id: 3,
    imageUrl: <FiDatabase size={40} />,
    title: "DevOps / CI-CD",
    description: "Automating deployments, monitoring, and infrastructure",
    tags: ["SVN", "Git", "Jenkins","Gradle","Webpack"],
  },
  /*{
        id:4,
        imageUrl:"image", 
        title:"Frontend Development", 
        description:"Creating responsive, accessible, and performant user interfaces", 
        tags:["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]
    },
    {
    id: 5,
    imageUrl: "image",
    title: "Backend Development",
    description: "Building scalable APIs and database schemas",
    tags: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    id: 6,
    imageUrl: "image",
    title: "DevOps / CI-CD",
    description: "Automating deployments, monitoring, and infrastructure",
    tags: ["Docker", "Kubernetes", "GitHub Actions"],
  },*/
];

const ServicesGrid= ()=>{
    return(
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service)=>(
                        <ServiceCard 
                        key={service.id}
                        imageUrl={service.imageUrl}
                        title={service.title}
                        description={service.description}
                        tags={service.tags}
                        />
                    ))}

                </div>
    )
}
export default ServicesGrid;
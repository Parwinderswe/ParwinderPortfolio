import React from "react";
import CareerJourneyCard from "./CareerJourneyCard";
const timeline = [
  {
    year: 2022,
    position: "Module Lead",
    company: "Bebo",
    description:
      "Led a team of 3 members to upgrade new features, provided support to UAT/Prod, and managed deployments.",
  },
  {
    year: 2020,
    position: "Senior Software Engineer",
    company: "Bebo",
    description:
      "Trained new joiners, worked on multiple modules’ features and their integrations, and collaborated with 3rd-party service providers.",
  },
  {
    year: 2018,
    position: "Associate Software Engineer",
    company: "Bebo",
    description:
      "Interacted with clients to understand/verify requirements, participated in project planning, and developed core modules.",
  },
  {
    year: 2017,
    position: "Junior Associate Software Engineer",
    company: "Bebo",
    description:
      "Applied the company’s technical framework to build application modules, implemented new features, performed code optimization, and fixed bugs in existing components.",
  },
  {
    year: 2016,
    position: "Trainee",
    company: "Bebo",
    description:
      "Joined as Trainee, learned foundational technologies, and built small applications using Highcharts.",
  },
];

function CareerJourneyCards() {
  return (
    <div className="max-w-4xl mx-auto ">
      <h3 className="mb-12 text-2xl font-bold text-center">Career Journey</h3>
      <div className="relative">
        <div className="absolute w-1 h-full transform -translate-x-1/2 bg-blue-400 left-1/2"></div>
        <div className="space-y-16">
          {timeline.map((items,idx) => (
            <CareerJourneyCard
            key={items.year}
            year={items.year}
            position={items.position}
            company={items.company}
            description={items.description}
            cardDisplay={idx%2===1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareerJourneyCards;

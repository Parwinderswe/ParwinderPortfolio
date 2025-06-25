import ServicesGrid from "./ServicesGrid";
import TechnicalCards from "./TechnicalCards";

const Skills = () => {
  return (
    <section id="skills" className="py-20 dark:text-white dark:bg-gray-950 is-visible">
      <div className="container px-4 mx-auto">
        {/* Skills & expertise section start */}
        <div className="mb-16 text-center ">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Skills & Expertise
          </h1>
          <div className="w-20 h-1 mx-auto mb-8 bg-purple-500"></div>
          <p className="max-w-3xl mx-auto text-lg text-opacity-100 text-muted-foreground">
            With 6+ years in software engineering, I've developed a diverse set
            of skills spanning frontend, backend, and infrastructure
            technologies.
          </p>
        </div>
        {/* Technical section start */}

        {/* <TechnicalCards /> */}

        {/* developments section start */}

        <ServicesGrid />
      </div>
    </section>
  );
};

export default Skills;

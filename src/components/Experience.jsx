import Heading from "src/components/shared/Heading";
import InfoCard from "src/components/shared/InfoCard";
import { experienceList } from "src/constants";

const Experience = () => {
  return (
    <>
      <Heading
        size="xl"
        fontWeight="bold"
        title="12 YEAR OF"
        subtitle="EXPERIENCE"
        className="items-center lg:items-start"
      />
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
        {experienceList.map((experience, index) => (
          <InfoCard
            key={index}
            title={experience.title}
            description={experience.description}
            dateRange={experience.dateRange}
            link={experience.link}
            image={experience.image}  // Assuming an image might exist in the experience data
          />
        ))}
      </div>
    </>
  );
};

export default Experience;


import Heading from "src/components/shared/Heading"
import InfoCard from "src/components/shared/InfoCard"

import { experienceList } from "src/constants"

const Experience = () => {
  return (
    <>
      <Heading
        size="xl"
        fontWeight="bold"
        title="12 YEAR OF"
        subtitle="EXPERIENCE"/>
      <div className="flex flex-col items-center gap-6">
        {experienceList.map((experience, index) => (
          <InfoCard
            key={index}
            title={experience.title}
            description={experience.description}
            dateRange={experience.dateRange}
            link={experience.link}
          />
        ))}
      </div>
    </>
  )
}

export default Experience

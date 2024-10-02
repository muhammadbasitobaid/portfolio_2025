import Heading from "src/components/shared/Heading"
import InfoCard from "src/components/shared/InfoCard"

import { projectList } from "src/constants"

const Projects = () => {
  return (
    <>
    <Heading
      size="xl"
      fontWeight="bold"
      title="RECENT"
      subtitle="PROJECTS"/>
    <div className="flex flex-col gap-6 items-center">
      {projectList.map((experience, index) => (
        <InfoCard
          key={index}
          title={experience.title}
          description={experience.description}
          dateRange={experience.dateRange} // If needed, you can add dateRange here
          link={experience.link}
          image={experience.image}
        />
      ))}
    </div>
    </>
  )
}

export default Projects

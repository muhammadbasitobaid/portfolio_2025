import Heading from "src/components/shared/Heading"
import Paragraph from "src/components/shared/Paragraph"
import InfoCard from "src/components/shared/InfoCard"
import ToolCard from "src/components/shared/ToolCard"

import {stats, projectList, experienceList, tools} from "src/constants"

const Profile = () => {

  return (
    <div className="flex flex-col gap-8">
      <Heading
        size="xl"
        fontWeight="bold"
        title="PRODUCT"
        subtitle="DESIGNER"/>
    <Paragraph className="text-white">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</Paragraph>

    <div className="flex gap-2">
    {
      stats.map(({key, value}) => <div className="w-[20%]"><Heading size="md" fontWeight="bold" title={value} subtitle={key}/></div>)
    }

    </div>

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

    <Heading
      size="xl"
      fontWeight="bold"
      title="PREMIUM"
      subtitle="TOOLS"/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tools.map((tool) => (
        <ToolCard
          key={tool.icon}
          icon={tool.icon}
          title={tool.title}
          description={tool.description}
        />
      ))}
    </div>
    </div>
  )
}

export default Profile

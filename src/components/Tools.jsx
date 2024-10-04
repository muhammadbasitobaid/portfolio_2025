import Heading from "src/components/shared/Heading"
import ToolCard from "src/components/shared/ToolCard"

import { tools } from "src/constants"

const Tools = () => {
  return (
    <>
    <Heading
      size="xl"
      fontWeight="bold"
      title="PREMIUM"
      subtitle="TOOLS"
      className="items-center lg:items-start"
    />
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
    </>
  )
}

export default Tools

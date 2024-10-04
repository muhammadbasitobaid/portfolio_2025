import Intro from "src/components/Intro"
import Experience from "src/components/Experience"
import Projects from "src/components/Projects"
import Tools from "src/components/Tools"

const ScrollableSection = () => {
  return (
    <div className="flex flex-col gap-6 sm:px-6 md:gap-8  lg:px-0">
      <Intro />
      <Experience />
      <Projects />
      <Tools />
    </div>
  )
}

export default ScrollableSection

import Intro from "src/components/Intro"
import Experience from "src/components/Experience"
import Projects from "src/components/Projects"
import Tools from "src/components/Tools"
// import ContactUs from "src/components/ContactUs"

const ScrollableSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <Intro />
      <Experience />
      <Projects />
      <Tools />
    </div>
  )
}

export default ScrollableSection

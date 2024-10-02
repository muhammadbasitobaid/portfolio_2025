import Heading from "src/components/shared/Heading"
import Paragraph from "src/components/shared/Paragraph"

import {stats } from "src/constants"

const Intro = () => {
  return (<>
      <Heading
        size="xl"
        fontWeight="bold"
        title="PRODUCT"
        subtitle="DESIGNER"/>
    <Paragraph className="text-white">Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</Paragraph>

    <div className="flex gap-2">
    {
      stats.map(({key, value}) => <div className="w-[20%]" key={key}><Heading size="md" fontWeight="bold" title={value} subtitle={key}/></div>)
    }
    </div>
    </>
  )
}

export default Intro

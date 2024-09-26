import React from 'react'
import Heading from "src/components/shared/Heading"
import Paragraph from "src/components/shared/Paragraph"
import InfoCard from "src/components/shared/InfoCard"

const Profile = () => {
const stats = [
  {
    key: "YEARS OF EXPERIENCE",
    value: "+12",
  },
  {
    key: "PROJECTS COMPLETED",
    value: "+46",
  },
  {
    key: "WORLDWIDE CLIENTS",
    value: "+20",
  },
];

const cardDataList = [
  {
    title: 'PixelForge Studios',
    description:
      'Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.',
    dateRange: 'Jan 2020 - Present',
    link: '/more-info',
  },
  {
    title: 'TechSphere Innovations',
    description:
      'Spearheaded the development of AI-driven software solutions that improved operational efficiency by 30%.',
    dateRange: 'Mar 2018 - Dec 2019',
    link: '/tech-info',
  },
  {
    title: 'Digital Nexus',
    description:
      'Collaborated with cross-functional teams to deliver cloud-native applications for clients in the fintech sector.',
    dateRange: 'Jun 2015 - Feb 2018',
    link: '/nexus-info',
  },
];

const projectList = [
  {
    title: 'NajmAI',
    description: 'SaaS Framer Template',
    image: '/images/project1.jpg',  // Reference to project1.jpg
    link: '/najmai',
  },
  {
    title: 'Nashra',
    description: 'SaaS Framer Template',
    image: '/images/project2.jpg',  // Reference to project2.jpg
    link: '/nashra',
  },
  {
    title: 'Ruya',
    description: 'SaaS Framer Template',
    image: '/images/project3.jpg',  // Reference to project3.jpg
    link: '/ruya',
  },
];

  return (
    <div className="">
      <Heading
        size="xl"
        fontWeight="bold"
        title="PRODUCT"
        subtitle="DESIGNER"/>
    <Paragraph>Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.</Paragraph>

    <div className="flex">
    {
      stats.map(({key, value}) => <Heading size="md" fontWeight="bold" title={value} subtitle={key}/>)
    }

    </div>

      <Heading
        size="xl"
        fontWeight="bold"
        title="12 YEAR OF"
        subtitle="EXPERIENCE"/>
      <div className="flex flex-col items-center gap-6">
        {cardDataList.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            description={cardData.description}
            dateRange={cardData.dateRange}
            link={cardData.link}
          />
      ))}
      </div>
    <Heading
      size="xl"
      fontWeight="bold"
      title="RECENT"
      subtitle="PROJECTS"/>
    <div className="flex flex-col gap-6 items-center">
      {projectList.map((cardData, index) => (
        <InfoCard
          key={index}
          title={cardData.title}
          description={cardData.description}
          dateRange={cardData.dateRange} // If needed, you can add dateRange here
          link={cardData.link}
          image={cardData.image}
        />
      ))}
    </div>
    </div>
  )
}

export default Profile

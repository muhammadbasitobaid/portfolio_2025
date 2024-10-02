import GithubIcon from "src/components/shared/icons/GithubIcon";
import LinkedInIcon from "src/components/shared/icons/LinkedInIcon";
import TwitterIcon from "src/components/shared/icons/TwitterIcon";
import UpworkIcon from "src/components/shared/icons/UpworkIcon";

export const stats = [
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

export const experienceList = [
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

export const projectList = [
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
export const tools = [
  {
    icon: '/images/tools/framer.png',
    title: 'Framer',
    description: 'Website Builder',
  },
  {
    icon: '/images/tools/gpt.png',
    title: 'ChatGPT',
    description: 'AI Assistant',
  },
  {
    icon: '/images/tools/next.png',
    title: 'Next.js',
    description: 'React Framework',
  },
  {
    icon: '/images/tools/notion.png',
    title: 'Notion',
    description: 'Workspace Collaboration',
  },
];


export const socialList = [
  { icon: <GithubIcon />, text: 'Github', href: '#' },
  { icon: <LinkedInIcon />, text: 'LinkedIn', href: '#' },
  { icon: <TwitterIcon />, text: 'X', href: '#' },
  { icon: <UpworkIcon />, text: 'Upwork', href: '#' },
];

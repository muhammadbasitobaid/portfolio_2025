import React from 'react';
import ScrollableSection from "src/components/shared/Container/ScrollableSection";
import Heading from "src/components/shared/Heading";
import GithubIcon from "src/components/shared/icons/GithubIcon";
import LinkedInIcon from "src/components/shared/icons/LinkedInIcon";
import TwitterIcon from "src/components/shared/icons/TwitterIcon";
import EmailIcon from "src/components/shared/icons/EmailIcon";
import UpworkIcon from "src/components/shared/icons/UpworkIcon";
import Paragraph from "src/components/shared/Paragraph";

const Container = () => {
  const socialList = [
    { icon: <GithubIcon />, text: 'Github', href: '#' },
    { icon: <LinkedInIcon />, text: 'LinkedIn', href: '#' },
    { icon: <TwitterIcon />, text: 'X', href: '#' },
    { icon: <EmailIcon />, text: 'Email', href: '#' },
    { icon: <UpworkIcon />, text: 'Upwork', href: '#' },
  ];

  return (
    <div className="w-[60%] m-x-auto flex items-start py-10 gap-x-20 ">
      <div className="flex flex-col items-center gap-y-4 bg-white py-6 px-10 rounded-lg sticky top-20 w-[50%]">
<img 
  src={'/images/profile.jpg'} 
  alt={'Profile Pic'} 
  className="!w-[240px] !h-[284px] rounded-lg object-cover" 
/>
        <Heading
          size="md"
          fontWeight="bold"
          title="Evil Minion"
          subtitle=""
        />
    <Paragraph className="!leading-none text-center !text-base">
Experienced full stack developer who has built several LLM solutions.
    </Paragraph>


      <nav className="flex justify-center gap-2">
        {socialList.map((item, index) => (
          <a href={item.href} key={index} className="flex items-center" title={item.text}>
            {item.icon}
          </a>
        ))}
      </nav>
      </div>
      <ScrollableSection />
    </div>
  );
}

export default Container;

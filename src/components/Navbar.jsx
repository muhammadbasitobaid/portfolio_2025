import React from 'react';
import BagIcon from 'src/components/shared/icons/BagIcon';
import FolderIcon from 'src/components/shared/icons/FolderIcon';
import HomeIcon from 'src/components/shared/icons/HomeIcon';
import ThoughtsIcon from 'src/components/shared/icons/ThoughtsIcon';
import ToolIcon from 'src/components/shared/icons/ToolIcon';

const Navbar = () => {
  const navList = [
    { icon: <BagIcon />, text: 'Experience', href: '#' },
    { icon: <FolderIcon />, text: 'Projects', href: '#' },
    { icon: <HomeIcon />, text: 'Home', href: '#' },
    { icon: <ThoughtsIcon />, text: 'Thoughts', href: '#' },
    { icon: <ToolIcon />, text: 'Tools', href: '#' },
  ];

  return (
    <div className="bg-white/[0.2] text-white px-8 py-2 my-4 rounded-lg">
      <nav className="flex space-x-6">
        {navList.map((item, index) => (
          <a href={item.href} key={index} className="flex items-center space-x-2" title={item.text}>
            {item.icon}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
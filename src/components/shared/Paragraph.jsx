import React from 'react';

const Paragraph = ({ children }) => {
  return (
    <div className="text-base md:text-lg lg:text-xl leading-normal">
      {children}
    </div>
  );
};

export default Paragraph;

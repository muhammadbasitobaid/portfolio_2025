import React from 'react';
import clsx from 'clsx';

const Paragraph = ({ children, className }) => {
  return (
    <div className={clsx("text-base md:text-lg lg:text-xl leading-normal", className)}>
      {children}
    </div>
  );
};

export default Paragraph;

import React from 'react';

const Card = ({ bgColor, icon, text, textColor, link }) => {
  return (
    <div
      className={`w-80 h-80 p-5 rounded-lg flex flex-col justify-between relative transition duration-300 ease-in-out`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon container */}
      <div className="absolute top-4 left-4">
        <img src={icon} alt="Icon" className="w-10 h-10" />
      </div>

      {/*  Text */}
      <div className="flex-grow flex items-center justify-center text-center">
        <h3 className={`text-lg font-bold ${textColor}`}>
          {text}
        </h3>
      </div>

      {/* Arrow Link */}
      <div className="self-end">
        <a href={link} className="text-white text-2xl">
          →
        </a>
      </div>
    </div>
  );
};

export default Card;

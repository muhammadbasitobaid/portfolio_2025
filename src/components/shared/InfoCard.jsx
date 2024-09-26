import React from 'react';

const InfoCard = ({ title, description, dateRange, link, image }) => {
  return (
    <div className="flex items-center text-white py-6 relative w-full bg-black rounded-lg shadow-lg">
      {/* Optional Image */}
      {image && (
        <div className="mr-6">
          <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg" />
        </div>
      )}

      <div className="flex-1">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 mb-2">{description}</p>

        {/* Optional Date Range */}
        {dateRange && <p className="text-gray-500 text-sm">{dateRange}</p>}
      </div>

      {/* Arrow Link */}
      <a href={link} className="absolute top-6 right-6 text-orange-500 text-2xl">
        →
      </a>
    </div>
  );
};

export default InfoCard;

import PropTypes from 'prop-types';

const InfoCard = ({ title, description, dateRange, link, image }) => {
  return (
    <div className="flex items-center text-white w-full bg-black rounded-lg shadow-lg">
      {/* Optional Image */}
      {image && (
        <div className="mr-6">
          <img src={image} alt={title} className="w-24 h-24 object-cover rounded-lg" />
        </div>
      )}

      <div className="flex-1">
        {/* Title and Arrow Container */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold text-white">{title}</h3>

          {/* Arrow Link */}
          <a href={link} className="text-orange-500 text-2xl">
            →
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-2">{description}</p>

        {/* Optional Date Range */}
        {dateRange && <p className="text-gray-500 text-sm">{dateRange}</p>}
      </div>
    </div>
  );
};

// PropTypes validation
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,        // Title is a required string
  description: PropTypes.string.isRequired,  // Description is a required string
  dateRange: PropTypes.string,               // Optional date range as a string
  link: PropTypes.string.isRequired,         // Link is a required string
  image: PropTypes.string,                   // Optional image URL as a string
};

export default InfoCard;

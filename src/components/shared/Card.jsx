import PropTypes from 'prop-types';

const Card = ({ bgColor, icon, text, textColor, link }) => {
  return (
    <div
      className={`w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg flex flex-col justify-between relative transition duration-300 ease-in-out`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon container */}
      <div className="absolute top-4 left-4">
        <img src={icon} alt="Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
      </div>

      {/*  Text */}
      <div className="flex-grow flex items-center justify-center text-center">
        <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${textColor}`}>
          {text}
        </h3>
      </div>

      {/* Arrow Link */}
      <div className="self-end">
        <a href={link} className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          →
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  bgColor: PropTypes.string.isRequired,  // Background color as a required string
  icon: PropTypes.string.isRequired,     // Icon source URL as a required string
  text: PropTypes.string.isRequired,     // Card text as a required string
  textColor: PropTypes.string,           // Text color as an optional string
  link: PropTypes.string.isRequired,     // URL link as a required string
};

export default Card;

import PropTypes from 'prop-types';

const ToolCard = ({ icon, title, description }) => {
  return (
    <div className="bg-black rounded-lg flex items-center space-x-4 shadow-md w-72 md:p-4 ">
      {/* Icon Container */}
        <img src={icon} alt={title} className="h-10 w-10" />
      {/* Text Content */}
      <div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

// PropTypes validation
ToolCard.propTypes = {
  icon: PropTypes.string.isRequired,  // Assuming the icon is a string URL or path
  title: PropTypes.string.isRequired,  // Title should be a string
  description: PropTypes.string.isRequired,  // Description should be a string
};

export default ToolCard;

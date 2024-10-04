import clsx from 'clsx';
import PropTypes from 'prop-types';

const Paragraph = ({ children, className }) => {
  return (
    <div className={clsx("text-base sm:text-lg md:text-xl xl:text-2xl leading-normal", className)}>
      {children}
    </div>
  );
};

// PropTypes validation
Paragraph.propTypes = {
  children: PropTypes.node.isRequired, // The paragraph content must be a valid React node and is required
  className: PropTypes.string,         // Optional additional className as a string
};

export default Paragraph;

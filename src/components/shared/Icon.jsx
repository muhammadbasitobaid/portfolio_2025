import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import clsx from "clsx";

// Reusable Icon component
const Icon = ({ icon: IconComponent, theme = "light", size = "24", className = "" }) => {
  // Set color based on theme
  const color = theme === "dark" ? "white" : "orange";

  const combinedClassName = clsx(
    className,  // any custom classes passed
  );

  return (
    <IconContext.Provider value={{ color, className: combinedClassName, size: `${size}px`}}>
      <IconComponent />
    </IconContext.Provider>
  );
};

// PropTypes validation
Icon.propTypes = {
  icon: PropTypes.elementType.isRequired, // the React icon component
  theme: PropTypes.oneOf(['light', 'dark']), // theme for icon color
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // size of the icon
  className: PropTypes.string // additional classes
};

export default Icon;

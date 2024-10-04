import clsx from 'clsx';
import PropTypes from 'prop-types';

const Heading = ({ 
  size = 'md', 
  fontWeight = 'medium', 
  title, 
  subtitle, 
  variant = 'dark', 
  className // New prop for custom container classes
}) => {
  const titleClass = clsx(
    {
      'text-primary': variant === 'dark',
      'text-black': variant === 'light',
    },
    {
      // Responsive title sizes
      'text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-none': size === 'xl',
      'text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none': size === 'lg',
      'text-3xl sm:text-4xl lg:text-3xl xl:text-4xl leading-none': size === 'md',
      'text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none': size === 'sm',
      'text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none': size === 'xs',
    },
    {
      'font-bold': fontWeight === 'bold',
      'font-medium': fontWeight === 'medium',
      'font-thin': fontWeight === 'thin',
    }
  );

  const subtitleClass = clsx(
    'text-secondary font-bold',
    {
      // Subtitle sizes, slightly smaller than the title sizes
      'text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight': size === 'xl',
      'text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight': size === 'lg',
      'text-2xl sm:text-3xl lg:text-2xl xl:text-3xl leading-tight': size === 'md',
      'text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight': size === 'sm',
      'text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight': size === 'xs',
    }
  );

  return (
    <div className={clsx("flex flex-col items-start", className)}>
      <h1 className={titleClass}>{title}</h1>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
};

Heading.propTypes = {
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  variant: PropTypes.oneOf(['dark', 'light']),
  fontWeight: PropTypes.oneOf(['bold', 'medium', 'thin']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string, // Custom class for container div
};

export default Heading;

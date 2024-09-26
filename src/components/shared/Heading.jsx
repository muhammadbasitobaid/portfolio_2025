import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Heading = ({ size = 'md', fontWeight = 'medium', title, subtitle }) => {
  const titleClass = clsx(
    'text-gray-900',
    {
      'text-6xl leading-none': size === 'lg',   // Large size (approx. 94px)
      'text-5xl leading-none': size === 'md',   // Medium size (approx. 70px)
      'text-2xl leading-none': size === 'sm',   // Small size (approx. 26px)
      'text-base leading-none': size === 'xs',   // Extra Small size (approx. 18px)
    },
    {
      'font-bold': fontWeight === 'bold',
      'font-medium': fontWeight === 'medium',
      'font-thin': fontWeight === 'thin',
    }
  );

  const subtitleClass = clsx(
    'text-gray-600',
    {
      'text-6xl leading-[0.9]': size === 'lg',    // Large subtitle (approx. 94px)
      'text-base leading-[0.9]': size === 'md' || size === 'sm',  // Medium/Small subtitle (16px)
      'text-xs leading-[0.9]': size === 'xs',   // Extra Small subtitle (12px)
    },
    {
      'font-bold': size === 'lg',
    }
  );

  return (
    <div className="flex flex-col items-start">
      <h1 className={titleClass}>{title}</h1>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
};

Heading.defaultProps = {
  size: 'md',
  fontWeight: 'medium',
  subtitle: '',
};

Heading.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  fontWeight: PropTypes.oneOf(['bold', 'medium', 'thin']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Heading;

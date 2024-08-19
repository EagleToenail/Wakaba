import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, type = 'button', className, disabled = false, style = {} }) => {
  // Default style
  const defaultStyle = {
    
  };



  return (
    <button
      type={type}
      className={`w-30 px-20 py-1 font-bold text-[white] tracking-wide rounded-lg justify-center t bg-[#e87a00] hover:bg-blue-700 focus:outline-none btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{ ...defaultStyle, ...style }}
    >
    {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;
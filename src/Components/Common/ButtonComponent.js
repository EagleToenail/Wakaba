import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, type = 'button', className = '', disabled = false, style = {} }) => {
  // Default style
  const defaultStyle = {
    // width: '100%',
    height:'40px',
    padding: '0.75rem',
    backgroundColor:  '#f1ab27',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style, // Allow for custom styles to override default
  };



  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={defaultStyle}
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
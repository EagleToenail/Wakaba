import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick,id, children, type = 'button', className, disabled = false, style = {} }) => {
  // Default style
  const defaultStyle = {
    
  };



  return (
    <button
    id={id}
      type={type}
      className={`inline-block whitespace-nowrap overflow-hidden w-30 py-1 px-20 font-bold text-[white] rounded-lg text-center bg-[#e87a00] hover:bg-blue-700 focus:outline-none ${className}`}
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
// <ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{  backgroundColor: '#ebe5e1', color: '#626373'}} /> 
//<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg>(tirange)
export default Button;


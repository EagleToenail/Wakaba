import React from 'react';

const InputComponent = ({value, onChange,className, placeholder, type = 'text', style = {}, ...props }) => {
    const defaultStyle = {
        width: '100%',
        height: '40px',
        padding: '0.75rem',
        border: '1.5px solid #8d8478',
        backgroundColor: 'transparent'
    };

    return (
        <input
            type={type}
            value={value}
            className={`${className}`}
            onChange={onChange}
            placeholder={placeholder}
            style={{ ...defaultStyle, ...style }}
            
            {...props}
        />
    );
};

export default InputComponent;
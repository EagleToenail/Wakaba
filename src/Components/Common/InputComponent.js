import React from 'react';

const InputComponent = ({value, onChange,className, placeholder, type = 'text', style = {}, ...props }) => {
    const defaultStyle = {
    };

    return (
        <input
            type={type}
            value={value}
            className={`text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a] ${className}`}
            onChange={onChange}
            placeholder={placeholder}
            style={{ ...defaultStyle, ...style }}
            
            {...props}
        />
    );
};

export default InputComponent;
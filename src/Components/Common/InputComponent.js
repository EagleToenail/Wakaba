import React from 'react';

const InputComponent = ({
    value,
    name,
    onChange,
    className,
    placeholder,
    type = 'text',
    style = {},
    disabled = false,  // Add disabled prop here
    ...props
}) => {
    const defaultStyle = {
        // You can define default styles if needed
    };

    return (
        <input
            type={type}
            name={name}
            value={value}
            className={`text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a] ${className}`}
            onChange={onChange}
            placeholder={placeholder}
            style={{ ...defaultStyle, ...style }}
            disabled={disabled}  // Pass disabled prop to the input
            {...props}
        />
    );
};

export default InputComponent;

import React from 'react';

const LabelComponent = ({value,className, style = {}, ...props }) => {
    const defaultStyle = {
    };

    return (
        <label
            className={`text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0 mr-3 ${className}`}
            style={{ ...defaultStyle, ...style }}
            {...props}
        >{value}</label>
    );
};

export default LabelComponent;
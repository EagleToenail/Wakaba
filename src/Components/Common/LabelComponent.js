import React from 'react';

const LabelComponent = ({value,className, style = {}, ...props }) => {
    const defaultStyle = {
        width: '100%',
        color:'#70685a',
        fontSize:'15px',
        backgroundColor: 'transparent'
    };

    return (
        <label
            className={`${className}`}
            style={{ ...defaultStyle, ...style }}
            {...props}
        >{value}</label>
    );
};

export default LabelComponent;
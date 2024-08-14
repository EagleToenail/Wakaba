import React from 'react';

const LabelComponent = ({value, style = {}, ...props }) => {
    const defaultStyle = {
        width: '100%',
        color:'#70685a',
        fontSize:'15px',
        backgroundColor: 'transparent'
    };

    return (
        <label
            style={{ ...defaultStyle, ...style }}
            {...props}
        >{value}</label>
    );
};

export default LabelComponent;
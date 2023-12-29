// src/CComponent.jsx
import React, { useState } from 'react';

// CComponent accepts props like id, x, y, and content
const CComponent = ({ id, x, y, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Inline styles for CComponent
    const componentStyle = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: isHovered ? '#2980b9' : '#3498db',
        color: '#fff',
        border: '2px solid #2980b9',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    };

    const contentStyle = {
        textAlign: 'center',
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            style={componentStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={contentStyle}>
                {content}
                <br />
                ID: {id}
            </div>
        </div>
    );
};

export default CComponent;

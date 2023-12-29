// src/CComponent.jsx
import React, { useState } from 'react';

// CComponent accepts props like id, x, y, and content
const CComponent = ({ id, x, y, content, onDelete }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Inline styles for CComponent
    const componentStyle = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: isHovered ? '#2980b9' : '#3498db',
        color: '#fff',
        border: '2px solid #2980b9',
        padding: '10px'
    };

    // Delete button at the top-right of the component
    const deleteButtonStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        cursor: 'pointer',
        background: 'red',
        color: 'white',
        border: 'none',
        padding: '5px'
    };

    return (
        <div style={componentStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <button style={deleteButtonStyle} onClick={() => onDelete(id)}>X</button>
            {content}
        </div>
    );
};

export default CComponent;

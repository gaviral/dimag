// src/Canvas.jsx
import React from 'react';

// Canvas component that provides a scrollable area
const Canvas = ({ children }) => {
    // Inline styles for the canvas
    // Set a large fixed size to allow for a wide scrollable area
    const style = {
        width: '5000px',      // Width of the canvas
        height: '5000px',     // Height of the canvas
        position: 'relative', // Relative positioning for absolute positioning of child components
        overflow: 'scroll',   // Enable scrolling
    };

    return <div style={style}>{children}</div>;
};

export default Canvas;

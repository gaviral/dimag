// src/Canvas.jsx
import React from 'react';
import {Card} from 'antd';

// Canvas component that provides a scrollable area
const Canvas = ({children}) => {
    // Set a large fixed size to allow for a wide scrollable area
    const style = {
        width: '5000px',      // Width of the canvas
        height: '5000px',     // Height of the canvas
        position: 'relative', // Relative positioning for absolute positioning of child components
    };

    return (
        <Card style={{width: '100%', overflow: 'auto'}}>
            <div style={style}>
                {children}
            </div>
        </Card>
    );
};

export default Canvas;

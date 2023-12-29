// src/CComponent.jsx
import React, {useState} from 'react';
import {Button, Card, Popover} from 'antd';

// CComponent accepts props like id, x, y, and content
const CComponent = ({id, x, y, content, onDelete}) => {
    const [isHovered, setIsHovered] = useState(false);

    const popoverContent = (
        <div>
            <p>{content}</p>
            <Button type='primary' onClick={() => onDelete(id)}>Delete</Button>
        </div>
    );

    // Inline styles for CComponent
    const componentStyle = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: isHovered ? '#f0f0f0' : 'transparent',
        color: '#000',
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
        <Popover content={popoverContent} title='Component Details' trigger='hover'>
            <Card style={componentStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                <div style={componentStyle}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}>
                    <button style={deleteButtonStyle} onClick={() => onDelete(id)}>X</button>
                    {content}
                </div>
            </Card>
        </Popover>);
};

export default CComponent;

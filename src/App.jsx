// Import necessary modules from React and other components
import React, { useState } from 'react';
import Canvas from './Canvas';
import CComponent from './CComponent';

// Define the main App component
const App = () => {
    // Use the useState hook to manage an array of components
    const [components, setComponents] = useState([]);

    // Function to add a new component to the array
    const addComponent = () => {
        // Create a new component object with a unique ID, x, y coordinates, and content
        const newComponent = {
            id: components.length,                // Unique ID based on the current length of the components array
            x: 100 * components.length,           // X-coordinate calculation based on component count
            y: 100 * components.length,           // Y-coordinate calculation based on component count
            content: `Component ${components.length}` // Content for the new component
        };

        // Update the components array by adding the new component
        setComponents([...components, newComponent]);
    };

    // Render the App component
    return (
        <div>
            {/* Button to trigger the addComponent function */}
            <button onClick={addComponent}>Add Component</button>

            {/* Render a Canvas component to display CComponents */}
            <Canvas>
                {components.map(comp => (
                    // Render each component using CComponent instead of a div
                    <CComponent
                        key={comp.id}
                        id={comp.id}
                        x={comp.x}
                        y={comp.y}
                        content={comp.content}
                    />
                ))}
            </Canvas>
        </div>
    );
};

// Export the App component as the default export
export default App;

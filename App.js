import React from 'react';
import ReactDOM from "react-dom/client";

// JSX => React.createElement => Object => HTML(DOM);

const heading = (
    <h1 className="title">Heading</h1>
);

const heading2 = (
    <h2 className="title">Heading2</h2>
);

const heading3 = (
    <h3 className="title">Heading3</h3>
);

const container = (
    <div>
        {heading}
        {heading2}
        {heading3}
    </div>
);

// create root element using createRoot 
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside root
// async defer
root.render(container); 
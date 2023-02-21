import React from 'react';
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)
// Nested header element using React.createElement

const heading = React.createElement("h1",
{
    className: "title"
}, "Heading");

const heading2 = React.createElement("h2",
{
    className: "title",
}, "Heading 2");

const heading3 = React.createElement("h3",
{
    className: "title",
}, "Heading 3");

const container = React.createElement("div",
{
    className: "container",
}, [heading, heading2, heading3]);

// create root element using createRoot 
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside root
// async defer
root.render(container); 
/**
 * 
 * Create Server
 * Hot Module Replacement
 * File Watcher algorithm - c++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatable with older version of browsers
 * HTTPS on dev
 * Port Number
 * Consistent Hashing Algorithm
 * Zero Configuration
 * 
 * 
 * Transitive Dependencies
 * 
 */


import React from "react";
import ReactDOM from "react-dom/client";

// create nested react elements
const heading = React.createElement('h1', {
    id: 'title'
}, "Hello World");
const heading2 = React.createElement('h2', {
    id: 'title2'
}, "Hello World 2");
const container = React.createElement('div', {
    id: 'container',
}, [heading, heading2]);

console.log(heading);

// create root element using createRoot 
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside root

// async defer
root.render(container); 
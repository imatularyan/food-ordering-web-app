// JavaScript
// const root = document.getElementById('root');
// const heading = document.createElement('h1');
// heading.textContent = 'Hello World';
// root.appendChild(heading);


// React
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
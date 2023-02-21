import ReactDOM from "react-dom/client";

// Functional components

// It won't work because It is a function
const Heading = () => {
    return <h1 className='title'>Heading</h1>
};

const Heading2 = () => {
    return <h2 className='title'>Heading 2</h2>
};

const Heading3 = () => {
    return <h3 className='title'>Heading 3</h3>

};

const Container = () => {
    return (
    <div className='container'>
        {Heading}
        {<Heading2/>}
        {<Heading3></Heading3>}
    </div>
    )
};

// create root element using createRoot 
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside root
// async defer
root.render(<Container/>); 
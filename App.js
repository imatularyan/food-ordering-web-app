import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        </>
    )
};

// create root element using createRoot 
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside root
// async defer
root.render(<AppLayout/>); 
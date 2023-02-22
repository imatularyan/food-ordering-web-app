import ReactDOM from "react-dom/client";
import Logo from "./assets/logo.png";
import User from "./assets/user.svg";

// functional header component
const HeaderComponent = () => {
    return (
        <div className="header">
        <div className="logo">
            <img src={Logo}/>
        </div>
        <div className="search-field">
            <input type="text" className="search-input"></input>
            <button type="search" className="search-button">Search</button>
        </div>
        <div className="icon">
            <img alt="user" src={User} />
        </div>
        </div>
    )
};

// create root element using createRoot 
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside root
// async defer
root.render(<HeaderComponent/>); 
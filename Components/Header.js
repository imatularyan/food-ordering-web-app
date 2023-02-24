import Logo from "../assets/logo.png";
import User from "../assets/user.svg";

// React element
const Title = () => (
    <a href="/" className="logo"><img src={Logo}/></a>
);

// functional header component
const Header = () => {
    return (
        <div className="header">
        <Title/>
        <div className="search-field">
            <input type="text" className="search-input"></input>
            <button type="search" className="search-button">Search</button>
        </div>
        <nav className="nav-items">
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/Services">Services</a>
                </li>
            </ul>
        </nav>
        <div>
            <img alt="cart" src="#"/>
        </div>
        <div className="icon">
            <img alt="user" src={User} />
        </div>
        </div>
    )
};

export default Header;
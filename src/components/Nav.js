

import { Link } from "react-router-dom";
import LittleLemonLogo from '../assets/little-lemon-nav-logo.png';

const Nav = () => {
    return (
        <nav>
            <div className="nav-container">
                    <img src={LittleLemonLogo} className="nav-logo"></img>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/" className="nav-item">About</Link>
                    <Link to="/" className="nav-item">Menu</Link>
                  <Link to="/booking" className="nav-item">Reservations</Link>
                  <Link to="/" className="nav-item">Order Online</Link>
                  <Link to="/" className="nav-item">Login</Link>
                </div>
        </nav>
    )
}

export default Nav;

import { Link, NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="headWrap">
                    <div>
                        <Link to={'/'} className="logo">
                            <span className="logoCap">ST<span className="logoTab">DREAM</span> </span>
                        </Link>
                    </div>
                    <ul className="navLinks">
                        <li><NavLink className="" to="/">Home</NavLink></li>
                        <li><NavLink className="" to="/my-booking">My Booking</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
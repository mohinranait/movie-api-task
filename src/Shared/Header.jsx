
import { Link } from "react-router-dom";
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
                        <li><Link className="text-light" to="/">Home</Link></li>
                        <li><Link className="text-light" to="/my-booking">My Booking</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
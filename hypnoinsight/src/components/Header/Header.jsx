import "./Header.scss";
import logo from "../../assets/logo/logo.jpg";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img 
                    className="header__logo-img"
                    src={logo} 
                    alt="logo" 
                />
                <div className="header__title">Empowerment Voyage</div>
            </div>
            <div className="header__nav">
                <NavLink 
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <div className="nav__home">Home</div>
                </NavLink>
                <NavLink 
                    to="/services"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    <div className="nav__services">Services</div>
                </NavLink>
                <NavLink 
                        to="/bookNow"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        <div className="nav__book">Book Now</div>
                    </NavLink>
            </div>
        </header>
    )
}

export default Header;
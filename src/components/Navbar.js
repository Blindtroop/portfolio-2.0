import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from './assets/logo.png'; // Adjust the path as needed

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />
            <nav ref={navRef}>
                <Link to="home" smooth={true} duration={900}>Home</Link>
                <Link to="about" smooth={true} duration={900}>About Me</Link>
                <Link to="projects" smooth={true} duration={900}>My Projects</Link>
                <Link to="contact" smooth={true} duration={900}>Contact Me</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;

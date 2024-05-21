import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
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
				<a href="/#">Home</a>
				<a href="/#">About Me</a>
				<a href="/#">My Projects</a>
				<a className="contact" href="/#">Contact Me</a>
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

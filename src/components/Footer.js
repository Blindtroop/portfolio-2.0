import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from './assets/logo.png'; // Adjust the path as needed
import './footer.css';
import { Link } from 'react-scroll';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-column">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p>Copyright © 2024. All rights reserved.</p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>My Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <p>Email: kaluhilance4@gmail.com</p>
                    <p>Phone: +251 115 112760</p>
                </div>
                <div className="footer-column">
                    <h3>Follow Me</h3>
                    <ul className="footer-links">
                        <li><a href="https://www.facebook.com/profile.php?id=61560283070600"><FaFacebook /></a></li>
                        <li><a href="https://x.com/Kaluhi2"><FaTwitter /></a></li>
                        <li><a href="https://www.instagram.com/its.kaluh_i/"><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>MVshine Infotech</h3>
                    <p>Transforming businesses through innovative technology solutions.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="Instagram">📷</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#services">Web Development</a></li>
                        <li><a href="#services">Mobile Apps</a></li>
                        <li><a href="#services">E-commerce</a></li>
                        <li><a href="#services">Custom Solutions</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: info@mvshine.com</p>
                    <p>Phone: +91 8650990512</p>
                    <p>Address: Sector 128, Noida</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} MVshine Infotech. All rights reserved.</p>
            </div>
        </footer>
    )
}

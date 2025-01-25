import React from "react";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-icons">
                    <a
                        href="https://www.instagram.com/itsuki_256/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/insta icon.png"
                            alt="Instagram"
                            className="footer-icon"
                        />
                    </a>
                    <a
                        href="https://github.com/Itsuki0016/react-next-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/github icon.webp"
                            alt="GitHub"
                            className="footer-icon"
                        />
                    </a>
                </div>
                <p className="footer-copyright">
                    &copy; {currentYear} Made with ♥ by Itsuki.
                </p>
            </div>
            <button onClick={scrollToTop} className="scroll-top-btn">
                ↑
            </button>
        </footer>
    );
};

export default Footer;

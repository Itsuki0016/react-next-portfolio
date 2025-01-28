"use client";

import React, { useState, useEffect } from "react";
import "@/app/_styles/globals.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest(".menu-icon") && !target.closest(".menu-dropdown")) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("click", closeMenu);
        } else {
            document.removeEventListener("click", closeMenu);
        }

        return () => document.removeEventListener("click", closeMenu);
    }, [menuOpen]);

    return (
        <nav
            className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
            style={{ position: "sticky", width: "100%", zIndex: 100 }}
        >
            <div
                className={`menu-icon ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            {menuOpen && (
                <ul className="menu-dropdown">
                    <li><a href="#about">About</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

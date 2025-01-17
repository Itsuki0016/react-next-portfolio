"use client";

import React, { useEffect } from "react";
import "./Moon.css";

const Moon: React.FC = () => {
    useEffect(() => {
        const starsContainer = document.querySelector(".stars");

        if (starsContainer) {
            for (let i = 0; i < 100; i++) {
                const star = document.createElement("div");
                star.classList.add("star");
                star.style.left = `${Math.random() * 100}vw`;
                star.style.top = `${Math.random() * 100}vh`;
                starsContainer.appendChild(star);
            }
        }
    }, []);

    return (
        <div className="moon-container">
            <div className="moon"></div>
            <div className="stars"></div>
            <div className="shooting-star"></div>
        </div>
    );
};

export default Moon;
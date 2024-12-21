"use client";

import React, { useEffect } from "react";

const NightSky = () => {
    useEffect(() => {
        const starContainer = document.querySelector(".stars");
        for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starContainer?.appendChild(star);
        }

        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";
        document.body.appendChild(shootingStar);
    }, []);

    return <div className="stars"></div>;
};

export default NightSky;

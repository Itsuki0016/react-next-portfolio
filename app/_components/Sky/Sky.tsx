"use client";

import React, { useState } from "react";
import "./Sky.css";
import Sun from "./Sun/Sun";
import Moon from "./Moon/Moon";
import ThemeSwitch from "./Swich/Switch";

const Sky: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.setAttribute("data-theme", isDarkMode ? "light" : "dark");
    };

    return (
        <div className={`sky-container ${isDarkMode ? "dark" : "light"}`}>
            <ThemeSwitch toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            {isDarkMode ? <Moon /> : <Sun />}
        </div>
    );
};

export default Sky;

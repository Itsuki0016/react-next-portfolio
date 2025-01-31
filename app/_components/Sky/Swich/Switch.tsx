import React from "react";
import "./Switch.css";
import { LuSun , LuMoonStar } from "react-icons/lu";

interface ThemeSwitchProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ toggleTheme, isDarkMode }) => {
    return (
        <button 
            onClick={toggleTheme} 
            className="theme-switch-button"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? <LuMoonStar size={40} color="#FEA" /> : <LuSun size={40} color="#FFA" />}
        </button>
    );
};

export default ThemeSwitch;

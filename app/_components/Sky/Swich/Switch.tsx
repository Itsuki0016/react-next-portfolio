import React from "react";
import "./Switch.css";

interface ThemeSwitchProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ toggleTheme, isDarkMode }) => {
    return (
        <div className="theme-switch-container">
            <div
                className={`theme-switch ${isDarkMode ? "dark" : "light"}`}
                onClick={toggleTheme}
            >
                <div className="theme-toggle-circle"></div>
            </div>
        </div>
    );
};

export default ThemeSwitch;

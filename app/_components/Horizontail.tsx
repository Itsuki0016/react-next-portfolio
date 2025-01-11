import React from "react";
import "@/app/_styles/globals.css";

function HorizontalLayout() {
    return (
            <div className="horizontal-scroll-container">
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>Welcome</h1>
            </div>
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>About Me</h1>
            </div>
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>Skills</h1>
            </div>
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>Portfolio</h1>
            </div>
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>Contact</h1>
            </div>
            </div>
        );
    }
    
    export default HorizontalLayout;
    
"use client";

import React from "react";
import "./Sun.css";

const Sun: React.FC = () => {
    return (
        <div className="sun-container">
            <div className="sun"></div>
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>
            <div className="airplane-container">
                <div className="airplane"></div>
                <div className="contrail"></div>
            </div>
        </div>
    );
};

export default Sun;
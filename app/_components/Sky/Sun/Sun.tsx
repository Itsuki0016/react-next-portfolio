"use client";

import React from "react";
import "./Sun.css";

const Sun: React.FC = () => {
    return (
        <div className="sun-container">
            <div className="sun"></div>
            <div className="cloud-1"></div>
            <div className="cloud-2"></div>
            <div className="cloud-3"></div>
        </div>
    );
};

export default Sun;
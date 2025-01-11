"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Intro from "@/app/components/Intro";
import About from "@/app/components/About";
import Portfolio from "@/app/components/Portfolio";
import Contact from "@/app/components/Contact";
import NightSky from "@/app/components/NightSky";
import dynamic from "next/dynamic";
import "@/app/styles/globals.css";


const HomePage = () => {
    return (
        <div>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <NightSky />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", paddingTop: "40vh", color: "white" }}>
            <h1>Welcome to My Portfolio</h1>
            <p>Explore the universe of my work!</p>
        </div>
    </div>
    );
};

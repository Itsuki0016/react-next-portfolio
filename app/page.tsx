'use client';

import React from "react";
import Navbar from "@/app/_components/Navbar";
import Intro from "@/app/_components/Intro";
import About from "@/app/_components/About";
import Portfolio from "@/app/_components/Portfolio";
import Contact from "@/app/_components/Contact";
import Moon from "@/app/_components/Moon/Moon";
import "@/app/_styles/globals.css";


const Page = () => {
    return (
        <div>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <Moon/>
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", paddingTop: "40vh", color: "white" }}>
            <h1>Welcome to My Portfolio</h1>
            <p>Explore the universe of my work!</p>
        </div>
    </div>
    );
};

export default Page;
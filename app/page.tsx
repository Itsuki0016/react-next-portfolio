"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Intro from "@/app/components/Intro";
import About from "@/app/components/About";
import Portfolio from "@/app/components/Portfolio";
import Contact from "@/app/components/Contact";
import "@/app/styles/globals.css";

const HomePage = () => {
    return (
        <div>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
    </div>
    );
};

export default HomePage;

'use client';

import React from "react";
import Navbar from "@/app/_components/Navbar";
import Intro from "@/app/_components/Intro";
import About from "@/app/_components/About";
import Contact from "@/app/_components/Contact/Contact";
import Articles from "@/app/_components/Articles/page";
import Sky from "@/app/_components/Sky/Sky";
import Footer from "@/app/_components/Footer/Footer";
import "@/app/_styles/globals.css";



const Page = () => {
    return (
        <div>
        <Navbar />
        <Intro />
        <About />
        <Articles />
        <Contact />
        <Sky />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", paddingTop: "40vh", color: "white" }}>
            <h1>Welcome to My Portfolio</h1>
            <p>Explore the universe of my work!</p>
        </div>
        <Footer />
    </div>
    );
};

export default Page;
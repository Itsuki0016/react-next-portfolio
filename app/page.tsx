'use client';

import React from "react";
import Navbar from "@/app/_components/Navbar";
import Intro from "@/app/_components/Intro";
import About from "@/app/_components/About";
import Contact from "@/app/_components/Contact/Contact";
import Sky from "@/app/_components/Sky/Sky";
import Footer from "@/app/_components/Footer/Footer";
import "@/app/_styles/globals.css";
import { getArticlesList } from "./_libs/microcmsClient";
import Blogs from "./_components/Blog/Blog";

const Page = () => {
    return getArticlesList().then((data) => {
        if (data.contents.length === 0) {
            return <div>No articles available.</div>;
        }

        const articles = data.contents.map((article) => ({
            id: article.id,
            title: article.title,
            eyecatch: article.eyecatch,
        }));

        return (
            <div>
                <Navbar />
                <Intro />
                <About />
                <Blogs articles={articles} />
                <Contact />
                <Sky />
                <div style={{ position: "relative", zIndex: 2, textAlign: "center", color: "white" }}>
                    <h1>Welcome to My Portfolio</h1>
                    <p>Explore the universe of my work!</p>
                </div>
                <Footer />
            </div>
        );
    }).catch((error) => {
        // エラーハンドリング
        console.error("Error fetching articles:", error);
        return <div>Error loading articles. Please try again later.</div>;
    });
};

export default Page;

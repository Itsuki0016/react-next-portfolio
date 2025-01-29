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

const Page = async () => {
    const data = await getArticlesList()

    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            {data.contents.length === 0 
            ? (
                <div>No articles available.</div>
            ) : (
                <Blogs articles={data.contents.map((article) => (
                    {
                        id: article.id,
                        title: article.title,
                        eyecatch: article.eyecatch,
                    }
                ))} />
            )}
            <Contact />
            <Sky />
            <div style={{ position: "relative", zIndex: 2, textAlign: "center", color: "white" }}>
                <h1>Welcome to My Portfolio</h1>
                <p>Explore the universe of my work!</p>
            </div>
            <Footer />
        </div>
    );
};

export default Page;

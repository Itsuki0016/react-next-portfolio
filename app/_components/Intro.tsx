import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => (
    <section id="home" className="intro">
        <h1>
        Hello, I am{" "}
        <span>
            <Typewriter
            words={["Murata Itsuki", "A Developer", " KTC Student","pen"]}
            loop
            typeSpeed={70}
            deleteSpeed={50}
            />
        </span>
        </h1>
    </section>
);

export default Intro;

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
    return (
    <section id="home" className="intro">
        <div className="intro-content">
        <h1>
            Hello, I am
            <span style={{ color: "#0078ff", fontWeight: "bold" }}>
            <Typewriter
                words={["Your Name", "A Developer", "A Designer"]}
              loop={5} // 回数を指定（0の場合は無限ループ）
              typeSpeed={70} // タイピング速度
              deleteSpeed={50} // 削除速度
              delaySpeed={1000} // 次の単語への遅延時間
            />
            </span>
        </h1>
        <p>
            I build web applications with modern technologies.
        </p>
        <a href="#portfolio" className="btn btn-primary">
            View My Work
        </a>
        </div>
    </section>
    );
};

export default Intro;

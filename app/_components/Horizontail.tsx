import React from "react";
import "@/app/_styles/globals.css";

function HorizontalLayout() {
    return (
            <div className="horizontal-scroll-container">
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>thank you for reading</h1>
            </div>
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>Introduction</h1>
                <p>このポートフォリオを読んでいただきありがとうございます。<br/>
                    私は村田一生と申します。京都デザイン＆テクノロジーの学生です。
                    このポートフォリオでは私のスキルやポートフォリオを紹介しています。
                    <br />どうぞよろしくお願いいたします。
                </p>
            </div>
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>Skills</h1>
                <p>私の扱うことのできる言語は、Python<br/>JavaScript（react,tailwind）<br/>HTML、CSS</p>
            </div>
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>Now</h1>
                <p>現在は一年生の進級制作展We areに向けてクラスメイトと合同でプロジェクトを進めています。</p>
            </div>
            <div className="scroll-section">
                <div className="circuit-bg"></div>
                <h1>Future</h1>
                <p>二年次からはAWSなどの開発に特化した企業プロジェクトに積極的に参加したいです。</p>
            </div>
            </div>
        );
    }
    
export default HorizontalLayout;

"use client";

import React, { useRef, useState, useEffect } from "react";
import "./Horizontail.css"; // CSS を適用

const HorizontalLayout: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const sections = [
        { title: "Thank you for reading", content: "" },
        { title: "Introduction", content: "このポートフォリオを読んでいただきありがとうございます。\n私は村田一生と申します。京都デザイン＆テクノロジーの学生です。\nこのポートフォリオでは私のスキルやポートフォリオを紹介しています。\nどうぞよろしくお願いいたします。" },
        { title: "Skills", content: "私の扱うことのできる言語は、\nPython\nJavaScript（React, Tailwind）\nHTML、CSS" },
        { title: "Now", content: "現在は一年生の進級制作展「We are」に向けて、\nクラスメイトと合同でプロジェクトを進めています。" },
        { title: "Future", content: "二年次からは AWS などの開発に特化した\n企業プロジェクトに積極的に参加したいです。" },
    ];
    

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollLeft = containerRef.current.scrollLeft;
            const newIndex = Math.round(scrollLeft / window.innerWidth);
            if (newIndex !== currentPage) {
                setCurrentPage(newIndex);
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [currentPage]);

    const moveToPage = (index: number) => {
        if (!containerRef.current) return;
        if (index < 0 || index >= sections.length) return;

        containerRef.current.scrollTo({
            left: window.innerWidth * index,
            behavior: "smooth",
        });

        setCurrentPage(index);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const screenWidth = window.innerWidth;
        const clickX = e.clientX;

        if (clickX > screenWidth / 2) {
            // 右半分をクリック → 次のページへ
            if (index < sections.length - 1) moveToPage(index + 1);
        } else {
            // 左半分をクリック → 前のページへ
            if (index > 0) moveToPage(index - 1);
        }
    };

    return (
        <div className="horizontal-layout">
            {/* ページインジケーター（スクロールの影響を受けないよう `horizontal-layout` に配置） */}
            <div className="page-indicator">
                {sections.map((_, index) => (
                    <div 
                        key={index} 
                        className={`dot ${index === currentPage ? "active" : ""}`} 
                        onClick={() => moveToPage(index)}
                    />
                ))}
            </div>

            {/* 横スクロールコンテナ */}
            <div className="horizontal-scroll-container" ref={containerRef}>
                {sections.map((section, index) => (
                    <div 
                        className="scroll-section" 
                        key={index} 
                        onClick={(e) => handleClick(e, index)} // クリックで移動
                    >
                        <div className="circuit-bg"></div> {/* 背景アニメーションを追加 */}
                        <h1>{section.title}</h1>
                        {section.content && <p>{section.content}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HorizontalLayout;

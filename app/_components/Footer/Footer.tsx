"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./Footer.css";
import { useCursorSize } from "@/app/_components/Cursor/CursorBtn"; // Context を取得

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const cursorContext = useCursorSize();
    const [isOpen, setIsOpen] = useState(false);
    const sliderRef = useRef<HTMLDivElement | null>(null); // スライダーの外部クリック判定用

    // `cursorContext` の存在を確認してエラーを回避
    if (!cursorContext) {
        console.error("useCursorSize must be used within a CursorSizeProvider");
        return null; // エラー時に何もレンダリングしない
    }

    const { imageSize, setImageSize } = cursorContext;

    // `setImageSize` が関数であることを確認
    if (typeof setImageSize !== "function") {
        console.error("setImageSize is not a function");
        return null;
    }

    // 🔹 矢印キーでサイズ変更できるようにする
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isOpen) {
                if (e.key === "ArrowUp") {
                    setImageSize((prev: number) => Math.min((prev ?? 50) + 5, 150)); // 最大150px
                } else if (e.key === "ArrowDown") {
                    setImageSize((prev: number) => Math.max((prev ?? 50) - 5, 20)); // 最小20px
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, setImageSize]);

    // 🔹 外部クリックでスライダーを閉じる
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sliderRef.current && !sliderRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-icons">
                    <a
                        href="https://www.instagram.com/itsuki_256/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/insta icon.png"
                            alt="Instagram"
                            className="footer-icon"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a
                        href="https://github.com/Itsuki0016/react-next-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/github icon.webp"
                            alt="GitHub"
                            className="footer-icon"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
                <p className="footer-copyright">
                    &copy; {currentYear} Made with ♥ by Itsuki.
                </p>
            </div>

            {/* スクロールトップボタン */}
            <button onClick={scrollToTop} className="scroll-top-btn">
                ↑
            </button>

            {/* ⚙️ カーソルサイズ調整ボタン */}
            <div className="cursor-size-adjuster" ref={sliderRef}>
                <button
                    className="cursor-size-btn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ⚙️
                </button>

                {/* スライダー (開いたときのみ表示) */}
                {isOpen && (
                    <div className="size-slider">
                        <label className="slider-label">カーソルサイズ</label>
                        <input
                            type="range"
                            min="20"
                            max="150"
                            value={imageSize}
                            onChange={(e) => setImageSize(Number(e.target.value))}
                            className="slider"
                        />
                        <span className="slider-value">{imageSize}px</span>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;

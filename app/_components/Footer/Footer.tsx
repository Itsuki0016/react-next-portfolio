"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import "./Footer.css";
import { LuArrowUpToLine } from "react-icons/lu";
import { useCursorSize } from "@/app/_components/Cursor/CursorBtn"; // Context を取得

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const cursorContext = useCursorSize();
    const [isOpen, setIsOpen] = useState(false);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    // `cursorContext` の存在を確認してエラーを回避
    if (!cursorContext) {
        console.error("useCursorSize must be used within a CursorSizeProvider");
        return null;
    }

    const { imageSize, setImageSize } = cursorContext;

    // `setImageSize` が関数であることを確認
    if (typeof setImageSize !== "function") {
        console.error("setImageSize is not a function");
        return null;
    }

    // 🔹 スライダー以外をクリックしたら閉じる
    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if (sliderRef.current && !sliderRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    return (
        <footer className="footer" onClick={handleClickOutside}>
            <div className="footer-content">
                <div className="footer-icons">
                    <a
                        href=""
                    ></a>
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
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="scroll-top-btn">
                <LuArrowUpToLine size={30} />
            </button>

            {/* ⚙️ カーソルサイズ調整ボタン */}
            <div className="cursor-size-adjuster">
                <button
                    className="cursor-size-btn"
                    onClick={(e) => {
                        e.stopPropagation(); // 他の要素へのイベント伝播を防ぐ
                        setIsOpen(!isOpen);
                    }}
                >
                    <Image
                        src="/itsuki.png"
                        alt="Cursor"
                        width={30}
                        height={30}
                    />↑
                </button>

                {/* スライダー (開いたときのみ表示) */}
                {isOpen && (
                    <div
                        className="size-slider"
                        ref={sliderRef}
                        onClick={(e) => e.stopPropagation()} // スライダー内のクリックは無視
                    >
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

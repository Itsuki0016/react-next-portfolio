"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCursorSize } from "@/app/_components/Cursor/CursorBtn";

const CursorFollower = () => {
    const { imageSize } = useCursorSize();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setVisible(true);
        };

        const hideImage = (e: MouseEvent) => {
            if (!e.relatedTarget || e.relatedTarget === document.documentElement) {
                setVisible(false);
            }
        };

        const hideOnBlur = () => setVisible(false);

        document.addEventListener("mousemove", updatePosition);
        document.addEventListener("mouseout", hideImage); // カーソルがウィンドウ外に出たら消す
        window.addEventListener("blur", hideOnBlur); // 他のアプリに切り替えたら消す

        return () => {
            document.removeEventListener("mousemove", updatePosition);
            document.removeEventListener("mouseout", hideImage);
            window.removeEventListener("blur", hideOnBlur);
        };
    }, []);

    return (
        <div
            className="fixed transition-opacity duration-300 ease-out"
            style={{
                position: "fixed",
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(10px, 10px)",
                opacity: visible ? 1 : 0,
                visibility: visible ? "visible" : "hidden",
                zIndex: 9999, // 他の要素の影響を受けない
                willChange: "transform, opacity",
                pointerEvents: "none",
            }}
        >
            <Image
                src="/itsuki.png"
                alt="Cursor Follower"
                width={imageSize}
                height={imageSize}
                className="opacity-80"
                style={{ pointerEvents: "none" }}
            />
        </div>
    );
};

export default CursorFollower;

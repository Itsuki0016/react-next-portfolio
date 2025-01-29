"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const CursorSizeContext = createContext<{
    imageSize: number;
    setImageSize: (size: number) => void;
} | null>(null);

export const CursorSizeProvider = ({ children }: { children: ReactNode }) => {
    const [imageSize, setImageSize] = useState(50); // 初期サイズ

    return (
        <CursorSizeContext.Provider value={{ imageSize, setImageSize }}>
            {children}
        </CursorSizeContext.Provider>
    );
};

export const useCursorSize = () => {
    const context = useContext(CursorSizeContext);
    if (!context) throw new Error("useCursorSize must be used within a CursorSizeProvider");
    return context;
};

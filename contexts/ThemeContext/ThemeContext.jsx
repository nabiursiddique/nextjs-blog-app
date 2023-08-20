"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(localStorage.getItem('theme') || "light");

    const toggle = () => {
        if (mode === 'dark') {
            setMode('light');

        } else {
            setMode('dark');
        }
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            {children}
        </ThemeContext.Provider>
    )
}
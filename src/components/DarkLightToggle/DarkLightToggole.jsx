"use client"

import React, { useEffect, useState } from 'react';
import { BsSun } from "react-icons/bs";
import { GoMoon } from "react-icons/go";

const DarkLightToggole = () => {
    const [mode, setMode] = useState(localStorage.getItem('theme') || "dark");

    const toggle = () => {
        if (mode === 'dark') {
            setMode('light');

        } else {
            setMode('dark');
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', mode);
        document.querySelector('html').setAttribute('data-theme', mode);
    }, [mode]);

    return (
        <div onClick={toggle}>
            {
                mode === 'dark' ?
                    <div><BsSun /></div>
                    :
                    <div><GoMoon /></div>
            }
        </div>
    );
};

export default DarkLightToggole;
"use client"

import React, { useEffect, useState } from 'react';
import { BsSun } from "react-icons/bs";
import { GoMoon } from "react-icons/go";

const DarkLightToggole = () => {
    // Even if local storage is not available then dark will be in default
    const [mode, setMode] = useState(
        typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark'
    );

    const toggle = () => {
        if (mode === 'dark') {
            setMode('light');

        } else {
            setMode('dark');
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', mode);
        }
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
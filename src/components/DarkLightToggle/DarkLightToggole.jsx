"use client"

import React, { useContext, useEffect } from 'react';
import { BsSun } from "react-icons/bs";
import { GoMoon } from "react-icons/go";
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeContext';

const DarkLightToggole = () => {
    const { toggle, mode } = useContext(ThemeContext);

    useEffect(() => {
        localStorage.setItem('theme', mode);
        document.querySelector('.main-div').setAttribute('data-theme', mode);
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
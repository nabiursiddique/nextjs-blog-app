"use client"
import Link from 'next/link';
import React from 'react';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links.map(link => (
                                    <li key={link.id}><Link href={link.url}>{link.title}</Link></li>
                                ))
                            }
                            <li onClick={() => { console.log('Logged out') }} className='btn btn-sm btn-outline btn-error capitalize'>
                                Logout
                            </li>
                        </ul>
                    </div>
                    <Link className=" text-xl font-bold bg-gradient-to-r from-[#53c28b] to-green-100 text-transparent bg-clip-text lg:mx-5" href='/'>Nabil{`'`}s Blog</Link>
                </div>
                <div className="navbar-end w-full hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            links.map(link => (
                                <li key={link.id}><Link href={link.url}>{link.title}</Link></li>
                            ))
                        }
                        <li className='btn btn-sm btn-outline btn-error capitalize ml-3' onClick={() => { console.log('Logged out') }}>
                            Logout</li>
                    </ul>
                </div>
            </div>
            {/* Customize */}


        </div>
    );
};

export default Navbar;
import Link from 'next/link';
import React from 'react';

const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className="btn bg-[#53c28b] text-white hover:bg-green-600">{text}</button>
        </Link>
    );
};

export default Button;
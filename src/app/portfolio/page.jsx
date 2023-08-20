import Link from 'next/link';
import React from 'react';
import illustration from 'public/images/illustration.png';
import websites from 'public/images/websites.jpg';
import apps from 'public/images/apps.jpg';
import Image from 'next/image';

const items = [
    {
        name: 'Illustrations',
        link: '/portfolio/illustrations',
        image: illustration
    },
    {
        name: 'Websites',
        link: '/portfolio/websites',
        image: websites
    },
    {
        name: 'Applications',
        link: '/portfolio/applications',
        image: apps
    },
]

const Portfolio = () => {
    return (
        <div className='my-5'>
            <h1 className='text-4xl font-bold m-5'>Choose a gallery</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-5 mb-10'>

                {
                    items.map((item, ind) =>
                        <Link key={ind} href={item.link} className='border lg:h-96 h-96 relative  text-[#53c28b] hover:text-blue-500' >
                            <Image className='object-cover h-full' src={item.image} alt='illustration' />
                            <span className='absolute right-3 bottom-3 text-2xl font-bold  bg-slate-800 p-2 rounded'>{item.name}</span>
                        </Link>)
                }
            </div>
        </div >
    );
};

export default Portfolio;
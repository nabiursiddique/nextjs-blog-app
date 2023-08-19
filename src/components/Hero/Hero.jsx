import React from 'react';
import Image from 'next/image'
import heroImage from 'public/hero.png';

const Hero = () => {
    return (
        <div className='lg:mx-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className='lg:w-4/5'>
                        <Image src={heroImage} alt='hero image' />
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold leading-tight bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent lg:w-3/4 w-full">Stay updated with with our blogs</h1>
                        <p className="py-6 lg:w-4/5">Turning your idea to reality. We bring together the teams from the global tech industry.</p>
                        <button className="btn bg-[#53c28b] text-white hover:bg-green-600">See Our Blogs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
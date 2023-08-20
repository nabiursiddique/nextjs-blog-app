import React from 'react';
import Image from 'next/image'
import heroImage from 'public/images/hero.png';
import Button from '../Button/Button';
import './style.css';

const Hero = () => {
    return (
        <div className='lg:mx-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className='lg:w-4/5'>
                        <Image className='animate-image' src={heroImage} alt='hero image' />
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold leading-tight bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent lg:w-3/4 w-full">Stay updated with with our blogs</h1>
                        <p className="py-6 lg:w-4/5">Turning your idea to reality. We bring together the teams from the global tech industry.</p>
                        <Button text="See Our Blogs" url="/blog" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
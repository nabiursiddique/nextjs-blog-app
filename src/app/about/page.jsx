import Image from 'next/image';
import React from 'react';
import employeesImage from 'public/images/employees.jpg'
import Button from '@/components/Button/Button';
import './style.css'

const About = () => {
    return (
        <div className='mb-8'>
            {/* Banner */}
            <div className='relative '>

                <div className='image-overlay'>
                    <Image className='gray-image' src={employeesImage} alt='About banner image' />
                </div>
                <h1 className='centered text-2xl text-center lg:hidden block absolute bg-green-700 text-white px-5 py-2'>About Us</h1>
                <div className='lg:block md:block hidden absolute bottom-12 left-10 bg-green-700 text-white px-5 py-3 '>
                    <h1 className='text-2xl font-bold'>Digital Story Teller</h1>
                    <h2 className='text-xl font-bold'>Handcrafting award winning digital experiences.</h2>
                </div>



            </div>

            {/* Below banner content */}
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-12 gap-7 mx-5 mt-10'>
                <div>
                    <h1 className='text-2xl font-bold mb-3'>Who Are We?</h1>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br />
                        <br />
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div >
                    <h1 className='text-2xl font-bold mb-3'>What We Do?</h1>
                    <p className='mb-5 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button text="Contact Us" url="/contact" />
                </div>
            </div>
        </div>
    );
};

export default About;
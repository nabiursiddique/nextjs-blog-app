import Image from 'next/image';
import React from 'react';
import contactImage from 'public/images/contact.png';
import './style.css'

const Contact = () => {
    return (
        <div className='lg:mx-10 my-10'>
            <h1 className='text-5xl text-center font-bold mx-5 mb-5'>Let{`'`}s Keep In Touch</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className='w-full lg:block md:block hidden'>
                        <Image className='lg:w-4/5 animate-image' src={contactImage} alt='hero image' />
                    </div>
                    <div className='w-full shadow-2xl'>
                        <div className="card flex-shrink-0 w-full">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className='bg-base-100 border border-gray-700 p-3' name="message" id="" placeholder='message' rows={"5"} cols={"10"}></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#53c28b] text-white hover:bg-green-600">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
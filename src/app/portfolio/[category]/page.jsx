import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';

const Category = ({ params }) => {
    return (
        <div className='m-5'>
            <h1 className='text-2xl capitalize font-bold text-[#53c28b]'>{params.category}</h1>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mb-8'>
                <div className='my-auto'>
                    <h1 className='text-4xl font-bold mb-4'>Creative Portfolio</h1>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis provident dolorem perferendis, ipsum laboriosam voluptatem repellat obcaecati a! Dolores.</p>
                    <Button text="See More" url='#' />
                </div>
                <div className='h-96 relative'>
                    <Image
                        className='object-cover'
                        src={"https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg"} alt='art Image' fill />
                </div>
            </div>
        </div>
    );
};

export default Category;
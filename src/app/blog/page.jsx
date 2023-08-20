import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div className='my-5'>
            <h1 className='text-5xl font-bold text-[#53c28b] text-center mb-8 uppercase'>Blogs</h1>

            <Link href={'/blog/1'} className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mb-8 mx-5'>
                <div className='flex lg:justify-end justify-start'>
                    <Image
                        className='object-cover' src={"https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='art Image' width={400} height={250} />
                </div>
                <div className='my-auto'>
                    <h1 className='text-4xl font-bold mb-4'>Creative Portfolio</h1>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis provident dolorem perferendis, ipsum laboriosam voluptatem repellat obcaecati a! Dolores.</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;
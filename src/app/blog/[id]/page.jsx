import Image from 'next/image';
import React from 'react';

const BlogPost = ({ params }) => {
    return (
        <div className='m-5'>
            <h1 className='text-2xl capitalize font-bold text-[#53c28b]'>{params.category}</h1>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mb-3'>
                <div className='my-auto'>
                    <h1 className='text-4xl font-bold mb-4'>Creative Portfolio</h1>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis provident dolorem perferendis, ipsum laboriosam voluptatem repellat obcaecati a! Dolores.</p>
                </div>
                <div className='h-60 relative'>
                    <Image
                        className='object-cover rounded-lg'
                        src={"https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='art Image' fill />
                </div>
            </div>
            <div className='my-8'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam officiis obcaecati blanditiis, corrupti quae deserunt praesentium quos sed amet nisi eaque quas natus? Provident harum ratione dolorum explicabo dolores, repellat dignissimos magni ipsa fuga corrupti, unde dolorem facilis eveniet nam rerum quis ut excepturi quod obcaecati amet necessitatibus perspiciatis quo!</p>
            </div>
        </div>
    );
};

export default BlogPost;
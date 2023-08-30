import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        return notFound();
    }
    return res.json()
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id)
    return {
        title: `Nabil Blog || ${post.title}`,
        description: post.description
    }
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <div className='m-5'>
            <h1 className='text-2xl capitalize font-bold text-[#53c28b]'>{params.category}</h1>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mb-3'>
                <div className='my-auto'>
                    <h1 className='text-4xl font-bold mb-4'>{data.title}</h1>
                    <p className='mb-5'>{data.body}</p>
                </div>
                <div className='h-60 relative'>
                    <Image
                        className='object-cover rounded-lg'
                        src={"https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='art Image' fill />
                </div>
                <div><span className='text-xl font-bold'>Username:</span>{data.username}</div>
            </div>
            <div className='my-8'>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;
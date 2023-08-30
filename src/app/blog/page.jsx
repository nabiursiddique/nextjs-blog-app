import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const Blog = async () => {
    const data = await getData();

    return (
        <div className='my-5'>
            <h1 className='text-5xl font-bold text-[#53c28b] text-center mb-8 uppercase'>Blogs</h1>

            {
                data.map(item => (
                    <Link key={item.id} href={'/blog/1'} className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mb-8 w-4/5 mx-auto'>
                        <div>
                            <Image
                                className='object-cover' src={"https://images.pexels.com/photos/3817676/pexels-photo-3817676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='art Image' width={400} height={250} />
                        </div>
                        <div className='my-auto'>
                            <h1 className='text-4xl font-bold mb-4'>{item.title}</h1>
                            <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis provident dolorem perferendis, ipsum laboriosam voluptatem repellat obcaecati a! Dolores.</p>
                        </div>
                    </Link>
                ))
            }

        </div>
    );
};

export default Blog;
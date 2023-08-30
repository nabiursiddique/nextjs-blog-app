import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import { items } from './data'
import { notFound } from 'next/navigation';

const getData = (cat) => {
    const data = items[cat];
    if (data) {
        return data;
    }
    return notFound();
}

const Category = ({ params }) => {
    const data = getData(params.category)
    return (
        <div className='m-5'>
            <h1 className='text-2xl capitalize font-bold text-[#53c28b]'>{params.category}</h1>

            {
                data.map(item => (
                    <div key={item.id} className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mb-8'>
                        <div className='my-auto'>
                            <h1 className='text-4xl font-bold mb-4'>{item.title}</h1>
                            <p className='mb-5'>{item.desc}</p>
                            <Button text="See More" url='#' />
                        </div>
                        <div className='h-96 relative'>
                            <Image
                                className='object-cover'
                                src={item.image} alt='art Image' fill />
                        </div>
                    </div>
                ))
            }


        </div>
    );
};

export default Category;
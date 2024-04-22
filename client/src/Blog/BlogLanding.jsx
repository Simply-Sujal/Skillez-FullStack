import React from 'react';

const BlogLanding = () => {
    return (
        <div className='relative h-[500px] pt-20 duration-300'>
            <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                <div className='max-w-[1290px] mx-auto flex justify-center items-center h-full flex-col'>
                    <h1 className='text-center text-4xl md:text-7xl text-blue-600 font-monts font-bold'>Coding Articles </h1>
                    <p className='text-center text-[20px] md:text-2xl text-blue-600 font-monts pt-2 font-medium'>We help you learn new things every single day.</p>
                </div>
            </div>
        </div>
    );
};

export default BlogLanding;

// MainReadingPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../public/blogdata.js';
import { GoBook } from "react-icons/go";


const MainReadingPage = () => {
    const { topic } = useParams(); // Assuming you're using react-router-dom's useParams hook

    // Finding the blog post with the matching topic from the URL params
    const selectedBlog = blogData.find(blog => blog.topic.replace(/\s+/g, "-") === topic);

    if (!selectedBlog) {
        return <div>Blog post not found!</div>;
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-2 md:p-8 dark:bg-slate-900 bg-[#EEF5FF] pt-20 md:pt-28">
                <div className='max-w-[1080px] mx-auto dark:bg-[#1f2937] bg-[#ffffff] p-4 md:p-10 shadow-md rounded-md'>
                    <h2 className="text-[20px] md:text-4xl font-medium md:font-bold mb-2 text-center dark:text-white text-slate-900">{selectedBlog.topic}</h2>
                    <div className='flex flex-col md:flex-row  justify-center items-center gap-3 pt-3 text-center'>
                        <div className='flex items-center gap-2 md:flex-row'>
                            <img src={selectedBlog.thumbnailImageOfUser} alt="thumbnail image" className='h-10 w-10 rounded-full' />
                            <p className="text-sm text-black dark:text-gray-100 font-medium font-monts">{selectedBlog.writtenBy}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-monts">{selectedBlog.createdAt}</p>
                            <div className='flex justify-center items-center gap-2 text-gray-400'>
                                · <GoBook className='text-gray-400 text-[18px]' />
                                <p className="text-sm text-gray-600 dark:text-gray-400 font-monts">
                                    {selectedBlog.read}</p>
                            </div>

                        </div>
                    </div>
                    <img src={selectedBlog.topicImage} alt='topic image' className='w-full h-[400px] pt-3' />
                    <h1 className='text-[17px] md:text-[20px] text-gray-900 dark:text-gray-300 pt-2 text-karla font-normal'>{selectedBlog.smallDescription}</h1>
                    <h1
                        className='text-[17px] md:text-[20px] text-gray-900 dark:text-gray-300 pt-2 text-karla font-normal'
                        dangerouslySetInnerHTML={{ __html: selectedBlog.fullDescription }}
                    ></h1>
                </div>
            </div>
        </div>
    );
}

export default MainReadingPage;

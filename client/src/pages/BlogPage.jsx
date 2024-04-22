import React from 'react';
import BlogLanding from '../Blog/BlogLanding.jsx';
import AllArticlesPresent from '../Blog/AllArticlesPresent.jsx';
import Footer from '../components/Footer.jsx'

const BlogPage = () => {
    return (
        <>
            <BlogLanding />
            <AllArticlesPresent />
            <Footer />
        </>
    );
};

export default BlogPage;

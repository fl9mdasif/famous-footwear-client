import React from 'react';
import { useQuery } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Blog from './Blog';

const Blogs = () => {

    const { isLoading, error, data: blogs, refetch } = useQuery(['blogData'], () =>
        fetch('http://localhost:5000/blogs').then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message
    // console.log(blogs)
    return (
        <section class="text-gray-600 body-font">
            <div className="py-3 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">BLOG{blogs.length}</div>

            <div class="container px-5 py-2 mx-auto">
                <div class="flex flex-wrap -m-4 ">
                    {blogs.map(blog => <Blog key={blog._id} refetch={refetch} blog={blog} />)}
                </div>
            </div>
        </section>


    )
};
export default Blogs;
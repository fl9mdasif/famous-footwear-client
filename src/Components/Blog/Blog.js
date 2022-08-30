import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.Styles.css'
const Blog = () => {

    const navigate = useNavigate();
    const navigateBlogDetails = (id) => {
        navigate(`/blogDetails/${id}`)
    }

    const { isLoading, error, data: blogs } = useQuery(['blogData'], () =>
        fetch('http://localhost:5000/blogs').then(res =>
            res.json())
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    console.log(blogs)

    return (
        <section class="text-gray-600 body-font">
            <div className="py-3 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">BLOG{blogs.length}</div>

            <div class="container px-5 py-2 mx-auto">
                <div class="flex flex-wrap -m-4 ">
                    {
                        blogs.map(blog =>
                            <>
                                <div class="p-4 md:w-1/3">
                                    <div class="h-full border-2 border-base border-opacity-60 rounded-lg overflow-hidden">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.blog_image} alt="blog" />
                                        <div class="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.category}</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{blog.blog_title}</h1>
                                            <p class="descriptions leading-relaxed mb-3">{blog.blog_description}</p>


                                            <div class="flex items-center flex-wrap ">

                                                <button onClick={() => navigateBlogDetails(blog._id)} class=" btn-sm font-semibold  rounded-md ">Learn more
                                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-base">
                                                    <svg class="w-4 h-4 mr-1 text-red" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1200
                                                </span>
                                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;
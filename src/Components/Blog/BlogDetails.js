import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';


const BlogDetails = () => {

    // const navigate = useNavigate()
    const { blogID } = useParams();
    const { isLoading, error, data: blogs } = useQuery(['shoeData'], () =>
        fetch(`http://localhost:5000/blogs/${blogID}`).then(res =>
            res.json())
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    // console.log(products)
    const { blog_description, blog_title, blog_image, category } = blogs;



    return (
        <>
            <div className="py-3 font-bold text-center text-base1 sm:text-2xl md:text-4xl lg:text-5xl">BLOG DETAIlS</div>

            <div className="blogContainer my-4 flex flex-col justify-center">
                <div className="blogImgDiv flex justify-center">
                    <img className="blogImg" src={blog_image} alt='/' />
                </div>
                <p className="pt-8">{category}</p>

                <div class="flex items-center justify-between pb-8 flex-wrap ">
                    <div class=" flex justify-center">
                        <h1 class=" font-bold text-base1 
                        sm:text-2xl 
                        md:text-4xl 
                        lg:-5xl rounded-md ">{blog_title}</h1>
                    </div>

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

                <div className=" pt-"><p >{blog_description}</p></div>
            </div >
        </>
    );
};

export default BlogDetails;
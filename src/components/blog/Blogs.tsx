import React from 'react';
import { roomData } from '../../seaction/Page';

const Blogs = () => {
  const { blogleft, rightBlog } = roomData;

  return (
    <div className="sec_padding">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Left Blog Section */}
          <div className="w-full lg:w-3/4">
            {blogleft.map((blog, index) => (
              <div key={index} className="mb-8">
                <img src={blog.img} alt={blog.title} className="w-full h-auto rounded-lg mb-4" />
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                  {blog.submenu.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
                <h2 className="text-[30px] leading-10 font-medium text-black mt-3 ">{blog.title}</h2>
                <p className=" text-[15px] font-normal	leading-[22.5px] text-[#9F9F9F] mt-3">{blog.subtitle}</p>
                <button className=" text-[16px] leading-6 font-normal	text-black	 border-b border-black mt-4">
                  {blog.btn}
                </button>
              </div>
            ))}
          </div>

          {/* Right Blog Section */}
          <div className="w-full lg:w-1/4">
            <div className="mb-8">
              <div className="flex items-center border px-4 py-2 mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2   rounded-lg w-full outline-none"
                />
                {rightBlog.serachIcon}

              </div>

              <h3 className="text-[24px] leading-9 font-medium	text-black  mt-12">{rightBlog.Categories.title}</h3>
              <ul className="mb-8 text-[16px] font-normal	leading-6 text-[#9F9F9F] mt-8  space-y-5">
                {rightBlog.Categories.catagorislist.map((category, idx) => (
                  <li key={idx} className="flex justify-between ">
                    <span>{category.subtitle}</span>
                    <span>({category.number})</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-[24px] leading-9 font-medium	text-black mt-12">{rightBlog.reacntPost.title}</h3>
              <ul className="space-y-6 mt-12">
                {rightBlog.reacntPost.blogpost.map((post, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <img src={post.image} alt={post.title} className="w-16 h-16 rounded-lg" />
                    <div>
                      <h4 className="text-[14px] leading-5 font-normal	text-black ">{post.title}</h4>
                      <span className="text-[12px] font-normal leading-4 text-[#9F9F9F]">{post.subtitle}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

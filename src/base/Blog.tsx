import React from 'react'
import Blogs from '../components/blog/Blogs'
import Banner from '../components/Banner'
import {roomData} from '.././seaction/Page'

const Blog = () => {
  const {blog} = roomData
  return (
    <div>
      <Banner
       img={blog.img}
       title={blog.title}
       subtitle={blog.subtitle}
       subtitle1={blog.subtitle1}
      />
      <Blogs/>
    </div>
  )
}

export default Blog

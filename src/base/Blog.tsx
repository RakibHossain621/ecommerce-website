import React from 'react'
import Blogs from '../components/blog/Blogs'
import Banner from '../components/Banner'
import {roomData} from '.././seaction/Page'
import PagenitionButton from '../components/shop/PagenitionButton'
import Support from '../components/shop/Support'

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
      <PagenitionButton
      pagentionClass = 'mb-[6em]'
      />
      <Support/>
    </div>
  )
}

export default Blog

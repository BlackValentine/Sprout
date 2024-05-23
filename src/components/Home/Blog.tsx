import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import { getAllBlog } from 'config/axios/blogApi';

export default function Blog() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllBlog({
        take: 10,
        page: 1,
      });
      setBlogs(response.data);
    })();
  }, []);

  return (
    <div className="px-10 py-20 bg-timberwolf">
      <h6 className="text-[20px] text-gray2">Our Blog</h6>
      <div className="flex items-center justify-between mb-20">
        <h2 className="text-[60px] font-forum text-gray2">Your Guide to Plant Care</h2>
        <button className="px-10 py-3 bg-orange hover:bg-primary ease-in duration-300 rounded">Read More</button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {blogs.map((blogItem, index) => {
          return (
            <BlogItem
              key={index}
              id={blogItem.id}
              image={blogItem.thumbnail}
              created_at={blogItem.created_at}
              author={blogItem.author}
              title={blogItem.title}
              description={blogItem.description}
              view={blogItem.views}
              comment={blogItem.views}
              like={blogItem.like}
            />
          );
        })}
      </div>
    </div>
  );
}

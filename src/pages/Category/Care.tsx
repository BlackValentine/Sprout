import React, { useEffect, useState } from 'react';
import BlogItem from '../../components/Home/BlogItem';
import { getAllBlog } from 'config/axios/blogApi';

export default function Care() {
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
    <>
      <h1 className="text-[90px] font-forum text-center my-10">Your Guide to Plant Care</h1>
      <div className="bg-timberwolf p-16 mx-10">
        <div className="grid grid-cols-2 gap-x-10 gap-y-20">
          {blogs?.map((blogItem, index) => {
            return (
              <BlogItem
                key={index}
                id={blogItem.id}
                image={blogItem.thumbnail}
                created_at={blogItem.created_at}
                author={blogItem.author}
                title={blogItem.title}
                description={blogItem.subTitle}
                view={blogItem.views}
                comment={blogItem.comment}
                like={blogItem.like}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

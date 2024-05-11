import React from 'react';
import Blog1 from '../../assets/images/blog1.webp';
import Blog2 from '../../assets/images/blog2.webp';
import Blog3 from '../../assets/images/blog3.webp';
import BlogItem from './BlogItem';

export default function Blog() {
  const blogList = [
    {
      image: Blog1,
      createdAt: 'Jan 5, 2023',
      author: 'Black Valentine',
      title: 'How to Report Plants',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...',
      view: 9,
      comment: 0,
      like: 20,
    },
    {
      image: Blog2,
      createdAt: 'Jan 5, 2023',
      author: 'Black Valentine',
      title: 'How to Treat Leaf Spots',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...',
      view: 11,
      comment: 0,
      like: 1,
    },
    {
      image: Blog3,
      createdAt: 'Jan 5, 2023',
      author: 'Black Valentine',
      title: 'Keep Them Alive Through the Seasons',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...',
      view: 2,
      comment: 0,
      like: 1,
    },
  ];

  return (
    <div className="px-10 py-20 bg-timberwolf">
      <h6 className="text-[20px] text-gray2">Our Blog</h6>
      <div className="flex items-center justify-between mb-20">
        <h2 className="text-[60px] font-forum text-gray2">Your Guide to Plant Care</h2>
        <button className="px-10 py-3 bg-orange hover:bg-primary ease-in duration-300 rounded">Read More</button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {blogList.map((blogItem, index) => {
          return (
            <BlogItem
              key={index}
              image={blogItem.image}
              createdAt={blogItem.createdAt}
              author={blogItem.author}
              title={blogItem.title}
              description={blogItem.description}
              view={blogItem.view}
              comment={blogItem.view}
              like={blogItem.like}
            />
          );
        })}
      </div>
    </div>
  );
}

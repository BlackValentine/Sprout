import React from 'react';
import Footer from 'components/General/Footer';
import Header from 'components/General/Header';
import Blog1 from '../../assets/images/blog1.webp';
import Blog2 from '../../assets/images/blog2.webp';
import Blog3 from '../../assets/images/blog3.webp';
import BlogItem from '../../components/Home/BlogItem';

export default function Care() {
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
    <div className="bg-black">
      <Header />
      <>
        <h1 className="text-[90px] font-forum text-center my-10">Your Guide to Plant Care</h1>
        <div className="bg-timberwolf p-16 mx-10">
          <div className="grid grid-cols-2 gap-x-10 gap-y-20">
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
      </>
      <Footer />
    </div>
  );
}

import React from 'react';

export default function Story() {
  return (
    <div className="h-screen story-banner flex flex-col items-center justify-center text-center">
      <h2 className="text-[90px] font-normal font-forum">From Seed to Sprout</h2>
      <p className="text-2xl max-w-[600px] mb-6">
        I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click
        me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your
        users know a little more about you.
      </p>
      <button className="w-[140px] h-[55px] flex border border-white border-solid rounded bg-transparent hover:bg-secondary hover:border-none ease-in duration-300">
        <span className="m-auto text-lg">Our story</span>
      </button>
    </div>
  );
}

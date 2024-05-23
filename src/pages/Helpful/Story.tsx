import Header from 'components/General/Header';
import React from 'react';
import './index.scss';
import Story1 from '../../assets/images/story1.webp';
import Story2 from '../../assets/images/story2.webp';

export default function Story() {
  return (
    <div className="bg-black">
      <div className="overflow-hidden">
        <div className="story-banner h-screen">
          <Header />
          <div className="max-w-[800px] flex flex-col items-center text-center mx-auto">
            <h1 className="text-[90px] font-forum">All About Sprout</h1>
            <p className="text-lg mb-10">
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
              click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you
              like on your page. I’m a great place for you to tell a story and let your users know a little more about
              you.
            </p>
            <p className="text-lg mb-10">
              This is a great space to write a long text about your company and your services. You can use this space to
              go into a little more detail about your company. Talk about your team and what services you provide. Tell
              your visitors the story of how you came up with the idea for your business and what makes you different
              from your competitors. Make your company stand out and show your visitors who you are.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-timberwolf">
        <img src={Story1} alt="story" className="h-full object-cover" />
        <div className="text-gray2 py-48 mx-auto">
          <h3 className="text-4xl font-forum max-w-[250px] mb-4">Connecting People to Plants</h3>
          <p className="text-lg max-w-[400px]">
            I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
            click me to add your own content and make changes to the font. I’m a great place for you to tell a story and
            let your users know a little more about you.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-story border border-solid m-10 border-white">
        <div className="p-20">
          <h3 className="text-4xl font-forum mb-5">This Is Us</h3>
          <p className="mb-5">
            I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
            click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you
            like on your page. I’m a great place for you to tell a story and let your users know a little more about
            you.
          </p>
          <p>
            This is a great space to write a long text about your company and your services. You can use this space to
            go into a little more detail about your company. Talk about your team and what services you provide. Tell
            your visitors the story of how you came up with the idea for your business and what makes you different from
            your competitors. Make your company stand out and show your visitors who you are.
          </p>
        </div>
        <img src={Story2} alt="story" className="h-full object-cover" />
      </div>
    </div>
  );
}

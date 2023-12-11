import React from 'react';
import './index.scss';

export default function Category() {
  return (
    <div className="bg-black text-center pt-16">
      <h3 className="text-[34px] font-forum">Shop by Category</h3>
      <h2 className="text-[120px] mb-10 font-forum">Discover Sprout</h2>
      <div className="grid grid-cols-category gap-2">
        <div className="group relative w-full pt-[60%] cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-category-1 group-hover:scale-110 ease-linear duration-500"></div>
          <div className="absolute inset-0 flex bg-black opacity-50 group-hover:invisible">
            <span className="m-auto text-3xl font-forum">Plants</span>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="group relative w-full h-full cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-category-2 cursor-pointer group-hover:scale-110 ease-linear duration-500"></div>
            <div className="absolute inset-0 flex bg-black opacity-50 group-hover:invisible">
              <span className="m-auto text-3xl font-forum">Pots</span>
            </div>
          </div>
          <div className="group relative w-full h-full cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-category-3 cursor-pointer group-hover:scale-110 ease-linear duration-500"></div>
            <div className="absolute inset-0 flex bg-black opacity-50 group-hover:invisible">
              <span className="m-auto text-3xl font-forum">Subscriptions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

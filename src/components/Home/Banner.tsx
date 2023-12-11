import Header from 'components/General/Header';
import React from 'react';

export default function Banner() {
  return (
    <div className="overflow-hidden">
      <div className="home-banner h-screen">
        <Header />
        <div className="max-w-[1000px] flex flex-col items-center text-center mx-auto">
          <h1 className="text-[90px]">Is There Such a Thing as Too Many Plants?</h1>
          <p className="text-xl mb-10">Discover the latest addition to your growing plant collection</p>
          <button className="w-[140px] h-[55px] flex border border-white border-solid rounded bg-transparent hover:bg-secondary ease-in duration-300">
            <span className="m-auto text-lg">Shop Plants</span>
          </button>
        </div>
      </div>
    </div>
  );
}

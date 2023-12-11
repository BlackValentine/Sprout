import React from 'react';
import Banner3 from '../../assets/images/banner3.webp';
// import logo2 from '../../assets/svg/logo2.svg';
import logo3 from '../../assets/svg/logo3.svg';

export default function SubscriptionBoxes() {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="w-full h-screen">
        <img className="w-full h-full object-fit" src={Banner3} alt="banner3" />
      </div>
      <div className="bg-orange py-20 px-32">
        <h3 className="text-[40px] font-forum">Shop Our Plant Subscription Boxes</h3>
        <p className="mt-4 text-lg">and look forward to a new plant every month</p>
        <div className="flex items-center gap-3 my-8">
          <img src={logo3} alt="logo2" className="w-20 border border-white border-solid py-10 px-3 rounded-full" />
          <span className="max-w-[120px] text-xl">Cactus Lover Subsciption</span>
        </div>
        <div className="flex items-center gap-3 mb-12">
          <img src={logo3} alt="logo2" className="w-20 border border-white border-solid py-10 px-3 rounded-full" />
          <span className="max-w-[120px] text-xl">Exotic Plants Subscription</span>
        </div>
        <button className="px-6 h-[55px] flex border border-white border-solid rounded bg-transparent hover:bg-secondary hover:border-none ease-in duration-300">
          <span className="m-auto text-lg">Subscription Boxes</span>
        </button>
      </div>
    </div>
  );
}

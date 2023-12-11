import Footer from 'components/General/Footer';
import Header from 'components/General/Header';
import Select from 'components/General/Select';
import React from 'react';
import Banner from '../../assets/images/contact-banner.webp';

export default function Contact() {
  return (
    <div className="bg-black">
      <Header />
      <div className="mb-10">
        <h1 className="text-[90px] font-forum text-center my-10">How to Reach Out</h1>
        <div className="grid grid-cols-2 mx-10 border border-solid border-white">
          <div className="py-20 max-w-[400px] mx-auto">
            <h3 className="text-4xl font-forum">Plant care questions?</h3>
            <h3 className="text-4xl font-forum mb-10">
              Order issues? There are a few ways you can get in touch with us.
            </h3>
            <p>Address: 500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>Phone: 123-456-7890</p>
            <p className="mb-10">Email: info@mysite.com</p>
            <p>Mon - Fri: 7am - 10pm</p>
            <p>Saturday: 8am - 10pm</p>
            <p className="mb-10">Sunday: 8am - 11pm</p>
            <p className="text-xl">Chat With Us!</p>
            <p className="text-xl">Press the button on the bottom right.</p>
          </div>
          <img src={Banner} alt="banner" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="bg-primary py-10 px-48">
        <h3 className="text-center text-3xl font-forum">Alternatively, You Can Reach Us by Filling</h3>
        <h3 className="text-center text-3xl font-forum mb-10">Out the Contact Form Below.</h3>
        <div className="flex items-center gap-3 mb-3">
          <Select title={'First Name'} required />
          <Select title={'Last Name'} required />
          <Select title={'Phone'} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <Select title={'Email'} required />
          <Select title={'Address'} />
        </div>
        <div className="flex flex-col gap-2">
          <span>Message *</span>
          <textarea
            rows={6}
            className="w-full p-3 border border-solid border-white rounded bg-secondary outline-none resize-none h-30"
          />
        </div>
        <button className="bg-black border-transparent text-white rounded w-[140px] h-12 mt-7 mb-10 hover:bg-transparent hover:text-black hover:border hover:border-black hover:border-solid ease-linear duration-300">
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}

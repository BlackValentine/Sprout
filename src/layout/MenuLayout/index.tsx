import Cart from 'components/Cart/Cart';
import Footer from 'components/General/Footer';
import Header from 'components/General/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function InnerContent() {
  return (
    <>
      <div className="min-h-full">
        <div className="bg-black">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <Cart />
      </div>
    </>
  );
}

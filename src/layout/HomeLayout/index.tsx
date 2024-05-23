import Cart from 'components/Cart/Cart';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <>
      <div className="min-h-full">
        <div>
          <Outlet />
        </div>
        <Cart />
      </div>
    </>
  );
}

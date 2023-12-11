import React from 'react';
import { Outlet } from 'react-router-dom';

export default function InnerContent() {
  return (
    <>
      <div className="min-h-full">
        <Outlet />
      </div>
    </>
  );
}

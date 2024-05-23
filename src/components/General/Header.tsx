import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from '../../assets/svg/account.svg';
import Search from '../../assets/svg/search.svg';
import Logo from './Logo';
import { useCartStore } from 'store/cart-store';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function Header() {
  const navigate = useNavigate();
  const { setIsOpen } = useCartStore();
  const [showFirstBanner, setShowFirstBanner] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstBanner(!showFirstBanner);
    }, 10000);
    return () => clearInterval(interval);
  }, [showFirstBanner]);

  return (
    <>
      <div className={`${showFirstBanner ? 'hidden' : 'block'} bg-orange flex h-14 ease-in duration-500`}>
        <p className="m-auto">Free shipping on orders over $75</p>
      </div>
      <div className={`${showFirstBanner ? 'block' : 'hidden'} bg-primary flex h-14 ease-in duration-500`}>
        <div className="flex items-center gap-2 mx-auto">
          <p>Get 15% off your first purchase</p>
          <button className="px-2 py-1 border border-white border-solid rounded bg-transparent hover:bg-secondary hover:border-none ease-in duration-300">
            Sign Up
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 mx-10 pt-5">
        <div className="flex">
          <div className="flex my-auto">
            <button
              onClick={() => navigate('/sprout/category', { state: 'plants' })}
              className="py-2 px-4 bg-secondary hover:bg-orange rounded-tl rounded-bl"
            >
              Plants
            </button>
            <button
              onClick={() => navigate('/sprout/category', { state: 'pots' })}
              className="py-2 px-4 bg-secondary hover:bg-orange"
            >
              Pots
            </button>
            <button
              onClick={() => navigate('/sprout/category', { state: 'sale' })}
              className="py-2 px-4 bg-secondary hover:bg-orange"
            >
              Sale
            </button>
            <button
              onClick={() => navigate('/sprout/category', { state: 'subscriptions' })}
              className="py-2 px-4 bg-secondary hover:bg-orange"
            >
              Subscriptions
            </button>
            <button
              onClick={() => navigate('/sprout/care')}
              className="py-2 px-4 bg-secondary hover:bg-orange rounded-tr rounded-br"
            >
              Care
            </button>
          </div>
        </div>
        <Logo />
        <div className="flex items-center justify-end gap-3">
          <div className="flex items-center gap-2 p-2 bg-secondary rounded cursor-pointer">
            <img src={Account} alt="account" className="w-6" />
            <span>Log In</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-secondary rounded pr-20 hover:bg-black">
            <img src={Search} alt="account" className="w-4" />
            <span>Search</span>
          </div>
          <ShoppingCartOutlined onClick={setIsOpen} className="cursor-pointer" style={{ fontSize: 24 }} />
        </div>
      </div>
    </>
  );
}

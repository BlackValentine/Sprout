import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/svg/logo.svg';

export default function Logo() {
  return (
    <div className="relative flex flex-col items-center">
      <Link to="/">
        <div className="relative flex flex-col items-center">
          <img src={LogoIcon} alt="logo" className="w-20" />
          <span className="absolute top-11 left-[34px] text-xl font-bold">S</span>
          <p className="text-2xl font-forum">Sprout</p>
        </div>
      </Link>
    </div>
  );
}

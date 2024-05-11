import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface IProductItemProps {
  id: number;
  image: any;
  hoverImage: any;
  name: string;
  price: string | number;
  isSale?: boolean;
  isNewArrival?: boolean;
  salePercentage?: number;
}

export default function ProductItem({
  id,
  image,
  hoverImage,
  name,
  price,
  isSale,
  isNewArrival,
  salePercentage,
}: IProductItemProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const renderPrice = () => {
    if (isSale && salePercentage) {
      return (
        <div className="flex items-center gap-2">
          <span className="text-xl line-through">${(+price / 100).toFixed(2)}</span>
          <span className="text-xl">${((+price * (1 - salePercentage / 100)) / 100).toFixed(2)}</span>
        </div>
      );
    } else {
      return <span className="text-xl">${(+price / 100).toFixed(2)}</span>;
    }
  };

  return (
    <div className="flex flex-col">
      <Link to={`/product/${id}`}>
        <div className="relative">
          <img
            className="w-full aspect-[1/1.3] object-cover rounded-lg cursor-pointer"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            src={isHovered ? hoverImage : image}
            alt="product"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            {isSale && <div className="bg-primary rounded px-3 text-white">Sale</div>}
            {isNewArrival && <div className="bg-primary rounded px-3 text-white">New Arrival</div>}
          </div>
        </div>
      </Link>
      <div className="flex flex-col mt-4 px-4">
        <Link to={`/product/${id}`}>
          <div className="font-forum text-[28px] font-normal">
            <span className="cursor-pointer hover:text-primary">{name}</span>
          </div>
        </Link>
        {renderPrice()}
        <button className="w-full px-4 py-2 border border-primary border-solid mt-6 rounded hover:bg-white hover:text-black transition ease-out duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

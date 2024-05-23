import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from 'store/cart-store';

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
  const { setIsOpen } = useCartStore();
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

  const handleAddItemToCart = (item: any) => {
    if (localStorage.getItem('cart')) {
      let cart = JSON.parse(localStorage.getItem('cart') as string);

      let indexItemExist = -1;
      cart.forEach((cartItem: any, index: number) => {
        if (cartItem.id === item.id) {
          indexItemExist = index;
        } else {
          indexItemExist = -1;
        }
      });

      if (indexItemExist === -1) {
        cart = [
          ...cart,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
          },
        ];
      } else {
        cart[indexItemExist].quantity = +cart[indexItemExist].quantity + 1;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.setItem(
        'cart',
        JSON.stringify([
          {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1,
          },
        ])
      );
    }
    setIsOpen();
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
        <button
          className="w-full px-4 py-2 border border-primary border-solid mt-6 rounded hover:bg-white hover:text-black transition ease-out duration-200"
          onClick={() =>
            handleAddItemToCart({
              id,
              image,
              name,
              price: isSale && salePercentage ? ((+price / 100) * (1 - salePercentage / 100)).toFixed(2) : +price / 100,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

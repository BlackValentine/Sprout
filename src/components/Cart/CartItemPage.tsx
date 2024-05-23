import React from 'react';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

interface ICartItemPageProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  setCart: (value: any) => void;
}

function CartItemPage({ id, name, price, image, quantity, setCart }: ICartItemPageProps) {
  const handleUpdateQuantity = (quantity: number) => {
    let cart = JSON.parse(localStorage.getItem('cart') as string);
    const index = cart.findIndex((item: any) => +item.id === id);
    cart[index].quantity = +cart[index].quantity + quantity;
    setCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="flex justify-between py-6 border-b border-gray-500 border-solid">
      <div className="flex gap-6">
        <img src={image} alt="product" className="w-28" />
        <div className="flex flex-col">
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
      <div className="flex justify-between w-[300px]">
        <div>
          <div className="w-20 flex items-center justify-between border border-white border-solid px-2 py-1">
            <div className="flex text-gray-500 hover:text-white text-[10px]">
              <MinusOutlined
                onClick={quantity === 1 ? undefined : () => handleUpdateQuantity(-1)}
                style={{ cursor: 'pointer', margin: 'auto 0' }}
              />
            </div>
            <span className="text-xs">{quantity}</span>
            <div className="flex text-gray-500 hover:text-white text-[10px]">
              <PlusOutlined onClick={() => handleUpdateQuantity(1)} style={{ cursor: 'pointer', margin: 'auto 0' }} />
            </div>
          </div>
        </div>
        <p>${(price * quantity).toFixed(2)}</p>
        <div>
          <div className="text-gray-500 hover:text-white">
            <CloseOutlined style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemPage;

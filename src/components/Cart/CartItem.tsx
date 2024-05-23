import React from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  setCart: (value: any) => void;
};

function CartItem({ id, name, price, image, quantity, setCart }: CartItemProps) {
  const handleUpdateQuantity = (quantity: number) => {
    let cart = JSON.parse(localStorage.getItem('cart') as string);
    const index = cart.findIndex((item: any) => +item.id === id);
    cart[index].quantity = +cart[index].quantity + quantity;
    setCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="flex items-center gap-3 py-6 border-b border-black border-solid text-black">
      <img src={image} alt="product" className="w-20 aspect-square object-contain" />
      <div className="flex flex-col">
        <h6 className="font-semibold">{name}</h6>
        <p className="text-lg font-semibold">${price}</p>
        <div>
          <div className="w-20 flex items-center justify-between border border-black border-solid px-2 py-1">
            <div className="flex text-gray-500 hover:text-black text-[10px]">
              <MinusOutlined
                onClick={quantity === 1 ? undefined : () => handleUpdateQuantity(-1)}
                style={{ cursor: 'pointer', margin: 'auto 0' }}
              />
            </div>
            <span className="text-xs">{quantity}</span>
            <div className="flex text-gray-500 hover:text-black text-[10px]">
              <PlusOutlined onClick={() => handleUpdateQuantity(1)} style={{ fontSize: 10, cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { useCartStore } from 'store/cart-store';
import './Cart.scss';
import CloseIcon from '../../assets/svg/chevron-white.svg';
import CartItem from './CartItem';
import { ICartItem } from 'ts/interfaces/cart';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useCartStore();
  const [cart, setCart] = useState<ICartItem[]>([]);
  const onClose = () => {
    setIsOpen();
  };

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart') as string));
    }
  }, []);

  const handleViewCart = () => {
    navigate('/cart');
    setIsOpen();
  };

  return (
    <>
      <Drawer
        closeIcon={<img src={CloseIcon} className="-rotate-90 w-8" />}
        title="Cart"
        onClose={onClose}
        open={isOpen}
        footer={
          <div onClick={handleViewCart} className="p-6">
            <button className="w-full flex bg-orange text-black h-10 rounded hover:opacity-80">
              <span className="block m-auto text-lg">View Cart</span>
            </button>
          </div>
        }
        style={{ background: '#D9D4C9' }}
        styles={{ body: { padding: '0 20px 20px' } }}
      >
        {cart.map((cartItem: any) => {
          return (
            <CartItem
              key={cartItem.id}
              id={cartItem.id}
              name={cartItem.name}
              price={cartItem.price}
              image={cartItem.image}
              quantity={cartItem.quantity}
              setCart={setCart}
            />
          );
        })}
      </Drawer>
    </>
  );
}

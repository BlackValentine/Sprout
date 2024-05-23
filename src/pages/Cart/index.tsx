import React, { useEffect, useState } from 'react';
import CartItemPage from 'components/Cart/CartItemPage';
import { ICartItem } from 'ts/interfaces/cart';
import { TagOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Cart() {
  const shippingCost: number = 35;
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [isOpenCodeInput, setIsOpenCodeInput] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart') as string));
    }
  }, []);

  const caculateTotalCheckout = (): any => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="max-w-6xl mx-auto pt-10">
      <div className="flex gap-16">
        <div className="w-2/3">
          <h6 className="text-xl pb-4 border-b border-gray-500 border-solid">My Cart</h6>
          {cart.map((cartItem, index) => {
            return (
              <CartItemPage
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
          <div
            className="flex items-center gap-2 mt-6 text-orange cursor-pointer hover:opacity-90"
            onClick={() => setIsOpenCodeInput(!isOpenCodeInput)}
          >
            <TagOutlined />
            <span>Enter a promo code</span>
          </div>
          {isOpenCodeInput && (
            <div className="flex items-center mt-2">
              <input
                type="text"
                placeholder="Enter a promo code"
                className="h-10 bg-transparent pl-4 pr-20 border-t border-b border-l border-gray-500 border-solid outline-none"
              />
              <button className="h-10 px-6 border border-orange border-solid text-orange hover:opacity-80">
                Apply
              </button>
            </div>
          )}
        </div>
        <div className="w-1/3">
          <h6 className="text-xl pb-4 border-b border-gray-500 border-solid">Order summary</h6>
          <div className="flex flex-col gap-2 pt-8 pb-2 border-b border-gray-500 border-solid">
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>${caculateTotalCheckout()}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Tax</p>
              <p>${caculateTotalCheckout() / 10}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping</p>
              <p>${shippingCost.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 text-xl font-semibold">
            <p>Total</p>
            <p>${caculateTotalCheckout() * 1.1 + 35}</p>
          </div>
          <Link to={'/payment'}>
            <button className="w-full py-3 mt-6 bg-orange rounded hover:opacity-90">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import React from 'react';
import Product1 from '../../assets/images/product1-1.webp';
import ProductHover1 from '../../assets/images/product1-2.webp';
import Product2 from '../../assets/images/product2-2.webp';
import ProductHover2 from '../../assets/images/product2-1.webp';
import Product3 from '../../assets/images/product3-1.webp';
import ProductHover3 from '../../assets/images/product3-2.webp';
import Product4 from '../../assets/images/product4-1.webp';
import ProductHover4 from '../../assets/images/product4-2.webp';

export default function Arrival() {
  const productList = [
    {
      name: 'Fucus lyrata',
      price: '3599',
      image: Product1,
      hoverImage: ProductHover1,
    },
    {
      name: 'Rusty Flowerpot',
      price: '2099',
      image: Product2,
      hoverImage: ProductHover2,
    },
    {
      name: 'Cactus',
      price: '1999',
      image: Product3,
      hoverImage: ProductHover3,
    },
    {
      name: 'Wooden Basket',
      price: '2899',
      image: Product4,
      hoverImage: ProductHover4,
    },
  ];
  return (
    <div className="px-10 py-16 bg-timberwolf">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-[60px] text-black">New Arrivals</h2>
        <button className="px-10 py-3 bg-orange hover:bg-primary ease-in duration-300 rounded">Shop All</button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {productList.map((productItem, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="relative">
                <img
                  className="w-full h-[400px] object-cover rounded-lg"
                  onMouseOver={(e) => (e.currentTarget.src = productItem.hoverImage)}
                  onMouseOut={(e) => (e.currentTarget.src = productItem.image)}
                  src={productItem.image}
                  alt="product"
                />
                <div className="absolute top-4 left-4 bg-primary rounded px-3">New Arrival</div>
              </div>
              <div className="flex flex-col mt-4 px-4 text-primary">
                <h6 className="font-forum text-primary text-[28px] font-normal">{productItem.name}</h6>
                <span className="text-xl">${+productItem.price / 100}</span>
                <button className="w-full px-4 py-2 border border-primary border-solid mt-6 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

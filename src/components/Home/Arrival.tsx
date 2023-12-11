import React from 'react';
import Product1 from '../../assets/images/product1-1.webp';
import ProductHover1 from '../../assets/images/product1-2.webp';
import Product2 from '../../assets/images/product2-2.webp';
import ProductHover2 from '../../assets/images/product2-1.webp';
import Product3 from '../../assets/images/product3-1.webp';
import ProductHover3 from '../../assets/images/product3-2.webp';
import Product4 from '../../assets/images/product4-1.webp';
import ProductHover4 from '../../assets/images/product4-2.webp';
import ProductItem from './ProductItem';

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
      <div className="grid grid-cols-4 gap-5 text-primary">
        {productList.map((productItem, index) => {
          return (
            <ProductItem
              key={index}
              image={productItem.image}
              hoverImage={productItem.hoverImage}
              name={productItem.name}
              price={productItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

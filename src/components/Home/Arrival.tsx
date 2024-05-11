import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { getAllProduct } from 'config/axios/productApi';

export default function Arrival() {
  const [products, setProducsts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllProduct({
        isNewArrival: 1,
      });
      setProducsts(response.data);
    })();
  });

  console.log(products);
  return (
    <div className="px-10 py-16 bg-timberwolf">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-[60px] text-black">New Arrivals</h2>
        <Link to="/sprout/category">
          <button className="px-10 py-3 bg-orange hover:bg-primary ease-in duration-300 rounded">Shop All</button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-5 text-primary">
        {products.slice(0, 4).map((productItem, index) => {
          return (
            <ProductItem
              key={index}
              id={productItem.id}
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

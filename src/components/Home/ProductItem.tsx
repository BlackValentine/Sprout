import React from 'react';

interface IProductItemProps {
  image: any;
  hoverImage: any;
  name: string;
  price: string | number;
}

export default function ProductItem({ image, hoverImage, name, price }: IProductItemProps) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          className="w-full aspect-[1/1.3] object-cover rounded-lg"
          onMouseOver={(e) => (e.currentTarget.src = hoverImage)}
          onMouseOut={(e) => (e.currentTarget.src = image)}
          src={image}
          alt="product"
        />
        <div className="absolute top-4 left-4 bg-primary rounded px-3 text-white">New Arrival</div>
      </div>
      <div className="flex flex-col mt-4 px-4">
        <h6 className="font-forum text-[28px] font-normal">{name}</h6>
        <span className="text-xl">${+price / 100}</span>
        <button className="w-full px-4 py-2 border border-primary border-solid mt-6 rounded">Add to Cart</button>
      </div>
    </div>
  );
}

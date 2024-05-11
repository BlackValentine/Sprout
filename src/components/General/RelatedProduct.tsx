import React from 'react';
import Product1 from '../../assets/images/product1-1.webp';
import ProductHover1 from '../../assets/images/product1-2.webp';
import Product2 from '../../assets/images/product2-2.webp';
import ProductHover2 from '../../assets/images/product2-1.webp';
import Product3 from '../../assets/images/product3-1.webp';
import ProductHover3 from '../../assets/images/product3-2.webp';
import Product4 from '../../assets/images/product4-1.webp';
import ProductHover4 from '../../assets/images/product4-2.webp';
import Product5 from '../../assets/images/product5-1.webp';
import ProductHover5 from '../../assets/images/product5-2.webp';
import Product6 from '../../assets/images/product6-1.webp';
import ProductHover6 from '../../assets/images/product6-2.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function RelatedProduct() {
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
    {
      name: 'Rattan Basket',
      price: '3299',
      image: Product5,
      hoverImage: ProductHover5,
    },
    {
      name: 'Beige Pot',
      price: '1599',
      image: Product6,
      hoverImage: ProductHover6,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto pb-10 bg-black">
      <h3 className="text-white text-3xl font-forum py-10 text-center">Related Products</h3>
      <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
        navigation
        modules={[Navigation]}
        className="px-10"
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {productList.map((productItem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                <div className="relative">
                  <img
                    className="w-full h-[350px] object-cover"
                    onMouseOver={(e) => (e.currentTarget.src = productItem.hoverImage)}
                    onMouseOut={(e) => (e.currentTarget.src = productItem.image)}
                    src={productItem.image}
                    alt="product"
                  />
                  <div className="absolute top-1 left-1 bg-primary px-3 rounded">New Arrival</div>
                </div>
                <div className="flex flex-col mt-4 text-white">
                  <h6 className=" font-normal">{productItem.name}</h6>
                  <span>${+productItem.price / 100}</span>
                  <button className="w-full px-4 py-2 border border-white border-solid mt-2 rounded hover:bg-white hover:text-black transition ease-out duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

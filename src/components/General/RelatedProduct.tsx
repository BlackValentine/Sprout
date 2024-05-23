import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { getAllProduct } from 'config/axios/productApi';
import { useCartStore } from 'store/cart-store';

export default function RelatedProduct() {
  const { setIsOpen } = useCartStore();
  const [products, setProducsts] = useState<any[]>([]);
  const [hovered, setHovered] = useState<boolean[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllProduct({});
      setProducsts(response.data);
      setHovered(new Array(response.data.length).fill(false));
    })();
  }, []);

  const handleMouseOver = (index: number) => {
    const dummy = [...hovered];
    dummy.splice(index, 1, true);
    setHovered(dummy);
  };

  const handleMouseOut = (index: number) => {
    const dummy = [...hovered];
    dummy.splice(index, 1, false);
    setHovered(dummy);
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
            quantity: 1,
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
        {products.map((productItem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                <div className="relative">
                  <img
                    className="w-full h-[350px] object-cover"
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
                    src={hovered[index] ? productItem.hoverImage : productItem.image}
                    alt="product"
                  />
                  {productItem.isNewArrival && (
                    <div className="absolute top-1 left-1 bg-primary px-3 rounded">New Arrival</div>
                  )}
                </div>
                <div className="flex flex-col mt-4 text-white">
                  <h6 className=" font-normal">{productItem.name}</h6>
                  <span>${(+productItem.price / 100).toFixed(2)}</span>
                  <button
                    onClick={() =>
                      handleAddItemToCart({
                        id: productItem.id,
                        image: productItem.image,
                        name: productItem.name,
                        price:
                          productItem.isSale && productItem.salePercentage
                            ? ((+productItem.price / 100) * (1 - productItem.salePercentage / 100)).toFixed(2)
                            : +productItem.price / 100,
                      })
                    }
                    className="w-full px-4 py-2 border border-white border-solid mt-2 rounded hover:bg-white hover:text-black transition ease-out duration-200"
                  >
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

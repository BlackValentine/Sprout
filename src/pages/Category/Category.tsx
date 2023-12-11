import React, { useEffect, useState } from 'react';
import Footer from 'components/General/Footer';
import Header from 'components/General/Header';
import ChevronIcon from '../../assets/svg/chevron-white.svg';
import Product1 from '../../assets/images/product1-1.webp';
import ProductHover1 from '../../assets/images/product1-2.webp';
import Product2 from '../../assets/images/product2-2.webp';
import ProductHover2 from '../../assets/images/product2-1.webp';
import Product3 from '../../assets/images/product3-1.webp';
import ProductHover3 from '../../assets/images/product3-2.webp';
import Product4 from '../../assets/images/product4-1.webp';
import ProductHover4 from '../../assets/images/product4-2.webp';
import ProductItem from '../../components/Home/ProductItem';
import AllProductBanner from '../../assets/images/all-products-banner.webp';
import NewArrivalsBanner from '../../assets/images/new-arrival-banner.webp';
import PlantsBanner from '../../assets/images/plants-banner.webp';
import PotsBanner from '../../assets/images/pots-banner.webp';
import SaleBanner from '../../assets/images/sale-banner.webp';
import SubscriptionsBanner from '../../assets/images/subscriptions-banner.webp';
import { useLocation } from 'react-router-dom';

export default function Category() {
  const { state } = useLocation();

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

  const [productType, setProductType] = useState<string>('all');

  useEffect(() => {
    setProductType(state);
  }, [state]);

  const renderProductLink = (productType: string) => {
    switch (productType) {
      case 'all':
        return 'All Products';
      case 'arrivals':
        return 'New Arrivals';
      case 'plants':
        return 'Plants';
      case 'pots':
        return 'Pots';
      case 'sale':
        return 'Sale';
      case 'subscriptions':
        return 'Subscriptions';
      default:
        return 'All Products';
    }
  };

  const renderBanner = (productType: string) => {
    switch (productType) {
      case 'all':
        return (
          <>
            <img src={AllProductBanner} alt="all-product" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">All Products</h1>
          </>
        );
      case 'arrivals':
        return (
          <>
            <img src={NewArrivalsBanner} alt="all-product" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">New Arrivals</h1>
          </>
        );
      case 'plants':
        return (
          <>
            <img src={PlantsBanner} alt="all-product" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">Plants</h1>
          </>
        );
      case 'pots':
        return (
          <>
            <img src={PotsBanner} alt="all-product" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">Pots</h1>
          </>
        );
      case 'sale':
        return (
          <>
            <img src={SaleBanner} alt="all-product" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">Sale</h1>
          </>
        );
      case 'subscriptions':
        return (
          <>
            <img src={SubscriptionsBanner} alt="all-product" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">Subscriptions</h1>
          </>
        );
      default:
        return (
          <>
            <img src={AllProductBanner} alt="all-product" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">All Products</h1>
          </>
        );
    }
  };

  return (
    <div className="bg-black">
      <Header />
      <div className="mx-10">
        <div className="flex items-center">
          <span>Home</span>
          <img src={ChevronIcon} alt="chevron" className="-rotate-90" />
          <span>{renderProductLink(productType)}</span>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="w-[250px]">
            <h6 className="text-3xl pb-5 border-b border-solid border-white">Browse by</h6>
            <div className="flex flex-col gap-1 mt-5">
              <button
                className={`${productType === 'all' ? 'font-bold' : 'font-normal'} hover:text-primary text-left`}
                onClick={() => setProductType('all')}
              >
                All Products
              </button>
              <button
                className={`${productType === 'arrivals' ? 'font-bold' : 'font-normal'} hover:text-primary text-left`}
                onClick={() => setProductType('arrivals')}
              >
                New Arrivals
              </button>
              <button
                className={`${productType === 'plants' ? 'font-bold' : 'font-normal'} hover:text-primary text-left`}
                onClick={() => setProductType('plants')}
              >
                Plants
              </button>
              <button
                className={`${productType === 'pots' ? 'font-bold' : 'font-normal'} hover:text-primary text-left`}
                onClick={() => setProductType('pots')}
              >
                Pots
              </button>
              <button
                className={`${productType === 'sale' ? 'font-bold' : 'font-normal'} hover:text-primary text-left`}
                onClick={() => setProductType('sale')}
              >
                Sale
              </button>
              <button
                className={`${
                  productType === 'subscriptions' ? 'font-bold' : 'font-normal'
                } hover:text-primary text-left`}
                onClick={() => setProductType('subscriptions')}
              >
                Subscriptions
              </button>
            </div>
          </div>
          <div>
            {renderBanner(productType)}
            <div className="grid grid-cols-2 gap-10">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

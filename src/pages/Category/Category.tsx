import React, { useEffect, useState } from 'react';
import ChevronIcon from '../../assets/svg/chevron-white.svg';
import ProductItem from '../../components/Home/ProductItem';
import AllProductBanner from '../../assets/images/all-products-banner.webp';
import NewArrivalsBanner from '../../assets/images/new-arrival-banner.webp';
import PlantsBanner from '../../assets/images/plants-banner.webp';
import PotsBanner from '../../assets/images/pots-banner.webp';
import SaleBanner from '../../assets/images/sale-banner.webp';
import SubscriptionsBanner from '../../assets/images/subscriptions-banner.webp';
import { useLocation } from 'react-router-dom';
import { getAllProduct } from 'config/axios/productApi';
import { getAllCategory } from 'config/axios/categoryApi';
import { CategoryEnum } from 'ts/enum/category';

export default function Category() {
  const { state } = useLocation();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [categoryType, setCategoryType] = useState<string>(CategoryEnum.ALL);

  const handleGetAllProducts = async (
    categoryType: string,
    page?: number,
    take?: number,
    categoryId?: number | null,
    isSale?: number,
    isNewArrival?: number
  ) => {
    setCategoryType(categoryType);
    const response = await getAllProduct({
      page: page ?? 1,
      take: take ?? 20,
      categoryId,
      isSale,
      isNewArrival,
    });
    setProducts(response.data);
  };

  useEffect(() => {
    handleGetAllProducts(categoryType, 1, 20);

    (async () => {
      const response = await getAllCategory();
      setCategories(response);
    })();
  }, []);

  useEffect(() => {
    setCategoryType(state);
  }, [state]);

  const renderProductLink = (categoryType: string) => {
    switch (categoryType) {
      case CategoryEnum.ALL:
        return 'All Products';
      case CategoryEnum.NEWS:
        return 'New Arrivals';
      case CategoryEnum.PLANTS:
        return 'Plants';
      case CategoryEnum.POTS:
        return 'Pots';
      case CategoryEnum.SALE:
        return 'Sale';
      case CategoryEnum.SUBSCRIPTIONS:
        return 'Subscriptions';
      default:
        return 'All Products';
    }
  };

  const renderBanner = (categoryType: string) => {
    switch (categoryType) {
      case CategoryEnum.ALL:
        return (
          <>
            <img src={AllProductBanner} alt="all-product" className="w-full h-[350px] object-cover" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">All Products</h1>
          </>
        );
      case CategoryEnum.NEWS:
        return (
          <>
            <img src={NewArrivalsBanner} alt="all-product" className="w-full h-[350px] object-cover" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">New Arrivals</h1>
          </>
        );
      case CategoryEnum.PLANTS:
        return (
          <>
            <img src={PlantsBanner} alt="all-product" className="w-full h-[350px] object-cover" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">Plants</h1>
          </>
        );
      case CategoryEnum.POTS:
        return (
          <>
            <img src={PotsBanner} alt="all-product" className="w-full h-[350px] object-cover" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">Pots</h1>
          </>
        );
      case CategoryEnum.SALE:
        return (
          <>
            <img src={SaleBanner} alt="all-product" className="w-full h-[350px] object-cover" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">Sale</h1>
          </>
        );
      case CategoryEnum.SUBSCRIPTIONS:
        return (
          <>
            <img src={SubscriptionsBanner} alt="all-product" className="w-full h-[350px] object-cover" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">Subscriptions</h1>
          </>
        );
      default:
        return (
          <>
            <img src={AllProductBanner} alt="all-product" className="w-full h-[350px] object-cover" />
            <h1 className="text-[90px] font-forum mt-6 mb-16">All Products</h1>
          </>
        );
    }
  };

  return (
    <div className="mx-10">
      <div className="flex items-center">
        <span>Home</span>
        <img src={ChevronIcon} alt="chevron" className="-rotate-90" />
        <span>{renderProductLink(categoryType)}</span>
      </div>
      <div className="flex gap-10 mt-10">
        <div className="w-[300px]">
          <h6 className="text-3xl pb-5 border-b border-solid border-white">Browse by</h6>
          <div className="flex flex-col gap-1 mt-5">
            <button
              className={`${
                categoryType === CategoryEnum.ALL ? 'font-bold text-lg' : 'font-normal'
              } hover:text-primary text-left`}
              onClick={() => handleGetAllProducts(CategoryEnum.ALL, 1, 20, null, 0, 0)}
            >
              All Products
            </button>
            {categories?.map((category) => {
              return (
                <button
                  className={`${
                    categoryType === category.type ? 'font-bold text-lg' : 'font-normal'
                  } hover:text-primary text-left`}
                  onClick={() => handleGetAllProducts(category.type, 1, 20, category.id, 0, 0)}
                  key={category.id}
                >
                  {category.name}
                </button>
              );
            })}
            <button
              className={`${
                categoryType === CategoryEnum.NEWS ? 'font-bold text-lg' : 'font-normal'
              } hover:text-primary text-left`}
              onClick={() => handleGetAllProducts(CategoryEnum.NEWS, 1, 20, null, 0, 1)}
            >
              New Arrivals
            </button>
            <button
              className={`${
                categoryType === CategoryEnum.SALE ? 'font-bold text-lg' : 'font-normal'
              } hover:text-primary text-left`}
              onClick={() => handleGetAllProducts(CategoryEnum.SALE, 1, 20, null, 1, 0)}
            >
              Sale
            </button>
          </div>
        </div>
        <div>
          {renderBanner(categoryType)}
          <div className="grid grid-cols-2 2xl:grid-cols-3 gap-10">
            {products.map((productItem) => {
              return (
                <ProductItem
                  key={productItem?.id}
                  id={productItem?.id}
                  image={productItem?.image}
                  hoverImage={productItem?.hoverImage}
                  name={productItem?.name}
                  price={productItem?.price}
                  isSale={productItem?.isSale}
                  isNewArrival={productItem?.isNewArrival}
                  salePercentage={productItem?.salePercentage}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

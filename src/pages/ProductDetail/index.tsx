import React, { useEffect, useState } from 'react';
import Heart from '../../assets/svg/empty-heart.svg';
import { Collapse } from 'react-collapse';
import PlusIcon from '../../assets/svg/plus.svg';
import RelatedProduct from 'components/General/RelatedProduct';
import { useParams } from 'react-router-dom';
import { getProductById } from 'config/axios/productApi';
import functions from 'utilities/functions';

export default function ProductDetail() {
  const [isOpenProductInfo, setIsOpenProductInfo] = useState<boolean>(true);
  const [isOpenReturnRefund, setIsOpenReturnRefund] = useState<boolean>(false);
  const [isOpenShippingInfo, setIsOpenShippingInfo] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [productDetail, setProductDetail] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await getProductById(+id);
        setProductDetail(response);
      }
    })();
  }, []);

  return (
    <>
      <div className="max-w-6xl grid grid-cols-2 gap-10 mx-auto mt-6 p-10 bg-timberwolf">
        <div>
          <div className="flex flex-col border border-solid border-primary">
            <img src={productDetail?.image} alt="product" />
          </div>
        </div>
        <div className="flex flex-col text-gray2">
          <h3 className="text-3xl font-forum mb-4">{productDetail?.name}</h3>
          <span className="text-lg mb-5">SKU: {functions.func.renderSku(productDetail?.id)}</span>
          <span className="text-xl mb-5">${productDetail?.price / 100}</span>
          <div className="flex flex-col gap-1 mb-8">
            <span>Quantity</span>
            <input
              className="h-12 w-28 text-black pl-4"
              type="number"
              min={1}
              step={1}
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
          </div>
          <div className="flex items-center gap-1 mb-10">
            <button className="w-full h-10 flex bg-orange rounded">
              <span className="block m-auto text-white">Add to Card</span>
            </button>
            <button className="w-10 h-10 flex bg-black rounded">
              <img src={Heart} alt="heart" className="m-auto" />
            </button>
          </div>
          <div className="pb-4 border-b border-solid border-gray2">
            <div
              className="flex items-center justify-between cursor-pointer mb-3"
              onClick={() => {
                setIsOpenProductInfo(!isOpenProductInfo);
                setIsOpenReturnRefund(false);
                setIsOpenShippingInfo(false);
              }}
            >
              <span className="text-2xl text-black">Product Info</span>
              <img
                src={PlusIcon}
                alt="collapse"
                className={`${isOpenProductInfo ? 'rotate-45' : 'rotate-0'} ease-linear duration-300`}
              />
            </div>
            <Collapse isOpened={isOpenProductInfo}>
              <p className="text-gray2">{productDetail?.description}</p>
            </Collapse>
          </div>
          <div className="pb-4 border-b border-solid border-gray2 mt-5">
            <div
              className="flex items-center justify-between cursor-pointer mb-3"
              onClick={() => {
                setIsOpenProductInfo(false);
                setIsOpenReturnRefund(!isOpenReturnRefund);
                setIsOpenShippingInfo(false);
              }}
            >
              <span className="text-2xl text-black">Return & Refund Policy</span>
              <img
                src={PlusIcon}
                alt="collapse"
                className={`${isOpenReturnRefund ? 'rotate-45' : 'rotate-0'} ease-linear duration-300`}
              />
            </div>
            <Collapse isOpened={isOpenReturnRefund}>
              <p className="text-gray2">
                I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are
                dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to
                build trust and reassure your customers that they can buy with confidence.
              </p>
            </Collapse>
          </div>
          <div className="pb-4 border-b border-solid border-gray2 mt-5">
            <div
              className="flex items-center justify-between cursor-pointer mb-3"
              onClick={() => {
                setIsOpenProductInfo(false);
                setIsOpenReturnRefund(false);
                setIsOpenShippingInfo(!isOpenShippingInfo);
              }}
            >
              <span className="text-2xl text-black">Shipping Info</span>
              <img
                src={PlusIcon}
                alt="collapse"
                className={`${isOpenShippingInfo ? 'rotate-45' : 'rotate-0'} ease-linear duration-300`}
              />
            </div>
            <Collapse isOpened={isOpenShippingInfo}>
              <p className="text-gray2">
                I’m a shipping policy. I’m a great place to add more information about your shipping methods, packaging
                and cost. Providing straightforward information about your shipping policy is a great way to build trust
                and reassure your customers that they can buy from you with confidence.
              </p>
            </Collapse>
          </div>
        </div>
      </div>
      <RelatedProduct />
    </>
  );
}

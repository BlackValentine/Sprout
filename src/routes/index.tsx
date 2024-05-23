// import PageNotFound from 'layout/404';
// import Loading from 'components/Loading';
import Loading from 'components/Loading';
import HomeLayout from 'layout/HomeLayout';
import MenuLayout from 'layout/MenuLayout';
import BlogDetail from 'pages/BlogDetail';
import Cart from 'pages/Cart';
import Care from 'pages/Category/Care';
import Category from 'pages/Category/Category';
import Contact from 'pages/Helpful/Contact';
import FAQ from 'pages/Helpful/FAQ';
import ShippingReturns from 'pages/Helpful/ShippingReturns';
import Story from 'pages/Helpful/Story';
import TermsConditions from 'pages/Helpful/TermsConditions';
import Home from 'pages/Home';
import Wrapper from 'pages/Payment/Wrapper';
import ProductDetail from 'pages/ProductDetail';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const MainRoutes = () => (
  <div>
    <Loading />

    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/" element={<MenuLayout />}>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/shipping-and-returns" element={<ShippingReturns />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/sprout/care" element={<Care />} />
        <Route path="/sprout/care/:id" element={<BlogDetail />} />
        <Route path="/sprout/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Wrapper />} />
      </Route>
    </Routes>
  </div>
);

export default MainRoutes;

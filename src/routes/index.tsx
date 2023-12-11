// import PageNotFound from 'layout/404';
import MenuLayout from 'layout/MenuLayout';
import Contact from 'pages/Helpful/Contact';
import FAQ from 'pages/Helpful/FAQ';
import ShippingReturns from 'pages/Helpful/ShippingReturns';
import Story from 'pages/Helpful/Story';
import TermsConditions from 'pages/Helpful/TermsConditions';
import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PermissionDenied from './components/PermissionDenied';
// import ProtectedRoutes from './components/ProtectedRoutes';
// import PublicRoutes from './components/PublicRoutes';
// const ProfilePage = React.lazy(() => import('pages/Login'));

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<MenuLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/shipping-and-returns" element={<ShippingReturns />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/our-story" element={<Story />} />
      {/* <Route path={EnumPathRouters.dashboard} element={<div>Dashboard</div>} />
      <Route
        path={EnumPathRouters.reports123}
        // element={<Tabs props={{ userName: 'Bikash web' }} />}
      >
        <Route path={EnumPathRouters.reports123} element={<Navigate replace to={EnumPathRouters.insights} />} />
        <Route path={EnumPathRouters.insights} element={<div>Tab1</div>} />
        <Route path={EnumPathRouters.automations} element={<ProtectedRoutes roleRequired="USER" />}>
          <Route path={EnumPathRouters.automations} element={<div>Tab2</div>} />
        </Route>
        <Route path={EnumPathRouters.reports2} element={<ProfilePage />} />
      </Route>
      <Route path={EnumPathRouters.settings} element={<ProtectedRoutes roleRequired="USER" />}>
        <Route path={EnumPathRouters.settings} element={<div>Setting</div>} />
      </Route>
      <Route path={EnumPathRouters.calendar} element={<div>Calender</div>} /> */}
    </Route>
  </Routes>
);

export default MainRoutes;

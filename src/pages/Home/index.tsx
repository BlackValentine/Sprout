import Arrival from 'components/Home/Arrival';
import Banner from 'components/Home/Banner';
import Blog from 'components/Home/Blog';
import Category from 'components/Home/Category';
import Story from 'components/Home/Story';
import SubscriptionBoxes from 'components/Home/SubscriptionBoxes';
import React from 'react';
import './Home.scss';

export default function Home() {
  return (
    <>
      <Banner />
      <Arrival />
      <Category />
      <Story />
      <SubscriptionBoxes />
      <Blog />
    </>
  );
}

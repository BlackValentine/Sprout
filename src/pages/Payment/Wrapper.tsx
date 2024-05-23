import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from './index';

import React from 'react';

function Wrapper() {
  const stripePromise = loadStripe(
    'pk_test_51MoLWNJLnzZDVkbTbVwRrARxJICxTephmBfQkV134iMBaA3hUbhvn2MDrEjG6ZmRToAdmvy6QYXuqwwjkeQert3s0060VH3yzL'
  );

  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
}

export default Wrapper;

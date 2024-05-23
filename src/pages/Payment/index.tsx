import React from 'react';
import visaLogo from '../../assets/images/visa-logo.jpeg';
import mastercardLogo from '../../assets/images/mastercard-logo.png';
import jcbLogo from '../../assets/images/jcb-logo.png';
import cardImg from '../../assets/images/card-image.png';
import PaymentForm from 'components/Payment/PaymentForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
  const navigate = useNavigate();
  const totalPayment: number = 1200;
  // let customerId: string;
  // if (typeof window !== 'undefined') {
  //   customerId = localStorage.getItem('customerId') as string;
  // }
  const stripe = useStripe();
  const elements = useElements();

  // const [defaultPaymentMethod, setDefaultPaymentMethod] = useState<string>('');

  const handleCancelPayment = () => {
    navigate('/');
  };

  const handleManagePaymentMethod = () => {
    navigate('/manage-payment');
  };

  const handlePaymentForm = async () => {
    const cardElement = elements?.getElement(CardElement);

    if (!stripe || !elements || !cardElement) {
      return;
    }

    const stripeResponse = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    const { error, paymentMethod } = stripeResponse;

    if (error || !paymentMethod) {
      return;
    }

    const paymentMethodId = paymentMethod.id;

    const res = await axios.post('http://localhost:8080/api/v1/payment', {
      paymentMethodId,
      amount: totalPayment * 100,
    });

    if (res.data === 'succeeded') {
      navigate('/');
    }
  };

  // const handleSubmitPaymentByDefault = async (currentPaymentMethod: string) => {
  //   const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_PAYMENT_URL}/stripe/save-card`, {
  //     paymentMethodId: currentPaymentMethod,
  //     amount: totalPayment * 100,
  //     customerId,
  //   });

  //   if (res.data.status === 'succeeded') {
  //     navigate('/');
  //   }
  // };

  // useEffect(() => {
  //   const getDefaultPaymentMethod = async () => {
  //     const responseDefaultPM = await axios.post('http://localhost:8080/api/v1/payment/default-payment-method', {
  //       customerId,
  //     });
  //     const defaultPaymentMethod = responseDefaultPM?.data?.invoice_settings.default_payment_method;
  //     setDefaultPaymentMethod(defaultPaymentMethod);
  //   };
  //   getDefaultPaymentMethod();
  // }, []);

  return (
    <div className="mt-5">
      <div className="text-sm py-3 lg:px-0 px-3 text-center mb-5">
        Please do not close the browser until the order is confirmed!
      </div>
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2/1 grid-cols-1 lg:gap-10 gap-20 lg:px-20 px-10">
        <div className="lg:order-1 order-2">
          <div className="flex items-center justify-between my-2">
            <h3 className="lg:text-xl text-base">Card Information</h3>
            <div className="flex items-center gap-3">
              <img src={visaLogo} className="h-10" />
              <img src={mastercardLogo} className="h-10" />
              <img src={jcbLogo} className="h-10" />
            </div>
          </div>
          <div className="w-full shadow-xl mt-2 rounded">
            <div className="flex border-b border-solid border-gray-80">
              <img className="mx-auto my-10 w-96" src={cardImg} alt="card" />
            </div>
            <div className="mt-5 pb-10">
              <div className="flex items-center justify-between gap-2">
                <div className="w-full">
                  <PaymentForm onSubmitPaymentForm={() => handlePaymentForm()} />
                </div>
                {/* {defaultPaymentMethod && (
                  <div className="w-full">
                    <div className="text-base py-2.5 px-3 border border-solid border-red rounded">
                      {defaultPaymentMethod}
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleSubmitPaymentByDefault(defaultPaymentMethod)}
                        className="px-16 py-3 mt-5 text-white font-bold text-base rounded bg-blue hover:opacity-80"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:order-2 order-1">
          <h3 className="lg:text-xl text-base leading-10 my-2">Order Information</h3>
          <div className="w-full shadow-xl py-4 rounded">
            <div className="flex items-center justify-between border-b border-solid border-gray-80 py-6">
              <span className="text-base">Total:</span>
              <div className="flex items-center text-base text-green-300">
                <span>${totalPayment}</span>
              </div>
            </div>
            <div className="flex flex-col my-6">
              <span className="text-base">Trade code:</span>
              <span className="text-gray-80 text-sm">2301423_12u49123123</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base">Content:</span>
              <span className="text-gray-80 text-sm">Sprout - Payment for the order</span>
              <span className="text-gray-80 text-sm">12u49123123WEB</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between my-8 order-3">
          <button
            onClick={handleCancelPayment}
            className="px-8 py-3 bg-red-500 text-white text-base hover:opacity-90 rounded font-bold"
          >
            Cancel payment
          </button>
          <button
            onClick={handleManagePaymentMethod}
            className="bg-blue text-white text-base py-3 rounded hover:opacity-80"
          >
            <span>Manage Payment Method</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;

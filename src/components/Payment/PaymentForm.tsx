import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';

type PaymentProps = {
  onSubmitPaymentForm: () => void;
};

export default function PaymentForm({ onSubmitPaymentForm }: PaymentProps) {
  return (
    <div>
      <div className="p-3 bg-white border border-solid border-red rounded">
        <CardElement className="!text-white" options={{ hidePostalCode: true }} />
      </div>
      <div className="flex justify-end">
        <button
          className="px-16 py-3 mt-5 text-white font-bold text-sm rounded bg-orange hover:opacity-90"
          type="submit"
          onClick={() => onSubmitPaymentForm()}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

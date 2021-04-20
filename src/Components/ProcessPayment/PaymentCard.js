import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React from 'react';
const PaymentCars = () => {
  const stripe = useStripe();
  const elements = useElements();

const sStyle ={
    width: "300px",
    height: "70px",
    border: "1px solid #c3c3c3",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    marginLeft:"300px"
}

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      alert('Payment Done');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <br /> 
      <br /> 
      <button className="btn btn-primary" style={sStyle} type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default PaymentCars;
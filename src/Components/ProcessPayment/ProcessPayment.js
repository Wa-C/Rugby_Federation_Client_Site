import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCars from './PaymentCard';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IiAgiFdOdzfS18vWU3SCeruttPyOC30boBXxTqrxNBfHwaLpS777vcFpMUCVS3ymH8ymsYnBO9UBNRSxi5h34GS00pWbo3tNY');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
      
  <PaymentCars /> 

    </Elements>
    );
};

export default ProcessPayment;


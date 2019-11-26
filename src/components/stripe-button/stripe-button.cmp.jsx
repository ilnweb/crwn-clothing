import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_35xegqEKouaopwUm7D4fFGcM00t7OfHUcF";
  const onToken = token => {
    console.log(token);
    alert('Payment Succsesful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      ComponentClass="stripe-btn"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
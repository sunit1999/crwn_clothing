import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

// sends payment request to server
const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51I8OewFwaUiTlQTjoJpbivH5KG0sw1nPlE85ITyr67OHcNCIXz8lenwbNNwL1RGnZr2XBmfPARqrFlEETfjRPs7Q00v2wgJAcw';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceInCents,
                token: token
            }
        })
            .then(response => {
                alert('Payment Succesful');
            })
            .catch(error => {
                console.log('Payment Error', error);
                alert('Payment Failed. Please retry with correct card details.')
            })
    }

    return (
        <StripeCheckout
            label='PAY NOW'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
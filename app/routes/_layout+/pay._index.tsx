import { useStripe, useElements,PaymentElement } from '@stripe/react-stripe-js'
import React from 'react';


const Index = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (stripe && elements) {
            await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: 'http://viediscopello.it/pay/success'
                }
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button>Complete Payment</button>
        </form>
    );
};

export default Index;
import { Form, useSearchParams } from "@remix-run/react";
import { useStripe, useElements,PaymentElement } from '@stripe/react-stripe-js'


const Index = () => {

    const stripe = useStripe();
   // const submit = useSubmit();
    const elements = useElements();
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email") || undefined

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // if (email === '') {
        //     console.error('Email is required');
        //     return;
        // }

        if (stripe && elements) {
            await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: 'http://localhost:3000/payticket/success',
                    receipt_email: email,
                }
            })
           // return submit(e.currentTarget)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name"/>
            <label>email</label>
            <input type="email" name="email" id="email"/>
            <PaymentElement />
            <button>Complete Payment</button>
        </Form>
    );
};

export default Index;

function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.');
}

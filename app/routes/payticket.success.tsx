import React from "react";
import { useLoaderData } from "react-router";



export default function Success() {
    const paymentIntent = useLoaderData();
    return (
        <>
        <h3>Thank you for your payment</h3>
        <pre>
            {JSON.stringify(paymentIntent, null, 2)}
        </pre>
        </>
    )
}
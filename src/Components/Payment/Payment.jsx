import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./Payment.module.css";

import $api from "../../Http";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51KfiHzAd95fmFuDb169xPzxUt0xU2R1aUWmkFDzK4sdJcItyEskEt7bnkQ3bz1xRoyOdd9ojb6dIRYSZbBPVKbil00gIkyDsny"
);

export default function Payment(props) {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    setClientSecret(props.client_secret);
  });
  useEffect(() => {
    /* $api
      .post("/create-payment-intent", { items: { id: "course" } })
      .then((response) => {
        console.log(response);
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => {
        console.log(error);
      });*/
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

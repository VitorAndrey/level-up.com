"use client";

import { Elements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "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",
);

export default function Payment() {
  const options = {
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <form>
        <PaymentElement />
        {/* <button>Submit</button> */}
        Tela de pagamento
      </form>
    </Elements>
  );
}

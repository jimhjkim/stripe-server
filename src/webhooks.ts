import { stripe } from "./";
import Stripe from "stripe";
import { Request, Response } from "express";

/**
 * Business logic for sepcific webhook event types
 */
const webhookHandlers = {
  "payment_intent.succeeded": async (data: Stripe.PaymentIntent) => {
    // Add your business logic here
  },
  "payment_intent.payment_failed": async (data: Stripe.PaymentIntent) => {
    // Add your business logic here
  },
};

/**
 * Validate the stripe webhook secret, then call the handler for the event type
 */
export const handleStripeWebHook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"];
  const event = stripe.webhooks.constructEvent(
    req["rawBody"],
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  );

  try {
    await webhookHandlers[event.type](event.data.object);
    res.send({ received: true });
  } catch (err) {
    console.error(err);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};

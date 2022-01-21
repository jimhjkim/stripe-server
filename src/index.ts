// Environment Variables (Stripe API Key)
import { config } from "dotenv";
if (process.env.NODE_ENV !== "production") {
  config();
}

// Initialize Stripe
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

# stripe-server

Node server for handling Stripe requests

## Getting Started

Install packages...

```bash
npm install
```

To run the development server...

```bash
npm run dev
```

## Testing Webhooks Locally

Install Stripe CLI

```bash
brew install stripe/stripe-cli/stripe
```

Trigger Webhook (e.g., Payment Intent)

```bash
stripe trigger payment.created
```

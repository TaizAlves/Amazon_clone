const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51HR4ifEWdJUDnXtI9hCE6qqnyAileLyHM3neYXPfpQbpmnrBxinuBRkinHMGUAvM5QM04ydnt4EKjNP41ugtPZ3m00eGZZAg4I');

// API

// - App config 
const app = express()

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// - API routes
app.get('/', (request, response) => response.status(200).send ('Hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment resquest received for this amouns=t >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example emdpoint 
// http://localhost:5001/clone-66464/us-central1/api

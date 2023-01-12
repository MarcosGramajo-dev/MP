const express = require('express');
const router = express.Router();

const paymentControllers = require('../Controllers/paymentsControllers');
const servicesPayment = require('../Services/servicesPayment');
const paymentInstance = new paymentControllers(new servicesPayment());

router.get('/payment', (req, res) => paymentInstance.getPaymentLink(req, res));

router.post('/payment', (req, res) => paymentInstance.postInfoLink(req, res));

module.exports = router;

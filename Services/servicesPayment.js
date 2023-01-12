const axios = require('axios');

class PaymentService {
  async createPayment(items) {
    const url = 'https://api.mercadopago.com/checkout/preferences';

    const body = {
      items,
      payer: {
        name: 'Juan',
        surname: 'Lopez',
        email: 'user@email.com',
        phone: {
          area_code: '11',
          number: '4444-4444',
        },
        identification: {
          type: 'DNI',
          number: '12345678',
        },
        address: {
          street_name: 'Street',
          street_number: 123,
          zip_code: '5700',
        },
      },
      back_urls: {
        success: `${process.env.URL}`,
        failure: `${process.env.URL}failure.html`,
        pending: `${process.env.URL}pending.html`,
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_methods: [
          {
            id: 'master',
          },
        ],
        excluded_payment_types: [
          {
            id: 'ticket',
          },
        ],
        installments: 6,
      },
      notification_url: 'https://www.your-site.com/ipn',
      statement_descriptor: 'MINEGOCIO',
      external_reference: 'Reference_1234',
    };

    const payment = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }
}

module.exports = PaymentService;

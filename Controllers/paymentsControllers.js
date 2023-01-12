class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(req, res) {
    try {
      const payment = await this.subscriptionService.createPayment();
      const linkPay = payment.init_point;
      return res.json(linkPay);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: 'Failed to get payment' });
    }
  }

  async postInfoLink(req, res) {
    const { arrayMP } = req.body;
    console.log(arrayMP)
    try {
      const data = await this.subscriptionService.createPayment(arrayMP)
      res.status(200).json(data)


    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: 'Failed to create payment' });
    }
  }
}

module.exports = PaymentController;

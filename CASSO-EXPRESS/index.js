const express = require('express');
const PayOS = require("@payos/node");

const payos = new PayOS("486088ac-32ec-4b2c-9d91-a7aac8cd18a6", "d357ac2d-9a13-49e0-b8e8-553a52835ec9", "ead873638ccd32545a7c9abb5746d9580433ae4c146740e002dbda27b0a379f1");

const app = express();
app.use(express.static('public'));
app.use(express.json());

const DOMAIN = 'http://localhost:8080';

app.post('/create-payment', async (req, res) =>
{
      const requestData = {
            orderCode: parseInt((Date.now() * 10000).toString().slice(-6)),
            amount: 10000,
            description: "Thanh toan don hang",
            items: [
                  {
                        name: "Bí Mật Của May Mắn",
                        quantity: 1,
                        price: 10000,
                  }
            ],
            cancelUrl: DOMAIN + "/cancel.html",
            returnUrl: DOMAIN + "/success.html",
      };
      const paymentLinkData = await payos.createPaymentLink(requestData);
      res.redirect(303, paymentLinkData.checkoutUrl);
});

app.get('/get-book', (req, res) =>
{
      const orderCode = req.query.orderCode;

      console.log(orderCode);

      // Some verification logic before sending the file link

      res.status(200).send({ data: 'https://drive.google.com/file/d/1DaoW9CH7ri29mHZ5Qtxl6uMo-wH3X4ol/view' });
});

app.listen(8080, () =>
{
      console.log('Server is running on port 8080');
});
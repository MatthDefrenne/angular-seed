const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var mailjet = require('node-mailjet').connect('36a3d81be137f529167c7d0231fce037', '192a40d8e4f50aef301882e97a531413');
const path = require('path');
var sslRedirect = require('heroku-ssl-redirect');

app.use(sslRedirect());
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json())

sendMail = function(order) {
  var request = mailjet
  .post("send")
  .request({
      "FromEmail":"matthieu.defrenne@outlook.fr",
      "FromName":"Nouvelle commande",
      "Subject":"Nouvelle commande",
      "Text-part": order,
      "Recipients":[
              {
                      "Email": "matthieu.defrenne@gmail.com"
              }
      ]
  });
}

app.post('/order', function(req, res) {
  var order = req.body.order;
  sendMail(JSON.stringify(order));
  const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "matthieu.defrenne@outlook.fr",
            "Name": "Veggbox"
          },
          "To": [
            {
              "Email": order.email,
              "Name": order.name
            }
          ],
          "TemplateID": 244658,
          "TemplateLanguage": true,
          "Subject": "Nouvelle commande",
          "Variables": {
        "name": order.name
      }
        }
      ]
    })
    request
    .then((result) => {
      res.end();
      console.log(result.body)
    })
    .catch((err) => {
      console.log(err.statusCode)
    })
});

app.get('/OneSignalSDKUpdaterWorker.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/assets/other/OneSignalSDKUpdaterWorker.js'));
});

app.get('/OneSignalSDKWorker.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/assets/other/OneSignalSDKWorker.js'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});



app.listen(process.env.PORT || 8080);
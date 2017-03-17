var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_KPWOO7KXnucElF9fTEfB6dsh');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/charge', function(req, res, next) {
  res.render('charge');
});

router.post('/charge', function(req, res, next) {
  var stripeToken = req.body.stripeToken;
  console.log('stripoToken: ', stripeToken);
  var amount = 40 * 100;

  // ensure amount === actual product amount to avoid fraud

  stripe.charges.create({
    card: 'tok_19wizDILi2F4xpAD9yP5BdX6',
    currency: 'usd',
    amount: amount
  },
  function(err, charge) {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      res.send('success');
    }
  });
});

module.exports = router;

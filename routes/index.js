var express = require('express');
var router = express.Router();
var Nexmo = require('nexmo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PanicButton' });
});

router.get('/bell', function(req, res, next) {
  res.render('doorbell', { title: 'Doorbell' });
});

/* Panicbutton */

router.get('/panic/:person?', function(rec, res, next) {
    
var nexmo = new Nexmo({
  apiKey: '534f15ef',
  apiSecret: '5e701ff1d463f629'
});

nexmo.message.sendSms(
  '12015946976', '12697693161', 'A PanicButton has been pressed!',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );
 

res.redirect("/");

});

/* ring bell */

router.get('/ring', function(rec, res, next) {
    
var nexmo = new Nexmo({
  apiKey: '534f15ef',
  apiSecret: '5e701ff1d463f629'
});

nexmo.message.sendSms(
  '12015946976', '12697693161', '[Doorbell API] Someone would like to enter your room.',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );
 

res.redirect("/bell");

});

module.exports = router;

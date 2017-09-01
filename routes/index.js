var express = require('express');
var router = express.Router();
var twilio = require('twilio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PanicButton' });
});

router.get('/panic/:person?', function(rec, res, next) {
    
var client = new twilio('AC89a634a3a642402e68f4b5a7fddcf1ba', '7d0730073645400f7dc9e58551db20b4');
 
// Send the text message.
client.messages.create({
  to: '2697693161',
  from: '2694210175',
  body: 'PanicButton has been activated!'
});

res.redirect("/");

});

module.exports = router;

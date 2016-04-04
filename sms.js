
/* eslint-disable no-console */
console.log('config', require('./config'));

var config = require('./config');
var twilio = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

twilio.messages.create({
  body: 'Hi Nick!',
  to: config.myPhone,
  from: config.twilio.from,
  mediaUrl: 'http://www.placecage.com/200/300'
}, function createCb(err, data) {
  if (err) return console.log('error sending message!', err);
  return console.log('sent message', data);
});
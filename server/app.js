/* eslint-disable no-console */
var express = require('express');
var app = new express.Router();

app.get('/sms', function getCb(req, res) {
	console.log(req.body);
  res.send({ ok: true });
});

module.exports = app;


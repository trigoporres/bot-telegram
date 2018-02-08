const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
require('dotenv').config()

const token = process.env.token_bot;
const bot   = new TelegramBot(token, {polling: true});

//require('./msgSystem')(bot)
require('./emt.js')(bot)

exports.helloHttp = function helloHttp (req, res) {
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working


  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};







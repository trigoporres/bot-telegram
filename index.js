const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
require('dotenv').config()

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

const token = process.env.token_bot;
const bot   = new TelegramBot(token, {polling: true});

//require('./msgSystem')(bot)
require('./emt.js')(bot)







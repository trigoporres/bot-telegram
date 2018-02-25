const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
require('dotenv').config()

const token = process.env.token_bot;
const bot   = new TelegramBot(token, {polling: true});

require('./msgSystem')(bot)
require('./emt.js')(bot)









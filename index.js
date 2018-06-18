const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
require('dotenv').config()

const token = process.env.token_bot;
const bot   = new TelegramBot(token, {polling: true});

//require('./msgSystem')(bot)
require('./emt.js')(bot)

const kyogre = [
  {
    cp: '2328',
    porcentaje: '100%'
  },
  {
    cp: '2323',
    porcentaje: '98%'
  }
]

bot.on('message', (msg) => {
  console.log(msg)
  if(msg.text.includes("Kyogre")){
    const chatId = msg.chat.id;
    const info = "¿Esta potenciado?"
    bot.sendMessage(chatId, info)
    bot.on('message', (msg) => {
      if(msg.text == "Si"){
        const cp = "¿cual es su cp?"
        bot.sendMessage(chatId, cp)
      }
    })
    bot.on('message', (msg) => {
      kyogre.forEach( element => {
        console.log(element)
        if(msg.text == element.cp){
          const result = "tu kyogre es de" + element.porcentaje
          bot.sendMessage(chatId, result)
        }
      })
    })
  }
})

module.exports = (bot) => {
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// bot.onText(/\/love/, function onLoveText(msg) {
//   const opts = {
//     reply_to_message_id: msg.message_id,
//     reply_markup: JSON.stringify({
//       keyboard: [
//         ['Yes, you are the bot of my life ❤'],
//         ['No, sorry there is another one...']
//       ]
//     })
//   };
//   bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
// });

bot.onText(/\/help/, (msg) => {
  res = "Quiero ayudarte a saber cuando vendra tu autbous, para ello escribe Parada espacio y el numero de la parada. Ejemplo: Parada 2927"
  bot.sendMessage(msg.chat.id, res);
  });

  // PROBARRRRRRRRRRRR

  bot.on('message', (msg) => {
    
    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    });
        
    });

    bot.on('message', (msg) => {
      var Hi = "hi";
      if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
          bot.sendMessage(msg.chat.id, "Hello dear user");
      }
      var bye = "bye";
      if (msg.text.toString().toLowerCase().includes(bye)) {
          bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
      }    
      var robot = "I'm robot";
      if (msg.text.indexOf(robot) === 0) {
          bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
      }
      });
}

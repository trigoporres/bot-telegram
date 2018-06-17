module.exports = (bot) => {
  emtmadApi = require('emtmad-bus-times-node');
  emtmadApi.initAPICredentials(process.env.token_emt,process.env.pass_emt);

  bot.on('message', (msg) => {
    //console.log(msg)
    if(msg.text.includes("Parada")){  
      let busStopNumber = msg.text.replace("Parada",'');
  
      emtmadApi.getIncomingBusesToStop( busStopNumber, (output) => {
        if (output.status == 200 && output.arrives != undefined){
  
          const chatId = msg.chat.id;
          console.log(output.arrives)
          let info = "";

          output.arrives.forEach(element => {
            info += (chatId, " El proximo autobus de la linea " +element.lineId + " con destino " + element.destination + " va a tardar " + Math.trunc(element.busTimeLeft/60) + " minutos y le quedan " + element.busDistance + " metros para llegar \n\n")
          });
          bot.sendMessage(chatId, info)
          //bot.sendLocation(chatId,output.arrives[i].latitude,output.arrives[i].longitude);
        }
        else if (output.status == 400){
          console.log(output.error);
        }
        else{
          console.log("unknown error");
        }
      });  
    }
  })
}
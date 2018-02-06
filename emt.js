module.exports = (bot) => {
  emtmadApi = require('emtmad-bus-times-node');
  emtmadApi.initAPICredentials(process.env.token_emt,process.env.pass_emt);

  bot.on('message', (msg) => {
    console.log(msg)
    if(msg.text.includes("Parada")){  
      var busStopNumber = msg.text.replace("Parada",'');
  
      emtmadApi.getIncomingBusesToStop( busStopNumber, (output) => {
        if (output.status == 200 && output.arrives != undefined){
  
          const chatId = msg.chat.id;
          console.log(output.arrives)
          
          for(var i = 0; i < output.arrives.length; i++){
            bot.sendMessage(chatId, i + " El proximo autobus de la linea " +output.arrives[i]     .lineId + " con destino " + output.arrives[i].destination + " va a tardar " + Math.trunc(output.arrives[i].busTimeLeft/60) + " minutos " + output.arrives[i].busDistance + " metros")
            //bot.sendLocation(chatId,output.arrives[i].latitude,output.arrives[i].longitude);
            console.log("prueba" + i)
          }
  
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
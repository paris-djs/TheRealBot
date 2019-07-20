const Discord = require("discord.js")
const ms = require("ms");

module.exports.run = async(client, message, args, la) => {
    if(la === "de") {
    let mutetime = args[0];
    if(!mutetime) return message.channel.send(`
Du musst eine Zeit angeben!`);
  

 await message.channel.send(`
Der Timer wurde gestartet! **${ms(ms(mutetime))} verbleiben!**`);


    setTimeout(function(){
      message.channel.send(`
Der Timer ist abgelaufen, ${message.author}`);
    }, ms(mutetime));
}
if(la === "us") {
    let mutetime = args[0];
    if(!mutetime) return message.channel.send(`
You have to specify a time!`);
  

 await message.channel.send(`
The timer started! **${ms(ms(mutetime))} remaining!**`);

  
    setTimeout(function(){
      message.channel.send(`
The timer has expired, ${message.author}`);
    }, ms(mutetime));
}
}
module.exports.help = {
    name: "timer"
}
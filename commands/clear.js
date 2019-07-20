const Discord = require("discord.js");

module.exports.run = async (bot, message, args, la) => {

  if(la === "de") {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_MESSAGES**`);     
  if(!args[0]) return message.channel.send("Bitte gib eine Zahl an!");
  if(args[0] > 99) return message.channel.send(`Du kannst nur maximal 99 Nachrichten löschen!`)
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} Nachrichten wurde erfolgreich gelöscht!`).then(msg => msg.delete(2000));
});
 
}
  if(la === "us") {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_MESSAGES**`);     
        if(!args[0]) return message.channel.send("You have to specify a number!");
        if(args[0] > 99) return message.channel.send(`You can delete a maximum of 99 messages!`)
        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} successfully deleted!`).then(msg => msg.delete(2000));
      });
  }

}

module.exports.help = {
  name: "clear",
  aliases: []
}
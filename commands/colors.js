const Discord = require("discord.js");


module.exports.run = async (client, message, args, la) => {
  if(la === "de") {
   let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
   if(colors.size < 1) return message.channel.send(`
Es sind keine Farben auf dem Server!     
   `);

   message.channel.send(colors.array().join(" "));
}
if(la === "us") {
  let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
  if(colors.size < 1) return message.channel.send(`
There are no colors on the server!     
  `);

  message.channel.send(colors.array().join(" "));
}
}


module.exports.help = {
    name: "colors",
    aliases: []
  }
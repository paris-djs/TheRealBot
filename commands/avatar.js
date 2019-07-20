const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>  {
    if(args[0]) {
    let member = message.mentions.members.first();
     let embed = new Discord.RichEmbed()
     .setAuthor(`${user.username}`)
     .setThumbnail(user.displayAvatarURL)
     .addField(`URL:`, user.avatarURL)
     .setColor('RANDOM')
  message.channel.send(embed)
  return;
}
let embed = new Discord.RichEmbed()
.setAuthor(`${message.author.username}`)
.setThumbnail(message.author.displayAvatarURL)
.addField(`URL:`, message.author.avatarURL)
.setColor('RANDOM')
message.channel.send(embed)
}

module.exports.help = {
    name: "avatar",
    aliases: []
}

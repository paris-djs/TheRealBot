const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: BAN_MEMBERS**
    `);    
    if(!bUser) return message.channel.send(`
Du musst einen Spieler angeben!`);
    let bReason = args.slice(1).join(" ") || "Keinen";    
    
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`
Ich kann diesen Spieler nicht Bannen!`);

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Ban**")
    .setColor("#bc0000")
    .addField("Gebannter Spieler", `${bUser}`)
    .addField("Gebannt von", `<@${message.author.id}>`)
    .addField("Gebannt in", message.channel)
    .addField("Zeit", message.createdAt)
    .addField("Grund", bReason);
    let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
    if(!log[message.guild.id]){
      return message.channel.send(`
Ein Server Admin muss mit !setup ein Log Kanal festlegen
      `)
    }
    let lchannel = log[message.guild.id].logchannel
    let logchannel = message.guild.channels.find(r => r.name === lchannel);
    if(!lchannel) return message.channel.send(`
Ich konnte den Kanal **${lchannel}** nicht finden! 
      `)

    message.guild.member(bUser).ban(bReason);
    logchannel.send(banEmbed);
}
if(la === "us") {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`
You do not have rights for this! **Missing Rights: BAN_MEMBERS**
    `);    
    if(!bUser) return message.channel.send(`
You have to specify a player!`);
    let bReason = args.slice(1).join(" ") || "Keinen/None";    
    
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`
I can't ban this player!`);

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Ban**")
    .setColor("#bc0000")
    .addField("Gebannter Spieler/Banned player", `${bUser}`)
    .addField("Gebannt von/Banned by", `<@${message.author.id}>`)
    .addField("Gebannt in/Banned in", message.channel)
    .addField("Zeit/Time", message.createdAt)
    .addField("Grund/Reason", bReason);
    let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
    if(!log[message.guild.id]){
      return message.channel.send(`
A server admin has to set the log chanel with !setup
      `)
    }
    let lchannel = log[message.guild.id].logchannel
    let logchannel = message.guild.channels.find(r => r.name === lchannel);
    if(!lchannel) return message.channel.send(`
I can't find the channel **${lchannel}**
      `)

    message.guild.member(bUser).ban(bReason);
    logchannel.send(banEmbed);
}
}


module.exports.help = {
  name:"ban",
  aliases: []
}

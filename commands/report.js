const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, la) => {
    if(la === "de") {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(`
Du musst einen Spieler angeben!`);
    let rreason = args.slice(1).join(" ") || "Keinen";

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reporteter Spieler", `${rUser}`)
    .addField("Reportet von", `${message.author}`)
    .addField("Reportet in", message.channel)
    .addField("Zeit", message.createdAt)
    .addField("Grund", rreason);

    let report = JSON.parse(fs.readFileSync("./reports.json", "utf8"));
    if(!report[message.guild.id]){
      return message.channel.send(`
Ein Server Admin muss mit !setup ein Report Kanal festlegen.
      `)
    }
    let rchannel = report[message.guild.id].reportchannel
    let reportchannel = message.guild.channels.find(r => r.name === rchannel);
    if(!reportchannel) return message.channel.send(`
Ich konnte den Kanal **${rchannel}** nicht finden!
`)
    message.delete();
    reportchannel.send(reportEmbed);
    }
    if(la === "us") {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send(`
🇺🇸 You have to specify a player!`);
        let rreason = args.slice(1).join(" ") || "None";
    
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#15f153")
        .addField("Reported player", `${rUser}`)
        .addField("Reported by", `${message.author}`)
        .addField("Reported in", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", rreason);
    
        let report = JSON.parse(fs.readFileSync("./reports.json", "utf8"));
        if(!report[message.guild.id]){
          return message.channel.send(`
A server admin has to set the report chanel with !setup
          `)
        }
        let rchannel = report[message.guild.id].reportchannel
        let reportchannel = message.guild.channels.find(r => r.name === rchannel);
        if(!reportchannel) return message.channel.send(`
I can't find the channel **${rchannel}**!
    `)
        message.delete();
        reportchannel.send(reportEmbed);
    }

}
 
module.exports.help = {
  name: "report",
  aliases: []
}

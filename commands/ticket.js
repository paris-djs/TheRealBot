
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, la) => {
  if(la === "de") {
 let problem = args[0];
 let text = args.slice(1).join(" ");
 if(!problem) return message.channel.send(`
Du musst das Problem angeben!
 `)
 if(!text) return message.channel.send(`
Du musst die Beschreibung des Problems angeben!
`);
const embed = new Discord.RichEmbed()
.setAuthor("Ticket")
.addField(`Spieler`, message.author.username)
.addField(`Spieler ID`, message.author.id)
.addField(`Problem`, problem)
.addField(`Beschreibung`, text)
let ticket = JSON.parse(fs.readFileSync("./tickets.json", "utf8"));
if(!ticket[message.guild.id]){
  return message.channel.send(`
Ein Server Admin muss mit !setup ein Ticket Kanal festlegen
  `)
}
let lchannel = ticket[message.guild.id].ticketchannel
let tickets = message.guild.channels.find(r => r.name === lchannel);
if(!tickets) return message.channel.send(`
Ich konnte den Kanal **${lchannel}** nicht finden! 
  `)
tickets.send(embed)
message.channel.send("Das Ticket wurde abgesendet!")
return;
    }
    if(la === "us") {
      let problem = args[0];
      let text = args.slice(1).join(" ");
      if(!problem) return message.channel.send(`
     🇺🇸 You have to specify the problem!
     🇩🇪 Du musst das Problem angeben!
      `)
      if(!text) return message.channel.send(`
     🇺🇸 You have to specify the description of the problem!
     🇩🇪 Du musst die Beschreibung des Problems angeben!
     `);
     const embed = new Discord.RichEmbed()
     .setAuthor("Ticket")
     .addField(`Player`, message.author.username)
     .addField(`Player ID`, message.author.id)
     .addField(`Problem`, problem)
     .addField(`Description`, text)
     let ticket = JSON.parse(fs.readFileSync("./tickets.json", "utf8"));
     if(!ticket[message.guild.id]){
       return message.channel.send(`
A server admin has to set the ticket chanel with !setup
       `)
     }
     let lchannel = ticket[message.guild.id].ticketchannel
     let tickets = message.guild.channels.find(r => r.name === lchannel);
     if(!tickets) return message.channel.send(`
I can't find the channel **${lchannel}** 
       `)
     tickets.send(embed)
     message.channel.send("The ticket has been sent!")
    }
  }
module.exports.help = {
  name: "ticket",
  aliases: []
}

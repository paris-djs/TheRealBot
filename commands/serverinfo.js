const Discord = require("discord.js");
const fs = require("fs");


module.exports.run = async (bot, message, args, la) => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: "!"
    }
  }
  let prefix = prefixes[message.guild.id].prefixes;
  if(la === "de") {
let embed = new Discord.RichEmbed()
       .setColor("0xffffff")
       .setTitle(`${message.guild} Serverinfo`)
       .addField("Server ID", message.guild.id, true)
       .addField("Owner ID", message.guild.ownerID, true)
       .addField("Rollen", message.guild.roles.size, true)
       .addField("Region", message.guild.region, true)
       .addField("Spieler", message.guild.memberCount, true)
       .addField("Bot Server Prefix", prefix, true)
       .setFooter("Der Server wurde erstellt am:")
       .setTimestamp(message.guild.createdAt)
    .setThumbnail(message.guild.iconURL)
message.channel.send(embed)
    
}
if(la === "us") {
const embed2 = new Discord.RichEmbed()
.setTitle(`${message.guild} serverinfo`)
.addField("Server ID", message.guild.id, true)
.addField("Owner ID", message.guild.ownerID, true)
.addField("Roles", message.guild.roles.size, true)
.addField("Region", message.guild.region, true)
.addField("Players", message.guild.memberCount, true)
.addField("Bot server prefix", prefix, true)
.setFooter("The server was created at:")
.setTimestamp(message.guild.createdAt)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed2)
}
}

      module.exports.help = {
        name: "serverinfo",
        aliases: []
      }
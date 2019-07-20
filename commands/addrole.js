const Discord = require("discord.js");


module.exports.run = async (client, message, args, la) => {
if(la === "de") {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_ROLES**
`); 
let member = message.mentions.members.first();
if(!member) return message.channel.send(`
Du musst einen Spieler angeben!`)  
let rrole = args[1];
if(!rrole) return message.channel.send(`
Du musst eine Rolle angeben!`)
let role = message.guild.roles.find(r => r.name === `${rrole}`);


member.addRole(role);
message.channel.send(`
Der Spieler ${member} hat nun die Rolle ${role}!`)
}
if(la === "us") {
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_ROLES**
`); 
let member = message.mentions.members.first();
if(!member) return message.channel.send(`
You have to specify a player!`)  
let rrole = args[1];
if(!rrole) return message.channel.send(`
You have to specify a role!`)
let role = message.guild.roles.find(r => r.name === `${rrole}`);


member.addRole(role);
message.channel.send(`
The player ${member} has now the role ${role}!`)
}
}
module.exports.help = {
    name: "addrole",
    aliases: []
  }
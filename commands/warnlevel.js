const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const config = require("../config.json");

module.exports.run = async (bot, message, args, la) => {
  if(la === "de") {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_ROLES**`)
   let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
   if(!wUser) return message.channel.send(`
Du musst einen Spieler angeben!
         `);
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  

  let warnlevel = warns[wUser.id].warns;

  message.channel.send(`
<@${wUser.id}> hat ${warnlevel} Warns!
`);

}
if(la === "us") {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_ROLES**`)
       let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
       if(!wUser) return message.channel.send(`
You have to specify a player!
             `);
      if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
      };
      
    
      let warnlevel = warns[wUser.id].warns;
    
      message.channel.send(`
<@${wUser.id}> has ${warnlevel} warns!   
`);
}
}

module.exports.help = {
  name: "warns",
  aliases: []
}
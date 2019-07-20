const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args, la) => {

  if(la === "de") {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_ROLES**
      `);     
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send(`r!
Ich kann diesen Spieler nicht finden!
  `);
  if(tomute.hasPermission("MANAGE_ROLES")) return message.channel.send(`
Ich kann diesen Spieler nicht Muten!`);
let muterole = message.guild.roles.find(`name`, "Muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.channel.send(`
Du musst eine Zeit angeben!`);

  await(tomute.addRole(muterole.id));
  message.channel.send(`
<@${tomute.id}> wurde für ${ms(ms(mutetime))} gemutet!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`
<@${tomute.id}> wurde entmutet!`);
  }, ms(mutetime));
}
if(la === "us") {
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_ROLES**
        `);     
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(`
I can't find this player!
    `);
    if(tomute.hasPermission("MANAGE_ROLES")) return message.channel.send(`
I can't mute this player!`);
  let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    let mutetime = args[1];
    if(!mutetime) return message.channel.send(`
You have to specify a time!`);
  
    await(tomute.addRole(muterole.id));
    message.channel.send(`
<@${tomute.id}> was muted for ${ms(ms(mutetime))}!
`);
  
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`
<@${tomute.id}> was unmuted`);
    }, ms(mutetime));
  }
}

module.exports.help = {
  name: "mute",
  aliases: []
}
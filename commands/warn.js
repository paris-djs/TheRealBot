const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const config = require("../config.json");

module.exports.run = async (bot, message, args, la) => {

  if(la === "de") {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_ROLES**
      `);     let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(`
Du musst einen Spieler angeben!
      `);
let reason = args.slice(1).join(" ") || "Keinen";

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnembed = new Discord.RichEmbed()
  .setAuthor("Warns")
  .setColor("#fc6400")
  .addField("Gewarnter Spieler", `<@${wUser.id}>`)
  .addField("Gewarnt in", message.channel)
  .addField("Warns", warns[wUser.id].warns)
  .addField("Grund", reason);

  let warnchannel = message.guild.channels.find(`name`, "log");
  if(!warnchannel) return message.reply(`
Ich kann den Channel #log nicht finden!`);

  warnchannel.send(warnembed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(r => r.name === `Muted`);
    if(!muterole) return message.reply(`
Ich kann die Rolle #log nicht finden!`);

    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`    
<@${wUser.id}> wurde gemutet weil er 2 Warns hat.
    `);

    setTimeout(function(){
      wUser.removRole(muterole.id)
      message.channel.send(`
<@${wUser.id}> wurde entmutet!
          `);
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 5){
    message.guild.member(wUser).ban(reason);
    message.reply(` 
<@${wUser.id}> wurde gebannt weil er 5 Warns hat.
`);
  }
}
if(la === "us") {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_ROLES**
          `);     let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      if(!wUser) return message.channel.send(`
You have to specify a player 
          `);
    let reason = args.slice(1).join(" ") || "None";
    
      if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
      };
    
      warns[wUser.id].warns++;
    
      fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
      });
    
      let warnembed = new Discord.RichEmbed()
      .setAuthor("Warns")
      .setColor("#fc6400")
      .addField("Warned player", `<@${wUser.id}>`)
      .addField("Warned in", message.channel)
      .addField("Warns", warns[wUser.id].warns)
      .addField("Reason", reason);
    
      let warnchannel = message.guild.channels.find(`name`, "log");
      if(!warnchannel) return message.reply(`
I can't find the channel #log!`);
    
      warnchannel.send(warnembed);
    
      if(warns[wUser.id].warns == 2){
        let muterole = message.guild.roles.find(r => r.name === `Muted`);
        if(!muterole) return message.reply(`
I can't find the role @Muted!`);
    
        let mutetime = "30m";
        await(wUser.addRole(muterole.id));
        message.channel.send(`
<@${wUser.id}> was muted because he has 2 warns.    
        `);
    
        setTimeout(function(){
          wUser.removeRole(muterole.id)
          message.channel.send(`
<@${wUser.id}> was unmuted!
              `);
        }, ms(mutetime))
      }
      if(warns[wUser.id].warns == 5){
        message.guild.member(wUser).ban(reason);
        message.reply(`
<@${wUser.id}> was banned because he has 5 warns.    
    `);
      }
}
}

module.exports.help = {
  name: "warn",
  aliases: []
}
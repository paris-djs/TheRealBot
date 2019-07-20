const Discord = require('discord.js');
const moment = require('moment');
const xp = require("../xp.json")
const msg = require("../message.json")
const fs = require("fs");
let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));
const coins = require("../coins.json")

module.exports.run = async(client,message,args,la) => {
    
let member = message.mentions.members.first() || message.member,
  user = member.user;
if(!xp[user.id]) {
        xp[user.id] = {
            xp: 0,
            level: 1
        }
    }
    if(!msg[user.id]) {
        msg[user.id] = {
           message: "Newcomer"
        }
    }
    if(!coins[user.id]) {
        coins[user.id] = {
           message: 0
        }
    }
 
    if(premium[user.id]) {
        premium[user.id] = {
           premium: `https://sszirmak.files.wordpress.com/2017/07/premium.png?w=549`
        }
    }
    if(!premium[user.id]) {
        premium[user.id] = {
           premium: `http://cdn.onlinewebfonts.com/svg/img_328211.png`
        }
    }
  

if(la === "de") {
    var game = user.presence.game || { name: "nichts" };
    game.name = game.name.toString();
   
    const embed = new Discord.RichEmbed()
    .setAuthor(`${user.tag} (${user.id}) [Rank: ${msg[user.id].message}]`, user.avatarURL)
        .setDescription(`Level: ${xp[user.id].level} XP: ${xp[user.id].xp}`)
        .setColor(`RANDOM`)
        .setThumbnail(`${premium[user.id].premium}`)
.addField("Server:", message.guild.name, true)
.addField('Status:', user.presence.status, true)
.addField("Spielt:", game.name, true)
.addField("Coins:", coins[user.id].coins, true)
        .addField('Beigetreten am:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField("Account erstellt am", user.createdAt, true)
        .addField('Rollen:', member.roles.map(r => `${r}`).join(' | '), true)
        
        .setTimestamp();
message.channel.send(embed)
}
if(la === "us") {
    var game = user.presence.game || { name: "nothing" };
    game.name = game.name.toString();
    
    const embed = new Discord.RichEmbed()
    .setAuthor(`${user.tag} (${user.id}) [Rank: ${msg[user.id].message}]`)
        .setDescription(`Level: ${xp[user.id].level} XP: ${xp[user.id].xp}`)
        .setColor(`RANDOM`)
        .setThumbnail(`${premium[user.id].premium}`)
.addField("Server:", message.guild.name, true)
.addField('Status:', user.presence.status, true)
.addField("Playing:", game.name, true)
.addField("Coins:", coins[user.id].coins, true)
        .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField("Account created at", message.author.createdTimestamp, true)
        .addField('Roles:', member.roles.map(r => `${r}`).join(' | '), true)
  
        .setTimestamp();
message.channel.send(embed)
}
}
module.exports.help = {
    name: "userinfo"
}
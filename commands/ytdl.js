const Discord = require("discord.js")
 var fs = require('fs');
 var youtubedl = require('youtube-dl');
 const ms = require("ms")
 const ytdl = require('ytdl-core');
 let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));
module.exports.run = async (client,message,args,la) => {
    if(la === "de") {
        if(!premium[message.author.id]) {
            message.channel.send("Du benötigst Premium, um diesen Command nutzen zu können! Kauf dir Premium im SHOP: **!shop**.")
            return;
        }
let url = args[0];
if(!url) return message.channel.send("Du musst eine YouTube URL angeben!")
if(!url.includes("youtube.com")) return message.channel.send("Du musst eine richtige YouTube URL angeben (nicht youtube.de sondern .com)!")
let embed24 = new Discord.RichEmbed()
.setAuthor(`YouTube Downloader`)
.setDescription(`Das Video wird heruntergeladen...`)
let msg = await message.channel.send(embed24) 
setTimeout(function(){
    let embed = new Discord.RichEmbed()
    .setAuthor(`YouTube Downloader`)
    .setDescription(`Konvertiere zu MP3...`)
    msg.edit(embed);
  }, ms('3s'));
  setTimeout(function(){


  }, ms('2s'));
ytdl(url, { filter: (format) => format.container === 'm4a' })
    .pipe(fs.createWriteStream('video.mp3'));
    setTimeout(function(){
        message.channel.send({
            files: ['./video.mp3']
        });
        msg.delete();
      }, ms('7s'));
  }
  if(la === "fr") {
    if(!premium[message.author.id]) {
        message.channel.send("Vous avez besoin de Premium pour utiliser cette commande! Acheter Premium dans le SHOP : **!shop**.")
        return;
    }
let url = args[0];
if(!url) return message.channel.send("Vous devez entrer une URL YouTube!")
if(!url.includes("youtube.com")) return message.channel.send("Vous devez entrer une véritable URL YouTube (pas youtube.de mais .com) !")
let embed24 = new Discord.RichEmbed()
.setAuthor(`Téléchargeur YouTube`)
.setDescription(`La vidéo est en cours de téléchargement...`)
let msg = await message.channel.send(embed24) 
setTimeout(function(){
let embed = new Discord.RichEmbed()
.setAuthor(`Téléchargeur YouTube`)
.setDescription(`Convertir en MP3...`)
msg.edit(embed);
}, ms('3s'));
setTimeout(function(){


}, ms('2s'));
ytdl(url, { filter: (format) => format.container === 'm4a' })
.pipe(fs.createWriteStream('video.mp3'));
setTimeout(function(){
    message.channel.send({
        files: ['./video.mp3']
    });
    msg.delete();
  }, ms('7s'));
}
if(la === "us") {
    if(!premium[message.author.id]) {
        message.channel.send("You need Premium to use this command. Buy Premium in the SHOP: **!shop**.")
        return;
    }
    let url = args[0];
    if(!url) return message.channel.send("Du musst eine YouTube URL angeben!")
    if(!url.includes("youtube.com")) return message.channel.send("You have to specify a right URL (not youtube.de rather .com)!")
    let embed24 = new Discord.RichEmbed()
    .setAuthor(`YouTube Downloader`)
    .setDescription(`The Video is downloading...`)
    let msg = await message.channel.send(embed24) 
    setTimeout(function(){
        let embed = new Discord.RichEmbed()
        .setAuthor(`YouTube Downloader`)
        .setDescription(`Converting to MP3...`)
        msg.edit(embed);
      }, ms('3s'));
      setTimeout(function(){
    
    
      }, ms('2s'));
    ytdl(url, { filter: (format) => format.container === 'm4a' })
        .pipe(fs.createWriteStream('video.m4a'));
        setTimeout(function(){
            message.channel.send({
                files: ['./video.m4a']
            });
            msg.delete();
          }, ms('7s'));
      
    }
}
module.exports.help = {
    name: "ytdl"
}


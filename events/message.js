const Discord = require("discord.js");
const fs = require("fs");
const mm = require("../mm.json")
const ad = require("../ad.json")

module.exports = (client, message) => {
   





    const swearWords = ["janistdoof","lappen", "idiot", "sex", "hurensohn", "huansohn", "hure", "arsch", "arschloch", "uhrensohn", "fick", "ficken", "pisser", "pissa", "behindert", "bitch"];
    if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
      if(message.guild.id === "264445053596991498") return;
      message.delete();
      message.channel.send(`
Please do not use such words, ${message.author}!`).then(msg => {msg.delete(5000)});
return;
    }

     
    

}


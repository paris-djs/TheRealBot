const Discord = require("discord.js");
const fs = require("fs");
const mm = require("../mm.json")
const ad = require("../ad.json")

module.exports = (client, message) => {
   
if(!ad[message.guild.id]) {
    ad[message.guild.id] = {
        c: "Werbung"
    }
}
let adr = ad[message.guild.id].c
if(!adr) return;
let adrole = message.guild.roles.find(`name`, `${adr}`);
if(!adrole) return;

    const swearWordss = ["discord.gg", "https", "http", "www"];
    if( swearWordss.some(word => message.content.toLowerCase().includes(word)) ) {
      if(message.author.id === "502923245519896577") return;
      if(message.member.roles.has(adrole.id)) return;
      message.delete();
      message.channel.send(`
Please don't make advertising, ${message.author}!`).then(msg => {msg.delete(5000)});
return;
    }




    const swearWords = ["janistdoof","lappen", "idiot", "sex", "hurensohn", "huansohn", "hure", "arsch", "arschloch", "uhrensohn", "fick", "ficken", "pisser", "pissa", "behindert", "bitch"];
    if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
      if(message.guild.id === "264445053596991498") return;
      message.delete();
      message.channel.send(`
Please do not use such words, ${message.author}!`).then(msg => {msg.delete(5000)});
return;
    }

     
    

}


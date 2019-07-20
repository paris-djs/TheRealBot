const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args, la) => {
  if(la == "de") {
  if(!coins[message.author.id]){
    return message.channel.send(`
Du hast keine Coins!`)
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let gc = args[1];
  if(!pUser) return message.channel.send(`
Du musst den User angeben!  
        `)
  if(!gc) return message.channel.send(`
🇩🇪 Du musst die Anzahl angeben!  
    `)
    
  if (gc.includes("-")) return message.channel.send(`
Benutze keine Minus Zahlen`);
  const admins = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if(!admins.some(word => args[1].includes(word)))  {
  return message.channel.send("Du kannst nur Zahlen payen..")
  }
  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[1]) return message.reply(`
🇩🇪 Du hast nicht so viele Coins!
    `);

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`
🇩🇪 ${message.author} hat ${pUser} ${args[1]} Coin(s) gegeben.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });
return;
  }
if(la === "us") {
if(!coins[message.author.id]){
  return message.channel.send(`
You do not have any coins!`)
}

let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
let gc = args[1];
if(!pUser) return message.channel.send(`
You have to specify the user! 
      `)
if(!gc) return message.channel.send(`
You have to specify the number! 
  `)
  
if (gc.includes("-")) return message.channel.send(`
Do not use - numbers!`);
const admins = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(admins.some(word => args[1].includes(word)))  {
return message.channel.send("You can only pay numbers..")
}
if(!coins[pUser.id]){
  coins[pUser.id] = {
    coins: 0
  };
}

let pCoins = coins[pUser.id].coins;
let sCoins = coins[message.author.id].coins;

if(sCoins < args[1]) return message.reply(`
You do not have so much coins!
  `);

coins[message.author.id] = {
  coins: sCoins - parseInt(args[1])
};

coins[pUser.id] = {
  coins: pCoins + parseInt(args[1])
};

message.channel.send(`
${message.author} gave ${pUser} ${args[1]} coin(s).`);

fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if(err) cosole.log(err)
});
}
}

module.exports.help = {
  name: "pay",
  aliases: []
}
const Discord = require("discord.js");
const superagent = require("superagent");
const cleverbot = require("cleverbot.io"),
bot = new cleverbot('sZQughyezU2Le61U','Be1wejtsLzpf2O0cdVK7qT9mlyu8Zgs6');
bot.setNick('zLI5pgCY');
const fs = require("fs");

module.exports.run = async(client, message, args, la) => {
if(la === "de") {
    let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));
    if(!premium[message.author.id]) {
        message.channel.send("Du hast kein Premium!")
        return;
    }
    let question = args.slice(0).join(" ");
    if(!question) return message.channel.send(`
Du musst eine Nachricht angeben!
    `)
await message.channel.startTyping();
bot.ask(`${question}`, function (err, response) {
         message.channel.send(response)
         message.channel.stopTyping();
      });
    }
    if(la === "fr") {
        let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));
        if(!premium[message.author.id]) {
            message.channel.send("Vous avez besoin de Premium pour utiliser cette commande! Acheter Premium dans le SHOP : **!shop**.")
            return;
        }
        let question = args.slice(0).join(" ");
        if(!question) return message.channel.send(`
        Vous devez laisser un message!
        `)
    await message.channel.startTyping();
    bot.ask(`${question}`, function (err, response) {
             message.channel.send(response)
             message.channel.stopTyping();
          });
        }
    if(la === "us") {
        let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));
        if(!premium[message.author.id]) {
            message.channel.send("You do not have Premium!")
            return;
        }
        let question = args.slice(0).join(" ");
        if(!question) return message.channel.send(`
You have to specify a message!
        `)
    await message.channel.startTyping();
    bot.ask(`${question}`, function (err, response) {
             message.channel.send(response)
             message.channel.stopTyping();
          });
    }
}


module.exports.help = {
    name: "talk"
}
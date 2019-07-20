const Discord = require("discord.js");
let date = require('date-and-time');
const datejson = require('../date.json');
const coins = require('../coins.json');
const fs = require("fs")

module.exports.run = async(client, message, args, la) => {
    if(!datejson[message.author.id]) {
        datejson[message.author.id] = {
            date: "Date"
        }
    }
    if(la === "de") {
    if(datejson[message.author.id].date === date.format(new Date(), 'dddd D MMMM')) {
        return message.channel.send("Du hast heute schon die Tages Belohnung abgeholt!")
    }
    let ccoins = coins[message.author.id].coins
    coins[message.author.id] = {
        coins: ccoins + 400
    }
    datejson[message.author.id] = {
        date: date.format(new Date(), 'dddd D MMMM')
    }
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
      });
      fs.writeFile("./date.json", JSON.stringify(datejson), (err) => {
        if(err) console.log(err)
      });
      message.channel.send("Du hast deine Tages Belohnung im Wert von 400 Coins abgeholt!")

    }
    if(la === "us") {
        if(datejson[message.author.id].date === date.format(new Date(), 'dddd D MMMM')) {
            return message.channel.send("You have already received the daily reward today!")
        }
        let ccoins = coins[message.author.id].coins
        coins[message.author.id] = {
            coins: ccoins + 400
        }
        datejson[message.author.id] = {
            date: date.format(new Date(), 'dddd D MMMM')
        }
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
          });
          fs.writeFile("./date.json", JSON.stringify(datejson), (err) => {
            if(err) console.log(err)
          });
          message.channel.send("You received the daily 400 coins!")
      
    }
}
module.exports.help = {
    name: "daily"
}
const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async(client, message, args, la) => {
    if(la === "de") {
    if(!coins[message.author.id]) {
    return message.channel.send("Du hast keine Coins!")
    }
    let ccoins = coins[message.author.id].coins
    let amout = args[0];
    if(!amout) return message.channel.send("Du musst Coins angeben!")
    if(ccoins < amout) return message.channel.send("Du hast nicht so viele Coins!")
    let result = ["lose", "lose", "lose", "win"]
    let resault = Math.floor((Math.random() * result.length))
    if(result[resault] === "lose") {
        coins[message.author.id] = {
            coins: ccoins - parseInt(amout)
        }
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) cosole.log(err)
          });
          message.channel.send(`Du wurdest erwischt!`)
    }
    if(result[resault] === "win") {
        coins[message.author.id] = {
            coins: 4 * parseInt(amout) + ccoins 
        }
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) cosole.log(err)
          });
          message.channel.send(`Du hast es geschafft und hast die vierfache Mänge bekommen!`)
          return;
    }
    
    }
    if(la === "us") {
        if(!coins[message.author.id]) {
        return message.channel.send("You do not have any Coins!")
        }
        let ccoins = coins[message.author.id].coins
        let amout = args[0];
        if(!amout) return message.channel.send("You have to enter Coins!")
        if(ccoins < amout) return message.channel.send("You do not have enough Coins!")
        let result = ["lose", "lose", "lose", "win"]
        let resault = Math.floor((Math.random() * result.length))
        if(result[resault] === "lose") {
            coins[message.author.id] = {
                coins: ccoins - parseInt(amout)
            }
            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if(err) cosole.log(err)
              });
              message.channel.send(`You lose!`)
        }
        if(result[resault] === "win") {
            coins[message.author.id] = {
                coins: 4 * parseInt(amout) + ccoins
            }
            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if(err) cosole.log(err)
              });
              message.channel.send(`You won!`)
              return;
    }
    }
}
module.exports.help = {
    name: "steal"
}
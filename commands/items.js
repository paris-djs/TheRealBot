const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async (client, message, args, la) => {
let spieler = message.guild.member(message.mentions.users.first()) || message.member;
let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));
let cookie = JSON.parse(fs.readFileSync("./cookie.json", "utf8"));
let diamond = JSON.parse(fs.readFileSync("./diamonds.json", "utf8"));
if(!cookie[spieler.id]) {
    cookie[spieler.id] = {
        cookies: "0"
    }
}
if(!diamond[spieler.id]) {
    diamond[spieler.id] = {
        diamonds: "0"
    }
}
let coinsp = JSON.parse(fs.readFileSync("./coinsp.json"))
if(!coinsp[spieler.id]) {
    coinsp[spieler.id] = {
        coins: "3"
    }
}
let rare = JSON.parse(fs.readFileSync("./rare.json"))
if(!rare[spieler.id]) {
    rare[spieler.id] = {
        eggs: 0
    }
}
let leg = JSON.parse(fs.readFileSync("./leg.json"))
if(!leg[spieler.id]) {
    leg[spieler.id] = {
        eggs: 0
    }
}
let ul = JSON.parse(fs.readFileSync("./ul.json"))
if(!ul[spieler.id]) {
    ul[spieler.id] = {
        eggs: 0
    }
}
let co = JSON.parse(fs.readFileSync("./co.json"))
if(!co[spieler.id]) {
    co[spieler.id] = {
        eggs: 0
    }
}
let un = JSON.parse(fs.readFileSync("./un.json"))
if(!un[spieler.id]) {
    un[spieler.id] = {
        eggs: 0
    }
}
if(la === "de") {
    if(!premium[spieler.id]) {
        premium[spieler.id] = {
            premium: "Nein"
        }
    }
    if(premium[spieler.id].premium === "true") {
        premium[spieler.id] = {
            premium: "Ja"
        }
    }
    let diamondss = diamond[spieler.id].diamonds
    let ck = cookie[spieler.id].cookies
    let ifp = premium[spieler.id].premium
    let coinspp = coinsp[spieler.id].coins
    let rares = rare[spieler.id].eggs
    let legs = leg[spieler.id].eggs
    const embed = new Discord.RichEmbed()
    .setTitle(`Items von **${spieler.user.username}**`)
    .addField("Premium", ifp)
    .addField("Kekse (Nur in einer Beta)", ck)
    .addField("Diamanten (Nur in einer Beta)", diamondss)
    .addField("Ultimatives Upgrade (+150 Coins)", ul[spieler.id].eggs)
    .addField("Legendäres Upgrade (+50 Coins)", legs)
    .addField("Seltenes Upgrade (+30 Coins)", rares)
    .addField("Normales Upgrade (+10 Coins)", un[spieler.id].eggs)
    .addField("Häufiges Upgrade (+5 Coins)", co[spieler.id].eggs)
    .setFooter(`Coins pro Nachricht: ${coinspp}`)
    message.channel.send(embed)

}
if(la === "us") {
        if(!premium[spieler.id]) {
        premium[spieler.id] = {
            premium: "No"
        }
    }
    if(premium[spieler.id].premium === "true") {
        premium[spieler.id] = {
            premium: "Yes"
        }
    }
    let ck = cookie[spieler.id].cookies
    let ifp = premium[spieler.id].premium
    let diamondss = diamond[spieler.id].diamonds
    let coinspp = coinsp[spieler.id].coins
    let rares = rare[spieler.id].eggs
    let legs = leg[spieler.id].eggs
    const embed = new Discord.RichEmbed()
    .setTitle(`Items of **${spieler.user.username}**`)
    .addField("Premium", ifp)
    .addField("Cookies (Only in Beta)", ck)
    .addField("Diamonds (Only in Beta)", diamondss)
    .addField("Ultimate Upgrade (+150 Coins)", ul[spieler.id].eggs)
    .addField("Legendary Upgrade (+50 Coins)", legs)
    .addField("Rare Upgrade (+30 Coins)", rares)
    .addField("Normal Upgrade (+10 Coins", un[spieler.id].eggs)
    .addField("Common Upgrade (+5 Coins)", co[spieler.id].eggs)
    .setFooter(`Coins per message: ${coinspp}`)
    message.channel.send(embed)
}
}

module.exports.help = {
    name: "items"
}
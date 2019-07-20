const Discord = require("discord.js")
const afk = require("../afk.json")
const fs = require("fs")

module.exports.run = async(client,message,args,la) => {
if(!afk[message.author.id]) {
    afk[message.author.id] = {
        afk: false
    }
}
if(args[0] === "rm") {
    message.guild.members.get(message.author.id).setNickname(`${afk[message.author.id].name}`) 
    afk[message.author.id] = {
        afk: false
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
        if(err) console.log(err)
    }) 
    message.channel.send("Du bist nun nicht mehr AFK!")
    return;
}
if(afk[message.author.id].afk === true) return message.channel.send(`Du bist schon AFK! Gib **!afk rm** in den Chat ein, um nicht mehr AFK zu sein!`)
afk[message.author.id] = {
    name: message.author.username,
    afk: true
}
fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
    if(err) console.log(err)
}) 
message.guild.members.get(message.author.id).setNickname(`${message.author.username} [AFK]`) 
message.channel.send("Du bist nun AFK!")
}

module.exports.help = {
    name: "afk"
}
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async(client, message, args, la) => {
    if(la === "de") {
    let drache = JSON.parse(fs.readFileSync("./drache.json", "utf8"));
    if(!drache[message.author.id]) {
        drache[message.author.id] = {
            name: "Noch nicht gekauft."
        }
    }
    const embed = new Discord.RichEmbed()
    .setTitle(`Alle Pets von ${message.author.username}`)
    .addField(`Drache`, drache[message.author.id].name)
    message.channel.send(embed)
}
if(la === "us") {
    let drache = JSON.parse(fs.readFileSync("./drache.json", "utf8"));
    if(!drache[message.author.id]) {
        drache[message.author.id] = {
            name: "Not bought yet."
        }
    }
    const embed = new Discord.RichEmbed()
    .setTitle(`All pets of ${message.author.username}`)
    .addField(`Dragon`, drache[message.author.id].name)
    message.channel.send(embed)
}
}
module.exports.help = {
    name: "pets"
}
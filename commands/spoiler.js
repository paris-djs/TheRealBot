const Discord = require("discord.js")

module.exports.run = async (client, message, args, la) => {
if(la === "de") {
let text = args.slice(0).join(" ");
message.delete();
if(!text) return message.channel.send(`Du musst einen Text angeben!`)
message.channel.send(`||${text}||`)
}
if(la === "us") {
    let text = args.slice(0).join(" ");
    message.delete();
    if(!text) return message.channel.send(`You have to specify a message!`)
    message.channel.send(`||${text}||`)
    }
}
module.exports.help = {
    name: "spoiler"
}
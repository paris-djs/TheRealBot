const Discord = require("discord.js");

module.exports.run = async (client ,message,args, la) => {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(la === "de") {
if(!tomute) return message.channel.send("Du musst einen Spieler angeben!")
if(!args.slice(1).join(" ")) return message.channel.send("Du musst einen Bild Link angeben um das zu Beweisen!")
const embed = new Discord.RichEmbed()
.setAuthor(`Report`)
.addField(`Von`, message.author)
.addField(`An`, tomute)
.addField(`Bild Link`, args.slice(1).join(" "))

client.users.get("285418000734093312").send(embed);
message.channel.send("Der Spieler wurde erfolgreich Reportet!")

}
}

module.exports.help = {
    name: "botreport"
}
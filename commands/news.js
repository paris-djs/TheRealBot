const Discord = require("discord.js");
const fs = require("fs");
let news = JSON.parse(fs.readFileSync("./news.json", "utf8"));
let date = require('date-and-time');
let now = new Date();
module.exports.run = async (client,message,args,la) => {
if(la === "de") {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_CHANNELS**`);
if(!news[message.guild.id]) return message.channel.send("Du musst erst mit **!setup news (Channel)** einen News Channel auswählen!")
if(!args.slice(0).join(" ")) return message.channel.send("Du musst eine Neuigkeit angeben!")
let nchannel = news[message.guild.id].channel
let newschannel = message.guild.channels.find(`name`, nchannel);
if(!newschannel) return message.channel.send(`Ich konnte den Channel ${nchannel} nicht mehr finden!`)
    date.locale('de');
let embed = new Discord.RichEmbed()
.setAuthor(`News vom ${date.format(now, 'DD.MM.YYYY')} um ${date.format(now, 'HH:mm')}`)
.setDescription(`${args.slice(0).join(" ")}`)
newschannel.send(embed);
message.channel.send("Die Neuigkeit wurde erfolgreich gesendet!")
}
if(la === "us") {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`
        You don't have rights for this! **Missing rights: MANAGE_CHANNELS**`);
        if(!news[message.guild.id]) return message.channel.send("You have to select a news channel first with **!setup news (Channel)**!")
        if(!args.slice(0).join(" ")) return message.channel.send("You have to enter a news!")
        let nchannel = news[message.guild.id].channel
        let newschannel = message.guild.channels.find(`name`, nchannel);
        if(!newschannel) return message.channel.send(`I couldn't find the channel ${nchannel}!`)
        let embed = new Discord.RichEmbed()
        .setAuthor(`News from ${date.format(now, 'YYYY/MM/DD')} at ${date.format(now, 'HH:mm')}`)
        .setDescription(`${args.slice(0).join(" ")}`)
        newschannel.send(embed);
        message.channel.send("The news was sent successfully!")
}
}

module.exports.help = {
    name: "news"
}
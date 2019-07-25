const Discord = require("discord.js");
const logc = require("../logc.json")

module.exports = (client, guild, user) => {
if(!logc[guild.id]) {
    logc[guild.id] = {
        c: "log"
    }
}
let logch = logc[guild.id].c
let logchannel = guild.channels.find(r => r.name === logch);
if(!logchannel) return;
const embed = new Discord.RichEmbed()
.setAuthor(`New ban`)
.addField("User:", `${user.tag}`)
.addField(`ID:`, user.id)

logchannel.send(embed)
}
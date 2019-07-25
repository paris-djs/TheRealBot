const Discord = require("discord.js");
const logc = require("../logc.json")

module.exports = (client, role) => {
if(!logc[role.guild.id]) {
    logc[role.guild.id] = {
        c: "log"
    }
}
let logch = logc[role.guild.id].c
let logchannel = role.guild.channels.find(r => r.name === logch);
if(!logchannel) return;
const embed = new Discord.RichEmbed()
.setAuthor(`New role created`)
.addField(`Role:`, role.name)
.addField(`Permissions:`, role.permissions)

logchannel.send(embed)
}
const Discord = require("discord.js");
const fs = require("fs");
const logc = require("../logc.json")
module.exports = (client, member) => {
  const guild = member.guild;
  if(!logc[guild.id]) {
    logc[guild.id] = {
        c: "log"
    }
}
let logch = logc[guild.id].c
let logchannel = guild.channels.find(r => r.name === logch);
if(!logchannel) return;
const embed = new Discord.RichEmbed()
.setAuthor(`A user was kicked or left the server`)
.addField("User:", `${member.user.tag}`)
.addField(`ID:`, member.id)

logchannel.send(embed)
    
    let welcome = JSON.parse(fs.readFileSync("./leave.json", "utf8"));
    if(!welcome[guild.id]){
        return;
      }
    let lchannel = welcome[guild.id].leavechannel;
    if(!lchannel) return;
    let lmessage = welcome[guild.id].leavemessage;
    if(!lmessage) return;
    let welchannel = guild.channels.find(`name`, lchannel);
    lmessage = lmessage.replace("(player)", `${member.user}`)
    lmessage = lmessage.replace("(guild)", `${guild.name}`)
    lmessage = lmessage.replace("(playerid)", `${member.user.id}`)
    welchannel.send(`${lmessage}`)
    

}
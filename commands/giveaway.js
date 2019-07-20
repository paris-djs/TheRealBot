const Discord = require("discord.js");
const ms = require("ms");
let date = require('date-and-time');
module.exports.run = async(client,message,args,la) => {

    let now = new Date();
if(la === "de") {
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`
        Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_GUILD**
`);
message.delete();
    var item = "";
    var time;
    var winnerCount
    let messageArray = message.content.split(" ");
    for (var i = 3; i < messageArray.length; i++) {
        item += (messageArray[i] + " ");

    }
    winnerCount = (messageArray[1]);
    if(!winnerCount) return message.channel.send("Du musst die Anzahl der Gewinner angeben!");
    if(winnerCount > 1) return message.channel.send("Du kannst im Moment nur einen Gewinner auswählen!")
   time = (messageArray[2]);
   if(!time) return message.channel.send("Du musst die Zeit des Gewinnspiels angeben! z.B.: 60s , 30m , 20h")
    if(!item) return message.channel.send("Du musst den Preis angeben!")
var embed = new Discord.RichEmbed()
.setAuthor(item)
.setDescription(`Reagiere mit 🎉 um mitzumachen! (${winnerCount} Gewinner)`)
.setFooter(`Das Giveaway geht ${time} und wurde gestartet am ${date.format(now, 'DD.MM.YYYY')} um ${date.format(now, 'HH:mm:ss')}!`)
var embedSent = await message.channel.send(embed);
embedSent.react("🎉");
setTimeout(function() {
var peopleReacted = embedSent.reactions.get("🎉").users.filter(user => user.id !== client.user.id).array()
if(peopleReacted.length === 0) return message.channel.send("Es hat leider keiner beim Giveaway mitgemacht! :(")
var index = Math.floor(Math.random() * peopleReacted.length)
var winners = [];
var winnerMessage = "";
for (var i = 0; i < winnerCount; i++){
    if (winners.includes(peopleReacted[index])) continue;
    winners.push(peopleReacted[index])
   
}

for (var i = 0; i < winners.length; i++) {
    
    winnerMessage += (winners[i].toString() + " ")
    
}

let haveHas = winners.length === 1 ? "hat" : "haben"

if(winnerCount < winners.length) return;
message.channel.send(winnerMessage + "" + haveHas + ` **${item}**gewonnen`);
let embed = new Discord.RichEmbed()
.setAuthor(`${item}`)
.setDescription(`Gewinner: ${winnerMessage}`)
.setFooter(`Das Gewinnspiel ist vorbei!`)
embedSent.edit(embed)


}, ms(time))
    
    
}
if(la === "us") {{
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`
        You do not have rights for this! **Missing Rights: MANAGE_GUILD**
`);
message.delete();
    var item = "";
    var time;
    var winnerCount
    let messageArray = message.content.split(" ");
    for (var i = 3; i < messageArray.length; i++) {
        item += (messageArray[i] + " ");

    }
    winnerCount = (messageArray[1]);
    if(!winnerCount) return message.channel.send("You must specify the number of winners!");
    if(winnerCount > 1) return message.channel.send("You can currently specify one winner!")
   time = (messageArray[2]);
   if(!time) return message.channel.send("You have to specify the time of the giveaway!")
    if(!item) return message.channel.send("You have to specify the prize of the giveaway!")
var embed = new Discord.RichEmbed()
.setAuthor(item)
.setDescription(`React with 🎉 to enter! ${winnerCount} Winner(s)`)
.setFooter(`The giveaway lasts ${time} and was started at ${date.format(now, 'YYYY/MM/DD')} / ${date.format(now, 'HH:mm:ss')}!`)
var embedSent = await message.channel.send(embed);
embedSent.react("🎉");
setTimeout(function() {
var peopleReacted = embedSent.reactions.get("🎉").users.filter(user => user.id !== client.user.id).array()
if(peopleReacted.length === 0) return message.channel.send("Unfortunately, nobody took part in the giveaway! :(")
var index = Math.floor(Math.random() * peopleReacted.length)
var winners = [];
var winnerMessage = "";
for (var i = 0; i < winnerCount; i++){
    winners.push(peopleReacted[index]);
    
}
for (var i = 0; i < winners.length; i++) {
    winnerMessage += (winners[i].toString() + " ");
          
}
let haveHas = winners.length === 1 ? "has" : "have"

if(winnerCount < winners.length) return;
message.channel.send(winnerMessage + "" + haveHas + ` won **${item}**`);
let embed = new Discord.RichEmbed()
.setAuthor(`${item}`)
.setDescription(`Winner(s): ${winnerMessage}`)
.setFooter(`The giveaway ended!`)
embedSent.edit(embed)
}, ms(time))

}
}
}
module.exports.help = {
    name: "giveaway"
}
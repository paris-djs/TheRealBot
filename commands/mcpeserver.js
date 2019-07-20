const Discord = require("discord.js");
const ping = require('mc-hermes');
module.exports.run = async(client, message, args, la) => {
    if(la === "de") {
const ip = args[0];
if(!ip) return message.channel.send(`
Du musst eine IP angeben!`)
ping({
   type: 'pe',
   server: `${ip}`
})
   .then((data)=>{
    const embed = new Discord.RichEmbed()
    .setTitle(`**${ip}**`)
    .addField(`Spieler`, data.players.online + "/" + data.players.max, true)
    .addField(`MCPE Version`, data.version.name)
    .setThumbnail(data.favicon)
       message.channel.send(embed)
   })
   .catch(message.channel.send(console.error));
    }
    if(la === "us") {
        const ip = args[0];
        if(!ip) return message.channel.send(`
You have to specify a ip!`)
        ping({
           type: 'pe',
           server: `${ip}`
        })
           .then((data)=>{
            const embed = new Discord.RichEmbed()
            .setTitle(`Stats of : **${ip}**`)
            .setColor('GOLD')
            .addField(`Player`, data.players.online + "/" + data.players.max, true)
               message.channel.send(embed)
           })
           .catch(console.error);
    }
}
module.exports.help = {
    name: "mcpeserver"
}
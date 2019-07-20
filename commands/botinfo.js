const Discord = require("discord.js");
const fs = require("fs");


module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
  fs.readdir("./commands/", (err, files) => {
  
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    
let embed = new Discord.RichEmbed()
       .setColor("0xffffff")
       .addField("Name", client.user.tag, true)
       .addField("ID", client.user.id, true)
       .addField("Server", client.guilds.size, true)
       .addField("Kanäle", client.channels.size, true)
       .addField("Library", "Discord.JS-v6.4.1", true)
       .addField("Owner", "TheRealJan🎅#3022", true)
       .addField("Bot erstellt am", "Fr, 19.10.2018, 21:17:25", true)
       .addField("Spieler", client.users.size, true)
       .addField("Prefix", "!", true)
       .addField("Unterstützte Sprachen", "German, English")
       .addField("Commands", jsfile.length, true)
       .addField("Ping", Math.round(client.ping) + 'ms')
message.channel.send(embed)
});
}
if(la === "us") {
    fs.readdir("./commands/", (err, files) => {
        
          if(err) console.log(err);
          let jsfile = files.filter(f => f.split(".").pop() === "js");
          
             let embed2 = new Discord.RichEmbed()
             .setColor("0xffffff")
             .addField("Name", client.user.username, true)
             .addField("ID", client.user.id, true)
             .addField("Guilds", client.guilds.size, true)
             .addField("Channels", client.channels.size, true)
             .addField("Library", "Discord.JS-v6.4.1", true)
             .addField("Owner", "TheRealJan🎅#3022", true)
             .addField("Bot created at", "Fr, 19.10.2018, 21:17:25", true)
             .addField("Players", client.users.size, true)
             .addField("Prefix", "!", true)
             .addField("Supported languages", "German, English")
             .addField("Commands", jsfile.length, true)
    message.channel.send(embed2)
}
    )};
}
      module.exports.help = {
        name: "botinfo",
        aliases: []
      }
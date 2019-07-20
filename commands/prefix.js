const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args,la) => {
if(la === "de") {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Du hast keine Rechte dafür! **FEHLENDE RECHTE: MANAGE_GUILD**");
  if(!args[0] || args[0 == "help"]) return message.reply("Du musst eine Prefix angeben!");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("Prefix gesetzt!")
  .setDescription(`Die Prefix ist nun ${args[0]}`);

  message.channel.send(sEmbed);

}
if(la === "us") {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You do not have rights for this! **MISSING RIGHTS: MANAGE_GUILD**");
    if(!args[0] || args[0 == "help"]) return message.reply("You have to specify a prefix!");
  
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
    prefixes[message.guild.id] = {
      prefixes: args[0]
    };
  
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });
  
    let sEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Prefix set!")
    .setDescription(`The Prefix is ow ${args[0]}`);
  
    message.channel.send(sEmbed);
  
  }
}

module.exports.help = {
  name: "prefix"
}
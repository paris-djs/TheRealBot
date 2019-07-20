const Discord = require("discord.js");
const config = require("../config.json");
const ownerID = config.owner;

module.exports.run = async (client, message, args) => {
    let bug = args[0];
    if(!bug) return message.channel.send("Du musst einen Bug angeben!");
    const embed = new Discord.RichEmbed()
    .setAuthor("Neuer Bug Report!")
    .addField(`Von`, message.author.tag)
    .addField(`Bug`, bug)
    client.users.get(`${ownerID}`).send(embed)


}
module.exports.help = {
    name: "bug"
}
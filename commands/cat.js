const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
let msg = await message.channel.send(`
Generiere...`)
let {body} = await superagent
.get('http://aws.random.cat/meow')
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setAuthor("Cat")
.setImage(body.file)
msg.edit(embed)

}
if(la === "us") {
    let msg = await message.channel.send(`
Generating...`)
    let {body} = await superagent
    .get('http://aws.random.cat/meow')
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor("Cat")
    .setImage(body.file)
    msg.edit(embed)
}
}

module.exports.help = {
    name: "cat"
}
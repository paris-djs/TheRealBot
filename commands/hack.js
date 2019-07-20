const Discord = require("discord.js");
const superagent = require("superagent");
const ms = require("ms")

module.exports.run = async (client, message, args, la) => {
    if(la === "us") {
    let user = message.mentions.users.first() || message.author;
    if(!user) return message.channel.send(`
You have to specify a player! Usage: !hack (@Player)`)

    let replies = ["123213", "1219331", "234101", "2143190", "1231214", "9143911", "9132915", "14831949", "324918943", "28491239", "2843874823", "3274878232"];
     let {body} = await superagent
        .get('https://some-random-api.ml/bottoken')


    const embed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription("Player ID is hacked...")
   let msg = await message.channel.send(embed)
    setTimeout(function(){
   const embed2 = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription("E-Mail is hacked...")
    msg.edit(embed2)
    setTimeout(function(){
        const embed3 = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription("Password is hacked...")
    msg.edit(embed3)
    setTimeout(function(){
   
    const embed4 = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription("Token is hacked...")
    msg.edit(embed4)
    setTimeout(function(){
        const embed5 = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription(`${user} was successfully hacked!`)
    .addField("ID", user.id)
    .addField("E-Mail", `${user.username}@discordapp.com`)
    .addField("Password", replies[resault])
    .addField("Token", body.token)
   msg.edit(embed5)
           }, ms('1s'));
           }, ms('1s'));
           }, ms('1s'));
      }, ms('1s'));

    
   
    
}

if(la === "de") {
    let user = message.mentions.users.first() || message.author;
    if(!user) return message.channel.send(`
You have to specify a player! Usage: !hack (@Player)`)

    let replies = ["123213", "1219331", "234101", "2143190", "1231214", "9143911", "9132915", "14831949", "324918943", "28491239", "2843874823", "3274878232"];
   let resault = Math.floor((Math.random() * replies.length))
let {body} = await superagent
.get('https://some-random-api.ml/bottoken')

    const embed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription("Player ID wird gehackt...")
   let msg = await message.channel.send(embed)
    setTimeout(function(){
   const embed2 = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription("E-Mail wird gehackt...")
    msg.edit(embed2)
    setTimeout(function(){
        const embed3 = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription("Passwort wird gehackt...")
    msg.edit(embed3)
    setTimeout(function(){
            
    const embed4 = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription("Token wird gehackt...")
    msg.edit(embed4)
    setTimeout(function(){
        const embed5 = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`)
    .setDescription(`${user} wurde erfolgreich gehackt!`)
    .addField("ID", user.id)
    .addField("E-Mail", `${user.username}@discordapp.com`)
    .addField("Passwort", replies[resault])
    .addField("Token", body.token)
   msg.edit(embed5)
           }, ms('1s'));
           }, ms('1s'));
           }, ms('1s'));
      }, ms('1s'));

}
}

module.exports.help = {
    name: "hack"
}
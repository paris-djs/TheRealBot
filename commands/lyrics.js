const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
    let lyric = args.slice(0).join(" ")
    if(!lyric) return message.channel.send(`
Du musst den Lied Name angeben!
    `)
    let {body} = await superagent
.get('https://some-random-api.ml/lyrics?title=' + `${lyric}`)
const embed = new Discord.RichEmbed()
.setAuthor(body.title)
.setFooter(`Lied von ${body.author}`)
.setThumbnail(body.thumbnail.genius)
.addField(`Lyrics`, body.links.genius)
message.channel.send(embed)
    }
    if(la === "us") {
        let lyric = args.slice(0).join(" ")
        if(!lyric) return message.channel.send(`
You have to specify the song name!
        `)
        let {body} = await superagent
    .get('https://some-random-api.ml/lyrics?title=' + `${lyric}`)
    const embed = new Discord.RichEmbed()
    .setAuthor(body.title)
    .setFooter(`Song by ${body.author}`)
    .setThumbnail(body.thumbnail.genius)
    .addField(`Lyrics`, body.links.genius)
    message.channel.send(embed)
    }
}
module.exports.help = {
    name: "lyrics"
}
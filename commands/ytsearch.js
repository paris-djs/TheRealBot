const Discord = require('discord.js');
const search = require('youtube-search');
const ytSearch = require( 'yt-search' );
module.exports.run = (client, message, args, la) =>{
if(la === "de") {
    let name = args.slice(0).join(" ")
    if(!name) return message.channel.send(`
Du musst den Video Namen angeben!
        `)
   ytSearch( `${name}`, function ( err, r ) {
     if ( err ) throw err
    
     const videos = r.videos
     const playlists = r.playlists
     const accounts = r.accounts
    
     const firstResult = videos[ 0 ]
     const secondResult = videos[ 1 ]
     const thirdResult = videos[ 2 ]
    
     const ayy = client.emojis.find(emoji => emoji.name === "one");
 const embed = new Discord.RichEmbed()

.addField(`__**1.**__ ${firstResult.title}`, `Link: https://youtube.de${firstResult.url} (${firstResult.ago})
Aufrufe: ${firstResult.views}
Minuten: ${firstResult.timestamp}
Von: ${firstResult.author.name}
`)
.addField(`__**2.**__ ${secondResult.title}`, `Link: https://youtube.de${secondResult.url} (${secondResult.ago})
Aufrufe: ${secondResult.views}
Minuten: ${secondResult.timestamp}
Von: ${secondResult.author.name}
`)
.addField(`__**3.**__ ${thirdResult.title}`, `Link: https://youtube.de${thirdResult.url} (${thirdResult.ago})
Aufrufe: ${thirdResult.views}
Minuten: ${thirdResult.timestamp}
Von: ${thirdResult.author.name}
`)
message.channel.send(embed)
   })
}
if(la === "us") {
    let name = args.slice(0).join(" ")
    if(!name) return message.channel.send(`
You have to specify the video name!
        `)
   ytSearch( `${name}`, function ( err, r ) {
     if ( err ) throw err
    
     const videos = r.videos
     const playlists = r.playlists
     const accounts = r.accounts
    
     const firstResult = videos[ 0 ]
     const secondResult = videos[ 1 ]
     const thirdResult = videos[ 2 ]
    
     const ayy = client.emojis.find(emoji => emoji.name === "one");
 const embed = new Discord.RichEmbed()

.addField(`__**1.**__ ${firstResult.title}`, `https://youtube.de${firstResult.url}`)
.addField(`__**2.**__ ${secondResult.title}`, `https://youtube.de${secondResult.url}`)
.addField(`__**3.**__ ${thirdResult.title}`, `https://youtube.de${thirdResult.url}`)
message.channel.send(embed)
   })
}
}
module.exports.help = {
    name: "ytsearch",
    aliases: []
  }
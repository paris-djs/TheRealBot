const Discord = require("discord.js");
const fs = require("fs");
let date = require('date-and-time');
let now = new Date();
let botnewsde = require("../botnewsde.json");
let botnewsus = require("../botnewsus.json");
module.exports.run = async (client,message,args,la) => {
    if(la === "de") {
        if(!botnewsde[1]) {
            botnewsde[1] = {
                news: "/"
            }
        }
        if(!botnewsde[2]) {
            botnewsde[2] = {
                news: "/"
            }
        }
        if(!botnewsde[3]) {
            botnewsde[3] = {
                news: "/"
            }
        }
        if(!botnewsde[4]) {
            botnewsde[4] = {
                news: "/"
            }
        }
        if(!botnewsde[5]) {
            botnewsde[5] = {
                news: "/"
            }
        }
let embed = new Discord.RichEmbed()
.setAuthor("Bot News")
.setDescription(`
- ${botnewsde[1].news}
- ${botnewsde[2].news}
- ${botnewsde[3].news}
- ${botnewsde[4].news}
- ${botnewsde[5].news}
`)
message.channel.send(embed) 
return;
    }
    if(la === "us") {
        if(!botnewsus[1]) {
            botnewsus[1] = {
                news: "/"
            }
        }
        if(!botnewsus[2]) {
            botnewsus[2] = {
                news: "/"
            }
        }
        if(!botnewsus[3]) {
            botnewsus[3] = {
                news: "/"
            }
        }
        if(!botnewsus[4]) {
            botnewsus[4] = {
                news: "/"
            }
        }
        if(!botnewsus[5]) {
            botnewsus[5] = {
                news: "/"
            }
        }
        let embed = new Discord.RichEmbed()
        .setAuthor("Bot News")
        .setDescription(`
        - ${botnewsus[1].news}
        - ${botnewsus[2].news}
        - ${botnewsus[3].news}
        - ${botnewsus[4].news}
        - ${botnewsus[5].news}
        `)
        message.channel.send(embed) 
        return;
            }


}
module.exports.help = {
    name: "botnews"
}
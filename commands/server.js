const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, arg, la) => {
    if(la == "de") {
        let leave = JSON.parse(fs.readFileSync("./leave.json", "utf8"));
        let welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));
        if(!welcome[message.guild.id]){
          welcome[message.guild.id] = {
              welcomechannel: "Aus",
              welcomemessage: "Aus"
          }
          }
          if(!leave[message.guild.id]){
            leave[message.guild.id] = {
                leavechannel: "Aus",
                leavemessage: "Aus"
            }
          }
        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
        if(!prefixes[message.guild.id]) {
            prefixes[message.guild.id] = {
                prefixes: "!"
            }
        }
        let prefix = prefixes[message.guild.id].prefixes;
        let wchannel = welcome[message.guild.id].welcomechannel;
        let wmessage = welcome[message.guild.id].welcomemessage;
        let lchannel = leave[message.guild.id].leavechannel;
        let lmessage = leave[message.guild.id].leavemessage;
        let verify = JSON.parse(fs.readFileSync("./verify.json", "utf8"));
        if(!verify[message.guild.id]){
         verify[message.guild.id] = {
             verifyrole: "Aus",
             verifychannel: "Aus"
         }
        }
        let verifyc = verify[message.guild.id].verifychannel
        if(!verifyc) return;
        let verifyr = verify[message.guild.id].verifyrole
        if(!verifyr) return;
        let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
        if(!log[message.guild.id]) {
            log[message.guild.id] = {
                logchannel: "Aus"
            }
        }
        let logchannel = log[message.guild.id].logchannel
        let report = JSON.parse(fs.readFileSync("./reports.json", "utf8"));
        if(!report[message.guild.id]) {
            report[message.guild.id] = {
                reportchannel: "Aus"
            }
        }
        let reportchannel = report[message.guild.id].reportchannel
        let ticket = JSON.parse(fs.readFileSync("./tickets.json", "utf8"));
        if(!ticket[message.guild.id]) {
            ticket[message.guild.id] = {
                ticketchannel: "Aus"
            }
        }
        let ticketchannel = ticket[message.guild.id].ticketchannel
    let embed = new Discord.RichEmbed()
    .setAuthor(`Server Setup ${message.guild.name}`)
    .addField(`Server Prefix`, prefix)
    .addField(`Willkommens Kanal`, wchannel)
    .addField(`Willkommens Nachricht`, wmessage)
    .addField(`Leave Kanal`, lchannel)
    .addField(`Leave Nachricht`, lmessage)
    .addField(`Verify Kanal`, verifyc)
    .addField(`Verify Rolle`, verifyr)
    .addField(`Log Kanal`, logchannel)
    .addField(`Report Kanal`, reportchannel)
    .addField(`Ticket Kanal`, ticketchannel)
    message.react("✅")
    message.author.send(embed)
    }
    if(la === "us") {
        let leave = JSON.parse(fs.readFileSync("./leave.json", "utf8"));
        let welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));
        if(!welcome[message.guild.id]){
          welcome[message.guild.id] = {
              welcomechannel: "Off",
              welcomemessage: "Off"
          }
          }
          if(!leave[message.guild.id]){
            leave[message.guild.id] = {
                leavechannel: "Off",
                leavemessage: "Off"
            }
          }
        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
        if(!prefixes[message.guild.id]) {
            prefixes[message.guild.id] = {
                prefixes: "!"
            }
        }
        let prefix = prefixes[message.guild.id].prefixes;
        let wchannel = welcome[message.guild.id].welcomechannel;
        let wmessage = welcome[message.guild.id].welcomemessage;
        let lchannel = leave[message.guild.id].leavechannel;
        let lmessage = leave[message.guild.id].leavemessage;
        let verify = JSON.parse(fs.readFileSync("./verify.json", "utf8"));
        if(!verify[message.guild.id]){
         verify[message.guild.id] = {
             verifyrole: "Off",
             verifychannel: "Off"
         }
        }
        let verifyc = verify[message.guild.id].verifychannel
        if(!verifyc) return;
        let verifyr = verify[message.guild.id].verifyrole
        if(!verifyr) return;
        let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
        if(!log[message.guild.id]) {
            log[message.guild.id] = {
                logchannel: "Off"
            }
        }
        let logchannel = log[message.guild.id].logchannel
        let report = JSON.parse(fs.readFileSync("./reports.json", "utf8"));
        if(!report[message.guild.id]) {
            report[message.guild.id] = {
                reportchannel: "Off"
            }
        }
        let reportchannel = report[message.guild.id].reportchannel
        let ticket = JSON.parse(fs.readFileSync("./tickets.json", "utf8"));
        if(!ticket[message.guild.id]) {
            ticket[message.guild.id] = {
                ticketchannel: "Off"
            }
        }
        let ticketchannel = ticket[message.guild.id].ticketchannel
        let coin = JSON.parse(fs.readFileSync("./coin.json", "utf8"));
        if(!coin[message.guild.id]) {
            coin[message.guild.id] = {
                coin: "disabled"
            }
        }
        let language = JSON.parse(fs.readFileSync("./language.json", "utf8"));
        if(!language[message.guild.id]) {
            language[message.guild.id] = {
                language: "us"
            }
        }
        let ifenabled = coin[message.guild.id].coin
        let embed = new Discord.RichEmbed()
        .setAuthor(`Server Setup ${message.guild.name}`)
        .addField(`Server Prefix`, prefix)
        .addField(`Welcome Channel`, wchannel)
        .addField(`Welcome Message`, wmessage)
        .addField(`Leave Channel`, lchannel)
        .addField(`Leave Message`, lmessage)
        .addField(`Verify Channel`, verifyc)
        .addField(`Verify Rolle`, verifyr)
        .addField(`Log Channel`, logchannel)
        .addField(`Report Channel`, reportchannel)
        .addField(`Ticket Channel`, ticketchannel)
        .addField(`Coin System`, ifenabled)
        .addField(`Language`, la)
        message.react("✅")
        message.author.send(embed)
    }
}
module.exports.help = {
    name: "server"
}
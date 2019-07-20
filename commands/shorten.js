const Discord = require("discord.js");
const shorten = require("isgd");

module.exports.run = async (client, message, args, la) => {
if(la === "de") {
if (!args[0]) return message.channel.send(`
Du musst ein Link angeben! Usage: !shorten <URL> [Titel]`)


if(!args[1]) {

    shorten.shorten(args[0], function(res) {
        if(res.startsWith('Error:'));
        message.channel.send(`**<${res}>**`);
    })
} else {


    shorten.custom(args[0], args[1], function(res) {
   if(res.startsWith('Error'));
   message.channel.send(`**<${res}>**`)
    })
}


}
if(la === "us") {
    if (!args[0]) return message.channel.send(`
You have to specify a link! Usage: !shorten <URL> [title]`)
        
        
        if(!args[1]) {
        
            shorten.shorten(args[0], function(res) {
                if(res.startsWith('Error:'));
                message.channel.send(`**<${res}>**`);
            })
        } else {
        
        
            shorten.custom(args[0], args[1], function(res) {
           if(res.startsWith('Error'));
           message.channel.send(`**<${res}>**`)
            })
        }
        
        
}
}   

module.exports.help = {
    name: "shorten",
    aliases: []
  }
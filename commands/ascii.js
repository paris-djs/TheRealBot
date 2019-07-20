const figlet = require("figlet");
const Discord = require("discord.js");

module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
if(!args.join(' ')) return message.channel.send(`
You have to specify a text!`);
        message.delete();
        figlet(args.join(' '), (err, data) => {
            message.channel.send(data, {
           code: "ascii"
         });
    
        });
}
}

module.exports.help = {
    name: "ascii"
}
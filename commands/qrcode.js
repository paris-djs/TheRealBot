const Discord = require("discord.js");
const qrcode = require("qrcode");
const tempy = require("tempy");

module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
        });
    }else{
        message.channel.stopTyping();
        message.channel.send(`
Du musst einen Text angeben!
        `);
    }
}
if(la === "us") {
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
        });
    }else{
        message.channel.stopTyping();
        message.channel.send(`
You have to specify a text!
        `);
    } 
}
}
 
module.exports.help = {
  name: "qrcode"
}
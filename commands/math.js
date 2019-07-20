const calc = require('calculatorjs')
const Discord = require("discord.js");

module.exports.run = async(client, message, args, la) => {
    if(la === "de") {
    let dmath = args.join(' ');
    if(!dmath) return message.channel.send(`
Du musst die Zahlen und die Operatoren angeben! Operatoren: **+ / * -** Beispiel: **1 + 1**
`)
   message.channel.send(calc(dmath))
}
if(la === "us") {
    let dmath = args.join(' ');
    if(!dmath) return message.channel.send(`
You have to specify the numbers and the operator! Operators: **+ / * -** Example: **1 + 1**
`)
   message.channel.send(calc(dmath))
}
}
module.exports.help = {
    name: "math"
}
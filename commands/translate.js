const translate = require("translate");
const Discord = require("discord.js")
const fs = require("fs")
let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));
module.exports.run = async (client,message,args,la) => {
    let textq = args.slice(1).join(" ");
    let lng = args[0]
    if(la === "de") {
        if(!premium[message.author.id]) {
            message.channel.send("Du benötigst Premium, um diesen Command nutzen zu können! Kauf dir Premium im SHOP: **!shop**.")
            return;
        }
    let embedl = new Discord.RichEmbed()
    .setAuthor(`Translator`)
    .setDescription(`Du musst eine Sprache angeben! Klicke [hier](https://hhr-m.userweb.mwn.de/iso639/) um alle Kürzel zu sehen!`)
    if(!lng) return message.channel.send(embedl)
    if(!textq) return message.channel.send("Du musst einen Text angeben, der übersetzt werden soll!")
let text = await translate(textq, { to: lng, engine: 'yandex', key: 'trnsl.1.1.20190717T132746Z.ba49043a334f8c4f.54963b28441f1e706b1742078ab955b5e41eb4f3' });
  const embed = new Discord.RichEmbed()
  .setAuthor(`Translator`)
  .setDescription(`Die Übersetzungen sind nicht immer zu 100% richtig!`)
  .addField(`Text`, textq)
  .addField(`Text übersetzt`, text)
message.channel.send(embed)
return;
}
if(la === "fr") {
    if(!premium[message.author.id]) {
        message.channel.send("Vous avez besoin de Premium pour utiliser cette commande! Acheter Premium dans le SHOP : **!shop**.")
        return;
    }
    let embedl = new Discord.RichEmbed()
    .setAuthor(`Traductrice`)
    .setDescription(`Vous devez spécifier une langue! Cliquez [ici](https://hhr-m.userweb.mwn.de/iso639/) pour voir toutes les abréviations!`)
    if(!lng) return message.channel.send(embedl)
    if(!textq) return message.channel.send("Vous devez spécifier un texte à traduire!")
let text = await translate(textq, { to: lng, engine: 'yandex', key: 'trnsl.1.1.20190717T132746Z.ba49043a334f8c4f.54963b28441f1e706b1742078ab955b5e41eb4f3' });
  const embed = new Discord.RichEmbed()
  .setAuthor(`Traductrice`)
  .setDescription(`Les traductions ne sont pas toujours correctes à 100%!`)
  .addField(`Texte`, textq)
  .addField(`Texte traduit`, text)
message.channel.send(embed)
return;
}
if(la === "us") {
    if(!premium[message.author.id]) {
        message.channel.send("You need Premium to use this command. Buy Premium in the SHOP: **!shop**.")
        return;
    }
    let embedl = new Discord.RichEmbed()
    .setAuthor(`Translator`)
    .setDescription(`You have to specify a language! Click [here](https://hhr-m.userweb.mwn.de/iso639/) to see all shortcuts!`)
    if(!lng) return message.channel.send(embedl)
    if(!textq) return message.channel.send("You must specify a text to be translated!")
let text = await translate(textq, { to: lng, engine: 'yandex', key: 'trnsl.1.1.20190717T132746Z.ba49043a334f8c4f.54963b28441f1e706b1742078ab955b5e41eb4f3' });
  const embed = new Discord.RichEmbed()
  .setAuthor(`Translator`)
  .setDescription(`Translations are not always 100% correct!`)
  .addField(`Text`, textq)
  .addField(`Text translated`, text)
message.channel.send(embed)
return;
}
}
module.exports.help = {
    name: "translate"
}
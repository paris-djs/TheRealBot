const Discord = require("discord.js");
const steam = require('steam-provider');
let provider = new steam.SteamProvider();
module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
    let game = args.slice(0).join(" ");
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.channel.send(`
Du musst den Spiel Name angeben! Usage: !steam (game name)`)
    provider.search(game).then(result => {
    provider.detail(result[0].id, "german", "de").then(results => {
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`Spiel ID`, result[0].id, true)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Tags', results.genres, true)
    .addField('Normaler Preis', `**${results.priceData.initialPrice}€**
Preis immoment **${results.priceData.finalPrice}€** `, true)
    .addField('Plattformen', results.otherData.platforms, true)
    .addField('Features', results.otherData.features, true)
    .addField('Entwickler', results.otherData.developer, true)
    .addField('Publisher', results.otherData.publisher, true)
  .setColor("#36393F")
  message.react("✅")
    message.author.send(embed)
})
})
    }
if(la === "us") {
    let game = args.slice(0).join(" ");
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.channel.send(`
You have to specify the game name! Usage: !steam (game name)`)
    provider.search(game).then(result => {
    provider.detail(result[0].id, "english", "us").then(results => {
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`Game ID`, result[0].id, true)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Tags', results.genres, true)
    .addField('Normal price', `**${results.priceData.initialPrice}€**
price currently **${results.priceData.finalPrice}€** `, true)
    .addField('Platforms', results.otherData.platforms, true)
    .addField('Features', results.otherData.features, true)
    .addField('Developer', results.otherData.developer, true)
    .addField('Publisher', results.otherData.publisher, true)
  .setColor("#36393F")
  message.react("✅")
    message.author.send(embed)
    });
});
}
}
module.exports.help = {
    name: "steam"
}
const Discord = require("discord.js")
const Client = require('fortnite');
const fortnite = new Client(process.env.FORTNITE);

module.exports.run = async (client, message, args, la, err) => {
    if(la === "de") {
    await message.delete();
    let username = args[0];
    let plattform = args[1] || 'pc';
    const swearWords = ["xbl", "ps4", "pc"];
    if(args[1]) {
    if( !swearWords.some(word => args[1].content.includes(word)) ) {

      message.delete();
      message.channel.send(`
Es gibt nur die Plattform-Kürzel: xbl, pc, xbl`);
    }
}
    if(!username) return message.channel.send(`
Du musst einen Spieler Name angeben!`)
        let data = fortnite.user(username, plattform).then(data => {
            
        let stats = data.stats;
        let lifetime = stats.lifetime;
        
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        let embed = new Discord.RichEmbed()
        .setTitle(`${data.username}`)
        .setAuthor(data.username)
        .setColor("#0000FF")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Spiele gespielt", mplayed, true)
        .addField("Gewinn Chance", winper, true)
        .addField("K/D", kd, true)
        message.channel.send(embed);
        });
    }
    if(la === "us") {
        await message.delete();
        let username = args[0];
        let plattform = args[1] || 'pc';
        if(!username) return message.channel.send(`
You have to specify a username!`)
            let data = fortnite.user(username, plattform).then(data => {
            let stats = data.stats;
            let lifetime = stats.lifetime;
            
            let score = lifetime[6]['Score'];
            let mplayed = lifetime[7]['Matches Played'];
            let wins = lifetime[8]['Wins'];
            let winper = lifetime[9]['Win%'];
            let kills = lifetime[10]['Kills'];
            let kd = lifetime[11]['K/d'];
    
            let embed = new Discord.RichEmbed()
            .setTitle(`${data.username}`)
            .setAuthor(data.username)
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Kills", kills, true)
            .addField("Score", score, true)
            .addField("Games played", mplayed, true)
            .addField("Win %", winper, true)
            .addField("K/D", kd, true)
    
            message.channel.send(embed);
            });
    }
}

module.exports.help = {
    name: "fortnite",
    aliases: []
  }


const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args, la) => {
      if(la === "de") {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_MESSAGES**
        `);   
      let Title = args[0];
      if(!Title) return message.channel.send(`
Bitte gib den Titel der Embed Nachricht an! Usage: !say (Titel) (Farbe) (Channel ohne #) (Text)`)
      let color = args[1];
      if(!color) return message.channel.send(`
Bitte gib den Farbe der Embed Nachricht an! Usage: !say (Titel) (Farbe) (Channel ohne #) (Text)`)
            let sendchannel = args[2];
      if(!sendchannel) return message.channel.send(`
Bitte gib den Channel der Embed Nachricht an! Usage: !say (Titel) (Farbe) (Channel ohne #) (Text)`);
      let schannel = message.guild.channels.find(`name`, `${sendchannel}`);
      let Description = args.slice(3).join(" ")
      
      if(!Description) return message.channel.send(`
Bitte gib den Text der Embed Nachricht an! Usage: !say (Titel) (Farbe) (Channel ohne #) (Text)`)

      message.delete().catch();
      const Embed = new Discord.RichEmbed()
      .setColor(`${color}`)
      .setTitle(Title)
      .setDescription(Description)
     schannel.send(Embed)
}
if(la === "us") {
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_MESSAGES**
`);   
                  let Title = args[0];
                  if(!Title) return message.channel.send(`
Please enter the title of the embed message! Usage: !say (title) (color) (channel without #) (text)`)
                  let color = args[1];
                  if(!color) return message.channel.send(`
Please enter the color of the embed message! Usage: !say (title) (color) (channel without #) (text)`)

                        let sendchannel = args[2];
                  if(!sendchannel) return message.channel.send(`
Please enter the sendchannel of the embed message! Usage: !say (title) (color) (channel without #) (text)`)
                  let schannel = message.guild.channels.find(`name`, `${sendchannel}`);
                  let Description = args.slice(3).join(" ")
                  
                  if(!Description) return message.channel.send(`
Please enter the text of the embed message! Usage: !say (title) (color) (channel without #) (text)`)
            
                  message.delete().catch();
                  const Embed = new Discord.RichEmbed()
                  .setColor(`${color}`)
                  .setTitle(Title)
                  .setDescription(Description)
                 schannel.send(Embed)
}

}

module.exports.help = {
  name: "say",
  aliases: []
}
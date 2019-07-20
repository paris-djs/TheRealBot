const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let a = message.guild.roles.find(r => r.name === `Developer`);
    let b = message.guild.roles.find(r => r.name === `Minecraft`);
    let c = message.guild.roles.find(r => r.name === `Fortnite`);
      const filter = (reaction, user) => ['🇦', '🇧', '🇨'].includes(reaction.emoji.name) && user.id === message.author.id;

const embed = new Discord.RichEmbed()
.setTitle('Verfügbare Rollen:')
.setDescription(`

🇦 ${a.toString()}
🇧 ${b.toString()}
🇨 ${c.toString()}

`)
.setColor('RANDOM')
.setFooter(`Spieler: ${message.author.id}`);
message.channel.send(embed).then(async msg =>{
    await msg.react('🇦');
    await msg.react('🇧');
    await msg.react('🇨');

    msg.awaitReactions(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
    }).then(collected =>{

     const reaction = collected.first();

     switch (reaction.emoji.name) {
         case '🇦':
         if (message.member.roles.has(a.id)) {
             return message.channel.send("Du hast die Rolle schon!");
         }
         message.member.addRole(a).catch(err =>{
             console.log(err);
             return message.channel.send(`Error: ${err.message}`);
         });
         message.channel.send(`Du hast nun die Rolle ${a.name}!`);
         break;
         case '🇧':
         if (message.member.roles.has(b.id)) {
             return message.channel.send("Du hast die Rolle schon!");
         }
         message.member.addRole(b).catch(err =>{
             console.log(err);
             return message.channel.send(`Error: ${err.message}`);
         });
         message.channel.send(`Du hast nun die Rolle ${b.name}!`);
         break;
         case '🇨':
         if (message.member.roles.has(c.id)) {
             return message.channel.send("Du hast die Rolle schon!");
         }
         message.member.addRole(c).catch(err =>{
             console.log(err);
             return message.channel.send(`Error: ${err.message}`);
         });
         message.channel.send(`Du hast nun die Rolle ${c.name}!`);
         break;

     }

    }).catch(collected => {
       return message.channel.send(`Ich kann dir diese Rolle nicht geben!`);
    });
});
    };

module.exports.help = {
    name: "rollen"
};
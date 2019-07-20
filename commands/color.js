const Discord = require("discord.js");


module.exports.run = async (client, message, args, la) => {
  if(la === "de") {
 let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
   if(colors.size < 1) return message.channel.send(`
Es sind keine Farben auf dem Server! 
   `);

let str = args.join(" ");
let role = colors.find(role => role.name.toLowerCase() === str.toLowerCase());

  if(!role) return message.channel.send(`
Diese Farbe existiert nicht!
  `)
try {
    await message.member.removeRole(colors);
    await message.member.addRole(role);
    message.channel.send(`
Du hast nun die Farbe ${role}!
`);

}  catch(e) {
   message.channel.send(`Error: ${e.message}`)
}
  }
  if(la === "us") {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send(`
They are no colors on the Server!
    `);
 
 let str = args.join(" ");
 let role = colors.find(role => role.name.toLowerCase() === str.toLowerCase());
 
   if(!role) return message.channel.send(`
This color does not exist!
   `)
 try {
     await message.member.removeRole(colors);
     await message.member.addRole(role);
     message.channel.send(`
You now have the color!
 `);
 
 }  catch(e) {
    message.channel.send(`Error: ${e.message}`)
 }
  }

}




module.exports.help = {
    name: "color",
    aliases: []
  }
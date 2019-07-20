const Discord = require("discord.js");

module.exports.run = async (client, message, args, la) => {
if(la === "de") {
if(!args[1]) {
if(!message.member.hasPermission('CHANGE_NICKNAME')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: CHANGE_NICKNAME**
`);

message.guild.members.get(message.author.id).setNickname(`${args[0]}`);
message.channel.send(`
Dein Nickname ist nun **${args[0]}** 
`)

}
if(args[1]) {
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_NICKNAMES**
`);
    
message.guild.members.get(user.id).setNickname(`${args[0]}`);
message.channel.send(`
${user}'s Nickname ist nun **${args[0]}** 
`)  
}
}
if(la == "us") {
    if(!args[1]) {
        if(!message.member.hasPermission('CHANGE_NICKNAME')) return message.channel.send(`
You do not have rights for this! **Missing Rights: CHANGE_NICKNAME**
        `);
        
        message.guild.members.get(message.author.id).setNickname(`${args[0]}`);
        message.channel.send(`
Your nickname is now **${args[0]}**
        `)
        
        }
        if(args[1]) {
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_NICKNAMES**
        `);
            
        message.guild.members.get(user.id).setNickname(`${args[0]}`);
        message.channel.send(`
${user}'s nickname is now **${args[0]}**
        `) 
}
}
}

module.exports.help = {
    name: "nick"
}
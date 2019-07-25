const Discord = require("discord.js");
const fs = require("fs");

module.exports = (client, member) => {
    const guild = member.guild;
    let welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));
    if(!welcome[guild.id]){
        return;
      }
      let wrole = welcome[guild.id].welcomerole;
      if(!wrole) return;
    let wchannel = welcome[guild.id].welcomechannel;
    if(!wchannel) return;
    let wmessage = welcome[guild.id].welcomemessage;
    if(!wmessage) return;
    let muterole = guild.roles.find(r => r.name === `${wrole}`);
    if(!muterole)
        return;
    let welchannel = guild.channels.find(`name`, wchannel);
    member.addRole(muterole)
    if(!welchannel) return;
    wmessage = wmessage.replace("(player)", `${member.user}`)
    wmessage = wmessage.replace("(guild)", `${guild.name}`)
    wmessage = wmessage.replace("(playerid)", `${member.user.id}`)
    welchannel.send(`${wmessage}`)
    let verify = JSON.parse(fs.readFileSync("./verify.json", "utf8"));
    if(verify[guild.id]) {
        
    let verifyc = verify[guild.id].verifychannel
    if(!verifyc) return;
    
   let verifyr = verify[guild.id].verifyrole
   if(!verifyr) return;
    member.user.send(`
🇺🇸 On this server you have to verify yourself in channel **${verifyc}** with **!verify**
🇩🇪 Auf diesem Server musst du dich in **${verifyc}** mit **!verify** Verifizieren
`)
    }

}
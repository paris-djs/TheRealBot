const Discord = require("discord.js");
const fs = require("fs");
let random = require("../random.json")
module.exports.run = async(client,message,args,la) => {
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: `!`
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    if(!args[0]) {
    let randomM = Math.floor(Math.random() * 100000)
    let randomM2 = Math.floor(Math.random() * 10000)
    random[message.author.id] = {
      number: randomM 
    }
    fs.writeFile("./random.json", JSON.stringify(random), (err) => {
      if(err) console.log(err)
    });
   
  }
  const randomN = random[message.author.id].number
    let verify = JSON.parse(fs.readFileSync("./verify.json", "utf8"));
     if(la === "de") { 
       if(!args[0] === randomN) {
         message.delete()
         message.channel.send("Wenn du den Code nicht mehr weißt, schreibe **!verify** in den Chat!").then(msg => {msg.delete(5000)});
         return;
       }
       if(message.content === `${prefix}verify`) {
   message.delete();
    message.channel.send(`Gib jetzt bitte noch mal **!verify ${randomN}** in den Chat ein.`).then(msg => {msg.delete(7000)});
    return;
       }
      
if(message.content === `${prefix}verify ${randomN}`) {
  let randomM2 = Math.floor(Math.random() * 1000000)
  random[message.author.id] = {
    number: randomM2 
  }
  fs.writeFile("./random.json", JSON.stringify(random), (err) => {
    if(err) console.log(err)
  });
        
       if(!verify[message.guild.id]){
          verify[message.guild.id] = {
          verifyrole: "Player",
          verifychannel: "verify"
        }
      }
        let verifyc = verify[message.guild.id].verifychannel
        if(!verifyc) return;
        
       let verifyr = verify[message.guild.id].verifyrole
       if(!verifyr) return;
      if(message.channel.name === verifyc) {
           if(message.member.hasPermission('MANAGE_GUILD')) return;
           if(!message.content === `${prefix}verify`) {
    message.channel.send(`
    In diesem Kanal musst du dich Verifizieren!
    `).then(msg => {msg.delete(2000)});
    message.delete();
    return;
    }
}
    let rrole = message.guild.roles.find(r => r.name === verifyr);
    if(message.member.roles.has(rrole.id)) return message.channel.send(`
    Du bist schon Verifiziert!
    `).then(msg => {msg.delete(2000)});
    let mrole = require("../welcome.json");
    if(!mrole[message.guild.id]) return;
    let mmrole = mrole[message.guild.id].welcomerole
    let rrole22 = message.guild.roles.find(r => r.name === mmrole);
    message.member.addRole(rrole);
    message.member.removeRole(rrole22);
    message.member.send(`
    Du bist nun Verifiziert!`)
    message.delete();
    }
  }
  if(la === "us") {
    if(message.content === `${prefix}verify`) {
message.delete();
 message.channel.send(`Please enter **!verify ${randomN}** in the chat!`).then(msg => {msg.delete(7000)});
 return;
    }
    if(!args[0] === `${randomN}`) {
      message.delete()
      message.channel.send("If you don't now the code, enter **!verfy** again!").then(msg => {msg.delete(5000)});
      return;
    }
if(message.content === `${prefix}verify ${randomN}`) {
  let randomM2 = Math.floor(Math.random() * 1000000)
  random[message.author.id] = {
    number: randomM2 
  }
  fs.writeFile("./random.json", JSON.stringify(random), (err) => {
    if(err) console.log(err)
  });
      if(!verify[message.guild.id]){
         verify[message.guild.id] = {
         verifyrole: "Player",
         verifychannel: "verify"
       }
     }
       let verifyc = verify[message.guild.id].verifychannel
       if(!verifyc) return;
       
      let verifyr = verify[message.guild.id].verifyrole
      if(!verifyr) return;
     if(message.channel.name === verifyc) {
          if(message.member.hasPermission('MANAGE_GUILD')) return;
        if(!message.content === `${prefix}verify`) {
    message.channel.send(`
    In this channel you have to verify yourself!
    `).then(msg => {msg.delete(2000)});
    message.delete();
    return;
    }

    let rrole = message.guild.roles.find(r => r.name === verifyr);
    if(message.member.roles.has(rrole.id)) return message.channel.send(`
    You are already verified!
    `).then(msg => {msg.delete(2000)});
    let mrole = require("../welcome.json");
    if(!mrole[message.guild.id]) return;
    let mmrole = mrole[message.guild.id].welcomerole
    let rrole22 = message.guild.roles.find(r => r.name === mmrole);
    message.member.addRole(rrole);
    message.member.removeRole(rrole22);
    message.member.send(`
    You are now verified!`)
    message.delete();
    }
}
}
}
module.exports.help = {
    name: "verify"
}
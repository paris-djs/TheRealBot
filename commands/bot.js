const Discord = require("discord.js");
const config = require("../config.json")
const ownerID = config.owner;
const fs = require("fs");
module.exports.run = async(client, message, args, la) => {
    if(la === "de") {
if(!args[0]) return message.channel.send(`
__Bot User Commands:__
**!bot info**
**!bot credits**

__Bot Admin Commands:__
**!bot help** - Um alle Admin Commands zu sehen!
`)
if(args[0] === "info") {
const embed = new Discord.RichEmbed()
.setAuthor(`TheRealBot - Info`)
.addField(`Bot Version`, `v2.7`)
.addField(`Bot Invite`, `[Click here](https://bit.ly/TheRealBot)`)
.addField(`Bot Support Server`, `[Click here](https://discord.me/TheRealJanDC)`)
.addField(`Owner's Website`, `[Click here](https://bit.ly/TheRealJan)`)
message.channel.send(embed)
}
if(args[0] === "credits") {
    const embed = new Discord.RichEmbed()
    .setAuthor("TheRealBot - Credits")
    .setDescription(`
__Owner/Developer/Founder:__
**TheRealJan##5923** (285418000734093312)

__Admins:__
**Finnie#0715** (502820682237870080)
**Justinsenta#4554** (364040788784578562)
`)
message.channel.send(embed)
}
const admins = ["285418000734093312", "364040788784578562", "502820682237870080"];
    if(!admins.some(word => message.author.id.includes(word)) ) {
      message.delete();
      return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: BOT_ADMIN**`);
    }
}
    if(la === "us") {
    if(!args[0]) return message.channel.send(`
        __Bot User Commands:__
        **!bot info**
        **!bot credits**
        
        __Bot Admin Commands:__
        **!bot help** - To see all Admin Commands!
        `)
        if(args[0] === "info") {
        const embed = new Discord.RichEmbed()
        .setAuthor(`TheRealBot - Info`)
        .addField(`Bot Invite`, `[Click here](https://bit.ly/TheRealBot)`)
        .addField(`Bot Vote`, `[Click here](https://bit.ly/TheRealBot-Vote)`)
        .addField(`Bot Support Server`, `[Click here](https://discord.me/TheRealJanDC)`)
        .addField(`Owner's Website`, `[Click here](https://bit.ly/TheRealJan)`)
        message.channel.send(embed)
        }
        if(args[0] === "credits") {
            const embed = new Discord.RichEmbed()
            .setAuthor("TheRealBot - Credits")
            .setDescription(`
        __Owner:__
        **TheRealJan 🎅#2006** (285418000734093312)
        
        __Admins:__
        **Finnie#0715** (502820682237870080)
        **Justinsenta#4554** (364040788784578562)
        `)
        message.channel.send(embed)
        }
        const admins = ["285418000734093312", "364040788784578562", "502820682237870080"];
            if(!admins.some(word => message.author.id.includes(word)) ) {
              message.delete();
              return message.channel.send(`
You do not have rights for this! **Missing Rights: BOT_ADMIN**`);
            
}
    }
let botcmd = args[0];
const embed5 = new Discord.RichEmbed()
.setAuthor("Help for the bot command:")
.setDescription(`

**!bot presence [Typ] [Beschreibung]** - Changes the presence of the bot!
**!bot status [online/idle/dnd/invisible]** - Changes the status of the bot!
**!bot reload [Command Name]** - Reloading the command of the bot!
**!bot server** - Shows all guilds who the bot are in!
**!bot stop** - Stopps the bot.
**!bot eval [Code]** - Starts the code.

`)
if(botcmd === "restart") {
    await message.channel.send("Der Bot wird nun neugestartet!")
    WshShell = new ActiveXObject("WScript.Shell");
    WshShell.Run("C:\Users\jan\AppData\Local\Bot\start.bat",1,true);
    
    process.exit().catch((e) => { console.error(e); });
}
if(botcmd === "botnews"){
    if(args[1] === "de") {
    if(args[2] === "1") {
if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
let botnews = require("../botnewsde.json");
botnews[1] = {
    news: args.slice(3).join(" ")
}
fs.writeFile("./botnewsde.json", JSON.stringify(botnews), (err) => {
    if(err) console.log(err)
})
return message.channel.send("Die neuen News sind nun Online!")
}
    if(args[2] === "2") {
        if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
        let botnews = require("../botnewsde.json");
        botnews[2] = {
            news: args.slice(3).join(" ")
        }
        fs.writeFile("./botnewsde.json", JSON.stringify(botnews), (err) => {
            if(err) console.log(err)
        })
       return  message.channel.send("Die neuen News sind nun Online!")
        }
        if(args[2] === "3") {
            if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
            let botnews = require("../botnewsde.json");
            botnews[3] = {
                news: args.slice(3).join(" ")
            }
            fs.writeFile("./botnewsde.json", JSON.stringify(botnews), (err) => {
                if(err) console.log(err)
            })
         return   message.channel.send("Die neuen News sind nun Online!")
            }
            if(args[2] === "4") {
                if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
                let botnews = require("../botnewsde.json");
                botnews[4] = {
                    news: args.slice(3).join(" ")
                }
                fs.writeFile("./botnewsde.json", JSON.stringify(botnews), (err) => {
                    if(err) console.log(err)
                })
              return  message.channel.send("Die neuen News sind nun Online!")
                }
                if(args[2] === "5") {
                    if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
                    let botnews = require("../botnewsde.json");
                    botnews[5] = {
                        news: args.slice(3).join(" ")
                    }
                    fs.writeFile("./botnewsde.json", JSON.stringify(botnews), (err) => {
                        if(err) console.log(err)
                    })
                  return  message.channel.send("Die neuen News sind nun Online!")
                    }
                }
                if(args[1] === "us") {
                    if(args[2] === "1") {
                if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
                let botnews = require("../botnewsus.json");
                botnews[1] = {
                    news: args.slice(3).join(" ")
                }
                fs.writeFile("./botnewsus.json", JSON.stringify(botnews), (err) => {
                    if(err) console.log(err)
                })
                return message.channel.send("Die neuen News sind nun Online!")
                }
                if(args[2] === "1") {
                    if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
                    let botnews = require("../botnewsus.json");
                    botnews[1] = {
                        news: args.slice(3).join(" ")
                    }
                    fs.writeFile("./botnewsus.json", JSON.stringify(botnews), (err) => {
                        if(err) console.log(err)
                    })
                    return message.channel.send("Die neuen News sind nun Online!")
                    }
                    if(args[2] === "2") {
                        if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
                        let botnews = require("../botnewsus.json");
                        botnews[2] = {
                            news: args.slice(3).join(" ")
                        }
                        fs.writeFile("./botnewsus.json", JSON.stringify(botnews), (err) => {
                            if(err) console.log(err)
                        })
                       return  message.channel.send("Die neuen News sind nun Online!")
                        }
                        if(args[2] === "3") {
                            if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
                            let botnews = require("../botnewsus.json");
                            botnews[3] = {
                                news: args.slice(3).join(" ")
                            }
                            fs.writeFile("./botnewsus.json", JSON.stringify(botnews), (err) => {
                                if(err) console.log(err)
                            })
                         return   message.channel.send("Die neuen News sind nun Online!")
                            }
                            if(args[2] === "4") {
                                if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
                                let botnews = require("../botnewsus.json");
                                botnews[4] = {
                                    news: args.slice(3).join(" ")
                                }
                                fs.writeFile("./botnewsus.json", JSON.stringify(botnews), (err) => {
                                    if(err) console.log(err)
                                })
                              return  message.channel.send("Die neuen News sind nun Online!")
                                }
                                if(args[2] === "5") {
                                    if(!args.slice(3).join(" ")) return message.channel.send("Du musst eine Bot-Neuigkeit angeben!")
                                    let botnews = require("../botnewsus.json");
                                    botnews[5] = {
                                        news: args.slice(3).join(" ")
                                    }
                                    fs.writeFile("./botnewsus.json", JSON.stringify(botnews), (err) => {
                                        if(err) console.log(err)
                                    })
                                  return  message.channel.send("Die neuen News sind nun Online!")
                                    }
                                }

}
if(!args[0]) return message.channel.send(embed5);

if(botcmd === "reload") {
if(!args || args.size < 1) return message.reply("Du musst ein Command angeben!");
const commandName = args[1];
// Check if the command exists and is valid
if(!client.commands.has(commandName)) {
  return message.channel.send("❌ Dieser Command existiert nicht!");
}
// the path is relative to the *current folder*, so just ./filename.js
delete require.cache[require.resolve(`./${commandName}.js`)];
// We also need to delete and reload the command from the client.commands Enmap
client.commands.delete(commandName);
const props = require(`./${commandName}.js`);
client.commands.set(commandName, props)

message.channel.send(`✅ Der Command ${commandName} wurde neugeladen!`)
console.log(`Der Command ${commandName} wurde von ${message.author.tag} neugeladen!`)
}
if(botcmd === "eco") {
    let coins = require("../coins.json");
    let spieler = message.guild.member(message.mentions.users.first()) || message.member;
    if(!coins[spieler.id]) {
        coins[spieler.id] = {
            coins: 0
        }
    }
    let ccoins = coins[spieler.id].coins
    coins[spieler.id] = {
        coins: parseInt(args[2]) 
    }
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) cosole.log(err)
      });
      message.channel.send(`The player ${spieler.user.username} has now ${args[2]} Coins!`)
}
if(botcmd === "stop") {
    const embed9 = new Discord.RichEmbed()
    .setAuthor("Bist du dir sicher?")
    const filter = (reaction, user) => ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    let msg = message.channel.send(embed9).then(async msg =>{
            await msg.react("✅")
            await msg.react("❌")
    
        msg.awaitReactions(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        }).then(collected =>{
    
         const reaction = collected.first();
    
         switch (reaction.emoji.name) {
             case '✅':
             msg.edit("Der Bot wird gestoppt...")
             setTimeout(function(){
                msg.delete()
                    }, ms('2s'));
             setTimeout(function(){
          process.exit().catch((e) => { console.error(e); });   
              }, ms('2s'));
             
             break;
             case '❌':
             msg.edit("Der Bot wurde nicht gestoppt.").then(msg => {msg.delete(5000)});
    
         }
    
        })
    });
    return;
}
if(botcmd === "server") {
    let string = '';

    client.guilds.forEach(guild => {
        string += '***Server Name:*** ' + guild.name + '\n' + '***Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("The Bot is on ", string)
        .setTimestamp()
    message.channel.send(botembed);
}
if(botcmd === "status") {
    let status = args[1];
    if(!status) return message.channel.send("Usage: !status [online/idle/dnd/invisible]")
        message.channel.send(`The Status of the bot is now **${status}**.`)
    client.user.setStatus(`${status}`);
}
if(botcmd === "presence") {
    let Type = args[1] || `!help | ${client.guilds.size} Server`;
    let Description = args.slice(2).join(" ")
    if(message.author.id !== "285418000734093312") return;
    if(!Type) return message.channel.send("You have to specifiy the type! Usage: !presence **[WATCHING/PLAYING/LISTENING] [TEXT]**");
    if(!Description) return message.channel.send("You have to specify the text! Usage: **!presence [WATCHING/PLAYING/LISTENING] [TEXT]**");
    message.channel.send(`The Presence of the bot is now ${Type} and the description ${Description}.`)
    client.user.setActivity(`${Description}`, { type: `${Type}` });
}
if(botcmd === "presencer") {
    client.user.setActivity(`!help | v2.0`, { type: `WATCHING` });
    message.channel.send("The presence was reloaded!")
}
if(botcmd === "help") {
    message.channel.send(embed5)
}
if(botcmd === "eval") {
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
try {
    const code = args.slice(1).join(" ")
    if(!code) return message.channel.send(`
You have to specify the code!
    `)
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
    message.channel.send(clean(evaled), {code:"xl"});
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}
if(botcmd === "blacklist") {
   let player = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
   if(player.id === "285418000734093312") return message.channel.send("Du kannst diesen Spieler nicht Blacklisten!");
   let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
   let grund = args.slice(2).join(" ");
   if(!player) {
       message.channel.send(`You have to specify the player!`)
       return;
   }
   if(!grund) {
       message.channel.send("You have to specify the reason!")
       return;
   }
   
   blacklist[player.id] = {
       reason: `${grund}`
   }
   fs.writeFile("./blacklist.json", JSON.stringify(blacklist), (err) => {
    if(err) cosole.log(err)
  });
  message.channel.send("Der Spieler wurde erfolgreich von allen Commands blockiert!")

}

};

module.exports.help = {
    name: "bot"
}
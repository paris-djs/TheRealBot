const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args, la) => {
if(la === "de") {
    if(!message.member.hasPermission('MANAGE_GUILD')) {
        message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_GUILD**`)
        }
        if(args[0] === "adrole") {
            let ad = require("../ad.json");
            if(!args[1]) return message.channel.send("Du musst eine Werbungrolle angeben (ohne @)!")
       ad[message.guild.id] = {
           c: `${args[1]}`
       }
       fs.writeFile("./ad.json", JSON.stringify(ad), (err) => {
        if(err) console.log(err)
    })
    message.channel.send(`Die Werbungrolle ist nun **${args[1]}**, und alle die diese Rolle haben, werden nicht vom Bot blockiert, wenn sie Werbung machen!`)
return; 
        }
        if(args[0] === "log") {
let logc = require("../logc.json");
if(!args[1]) return message.channel.send("Du musst einen Log-Channel angeben (ohne #)!")
logc[message.guild.id] = {
    c: args[1]
}
fs.writeFile("./logc.json", JSON.stringify(logc), (err) => {
    if(err) console.log(err)
})
message.channel.send(`Der Log-Channel ist nun **${args[1]}** und wenn jemand gebannt, gekickt oder so wird, kommt das in diesen Channel!`)
return; 
}
        if(args[0] === "news") {
            let news = require("../news.json");
            if(!args[1]) return message.channel.send("Du musst einen News-Channel angeben!")
            news[message.guild.id] = {
                channel: args[1]
            }
            fs.writeFile("./news.json", JSON.stringify(news), (err) => {
                if(err) console.log(err)
            })
            message.channel.send(`Der News Channel ist nun ${args[1]}`)
        }
if(args[0] === "language") {
    let language = JSON.parse(fs.readFileSync("./language.json", "utf8"));
const admins = ["de", "us", "fr"];
 if(!args[1]) {
        let embed24 = new Discord.RichEmbed()
    .setAuthor(`Custom Language`)
    .setDescription(`
!setup language de = 🇩🇪 Deutsch
!setup language us = 🇺🇸 Englisch
!setup language fr = 🇫🇷 Französisch (2%)
    `)
    message.channel.send(embed24)
    return;
    }
    if(!admins.some(word => args[1].includes(word))) {
        message.channel.send(`Du kannst nur die Sprachen **de** , **us** und **fr** im Moment verwenden!`)
        return;
    }
   
    
    language[message.guild.id] = {
        language: args[1]
    }
    fs.writeFile("./language.json", JSON.stringify(language), (err) => {
        if(err) console.log(err)
    })
    args[1] = args[1].replace("us", `🇺🇸 Englisch`)
    args[1] = args[1].replace("de", `🇩🇪 Deutsch`)
    args[1] = args[1].replace("fr", `🇫🇷 Französisch`)
    const embed = new Discord.RichEmbed()
    .setAuthor(`Custom Language`)
    .setDescription(`Die Sprache wurde zu ${args[1]} geändert!`)
    message.channel.send(embed)
    return;
}
if(args[0] === "coins") {
if(!args[1]) return message.channel.send(`
Du musst angeben ob das Coin System aktiviert oder deaktiviert werden soll. 
`)
if(args[1] === "enable") {
    let coin = JSON.parse(fs.readFileSync("./coin.json", "utf8"));
    coin[message.guild.id] = {
        coin: "enabled"
    }
    fs.writeFile("./coin.json", JSON.stringify(coin), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(`
Das Coin System wurde **aktiviert**!`)
let owner = "285418000734093312";
let user = client.users.find(user => user.id == owner);
user.send(`Du musst den Bot restarten weil das Coin System an einem Server aktiviert wurde!`)
return;
}
if(args[1] === "disable") {
    let coin = JSON.parse(fs.readFileSync("./coin.json", "utf8"));
    coin[message.guild.id] = {
        coin: "disabled"
    }
    fs.writeFile("./coin.json", JSON.stringify(coin), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(`
Das Coin System wurde nun **deaktiviert**!`)
let owner = "285418000734093312";
let user = client.users.find(user => user.id == owner);
user.send(`Du musst den Bot restarten weil das Coin System an einem Server deaktiviert wurde!`)
return;
}
}
if(args[0] === "report") {
    if(!args[1]) return message.channel.send(`
Du musst den Report Kanal angeben!  
        `)
    let report = JSON.parse(fs.readFileSync("./reports.json", "utf8"));
    report[message.guild.id] = {
        reportchannel: args[1]
    };
    fs.writeFile("./reports.json", JSON.stringify(report), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(`
Der Report Kanal ist nun **${args[1]}**!`)
}
if(args[0] === "logc") {
    let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
    log[message.guild.id] = {
        logchannel: args[1]
    };
    fs.writeFile("./log.json", JSON.stringify(log), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(`
Der Log Kanal ist nun **${args[1]}**!`)
}
if(args[0] === "ticket") {
    if(!args[1]) return message.channel.send(`
Du musst den Ticket Kanal angeben!
                
                `)
    let ticket = JSON.parse(fs.readFileSync("./tickets.json", "utf8"));
    ticket[message.guild.id] = {
        ticketchannel: args[1]
    };
    fs.writeFile("./tickets.json", JSON.stringify(ticket), (err) => {
        if (err) console.log(err)
    });
    message.channel.send(`
Der Ticket Kanal ist nun **${args[1]}**!`)
}
if(args[0] === "verify") {
    if(!args[1]) return message.channel.send(`
Du musst den Verifizier Rolle angeben!   
`)
if(!args[2]) return message.channel.send(`
Du musst den Verifizier Kanal angeben!
            
            `)
    let verify = JSON.parse(fs.readFileSync("./verify.json", "utf8"));
    
        verify[message.guild.id] = {
          verifychannel: args[2],
          verifyrole: args[1]
        };
      
        fs.writeFile("./verify.json", JSON.stringify(verify), (err) => {
          if (err) console.log(err)
        });
        message.channel.send(`
Der Verify Kanal ist nun **${args[2]}** und die Verify Rolle **${args[1]}**!`)
    }

        if(args[0] === "prefix") {
            if(!args[1]) return message.channel.send(`
Du musst den Prefix angeben!
`)
            let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
            
              prefixes[message.guild.id] = {
                prefixes: args[1]
              };
            
              fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
                if (err) console.log(err)
              });
            
              let sEmbed = new Discord.RichEmbed()
              .setAuthor("Custom Prefix")
              .setColor("#FF9900")
              .setDescription(`Der Prefix wurde zu ${args[1]} geändert`);
    message.channel.send(sEmbed)
            
        }
    if(args[0] === "welcome") {
    let welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));

    welcome[message.guild.id] = {
      welcomemessage: args.slice(3).join(" "),
      welcomechannel: args[2],
      welcomerole: args[1]
    };
  
    fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
      if (err) console.log(err)
    });
    message.channel.send(`
Der Willkommenskanal ist nun **${args[2]}**, die Willkommens Rolle ist **${args[1]} und die Willkommensnachricht **${args.slice(3).join(" ")}**!`)
}
if(args[0] === "leave") {
    let leave = JSON.parse(fs.readFileSync("./leave.json", "utf8"));
    leave[message.guild.id] = {
       leavemessage: args.slice(2).join(" "),
       leavechannel: args[1]  
    };
    fs.writeFile("./leave.json", JSON.stringify(leave), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(` 
Der Leavekanal ist nun **${args[1]}** und die Leavenachricht **${args.slice(2).join(" ")}**!`)
}
if(!args[0]) {
const embed = new Discord.RichEmbed()
.setAuthor(`Setup Help`)
.setDescription(`

Gib !help setup 1/2 ein um Hilfe zu bekommen!

`)
message.channel.send(embed)
}
}
if(la === "fr") {
    if(!message.member.hasPermission('MANAGE_GUILD')) {
        message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_GUILD**`)
        }
        if(args[0] === "log") {
let logc = require("../logc.json");
if(!args[1]) return message.channel.send("Du musst einen Log-Channel angeben (ohne #)!")
logc[message.guild.id] = {
    c: args[1]
}
fs.writeFile("./logc.json", JSON.stringify(logc), (err) => {
    if(err) console.log(err)
})
message.channel.send(`Der Log-Channel ist nun **${args[1]}** und wenn jemand gebannt, gekickt oder so wird, kommt das in diesen Channel!`)
return; 
}
        if(args[0] === "news") {
            let news = require("../news.json");
            if(!args[1]) return message.channel.send("Du musst einen News-Channel angeben!")
            news[message.guild.id] = {
                channel: args[1]
            }
            fs.writeFile("./news.json", JSON.stringify(news), (err) => {
                if(err) console.log(err)
            })
            message.channel.send(`Der News Channel ist nun ${args[1]}`)
        }
if(args[0] === "language") {
    let language = JSON.parse(fs.readFileSync("./language.json", "utf8"));
const admins = ["de", "us", "fr"];
 if(!args[1]) {
        let embed24 = new Discord.RichEmbed()
    .setAuthor(`Custom Language`)
    .setDescription(`
!setup language de = 🇩🇪 Allemand
!setup language us = 🇺🇸 Anglais
!setup language fr = 🇫🇷 Français (2%)
    `)
    message.channel.send(embed24)
    return;
    }
    if(!admins.some(word => args[1].includes(word))) {
        message.channel.send(`Vous ne pouvez utiliser que les langues de, us et fr pour le moment!`)
        return;
    }
   
    
    language[message.guild.id] = {
        language: args[1]
    }
    fs.writeFile("./language.json", JSON.stringify(language), (err) => {
        if(err) console.log(err)
    })
    args[1] = args[1].replace("us", `🇺🇸 Anglais`)
    args[1] = args[1].replace("de", `🇩🇪 Allemand`)
    args[1] = args[1].replace("fr", `🇫🇷 Français`)
    const embed = new Discord.RichEmbed()
    .setAuthor(`Custom Language`)
    .setDescription(`Langue changée en ${args[1]}!`)
    message.channel.send(embed)
    return;
}
if(args[0] === "coins") {
if(!args[1]) return message.channel.send(`
Du musst angeben ob das Coin System aktiviert oder deaktiviert werden soll. 
`)
if(args[1] === "enable") {
    let coin = JSON.parse(fs.readFileSync("./coin.json", "utf8"));
    coin[message.guild.id] = {
        coin: "enabled"
    }
    fs.writeFile("./coin.json", JSON.stringify(coin), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(`
Das Coin System wurde **aktiviert**!`)
let owner = "285418000734093312";
let user = client.users.find(user => user.id == owner);
user.send(`Du musst den Bot restarten weil das Coin System an einem Server aktiviert wurde!`)
return;
}
if(args[1] === "disable") {
    let coin = JSON.parse(fs.readFileSync("./coin.json", "utf8"));
    coin[message.guild.id] = {
        coin: "disabled"
    }
    fs.writeFile("./coin.json", JSON.stringify(coin), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(`
Das Coin System wurde nun **deaktiviert**!`)
let owner = "285418000734093312";
let user = client.users.find(user => user.id == owner);
user.send(`Du musst den Bot restarten weil das Coin System an einem Server deaktiviert wurde!`)
return;
}
}
if(args[0] === "report") {
    if(!args[1]) return message.channel.send(`
Du musst den Report Kanal angeben!  
        `)
    let report = JSON.parse(fs.readFileSync("./reports.json", "utf8"));
    report[message.guild.id] = {
        reportchannel: args[1]
    };
    fs.writeFile("./reports.json", JSON.stringify(report), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(`
Der Report Kanal ist nun **${args[1]}**!`)
}
if(args[0] === "logc") {
    let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
    log[message.guild.id] = {
        logchannel: args[1]
    };
    fs.writeFile("./log.json", JSON.stringify(log), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(`
Der Log Kanal ist nun **${args[1]}**!`)
}
if(args[0] === "ticket") {
    if(!args[1]) return message.channel.send(`
Du musst den Ticket Kanal angeben!
                
                `)
    let ticket = JSON.parse(fs.readFileSync("./tickets.json", "utf8"));
    ticket[message.guild.id] = {
        ticketchannel: args[1]
    };
    fs.writeFile("./tickets.json", JSON.stringify(ticket), (err) => {
        if (err) console.log(err)
    });
    message.channel.send(`
Der Ticket Kanal ist nun **${args[1]}**!`)
}
if(args[0] === "verify") {
    if(!args[1]) return message.channel.send(`
Du musst den Verifizier Rolle angeben!   
`)
if(!args[2]) return message.channel.send(`
Du musst den Verifizier Kanal angeben!
            
            `)
    let verify = JSON.parse(fs.readFileSync("./verify.json", "utf8"));
    
        verify[message.guild.id] = {
          verifychannel: args[2],
          verifyrole: args[1]
        };
      
        fs.writeFile("./verify.json", JSON.stringify(verify), (err) => {
          if (err) console.log(err)
        });
        message.channel.send(`
Der Verify Kanal ist nun **${args[2]}** und die Verify Rolle **${args[1]}**!`)
    }

        if(args[0] === "prefix") {
            if(!args[1]) return message.channel.send(`
Du musst den Prefix angeben!
`)
            let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
            
              prefixes[message.guild.id] = {
                prefixes: args[1]
              };
            
              fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
                if (err) console.log(err)
              });
            
              let sEmbed = new Discord.RichEmbed()
              .setAuthor("Custom Prefix")
              .setColor("#FF9900")
              .setDescription(`Der Prefix wurde zu ${args[1]} geändert`);
    message.channel.send(sEmbed)
            
        }
    if(args[0] === "welcome") {
    let welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));

    welcome[message.guild.id] = {
      welcomemessage: args.slice(3).join(" "),
      welcomechannel: args[2],
      welcomerole: args[1]
    };
  
    fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
      if (err) console.log(err)
    });
    message.channel.send(`
Der Willkommenskanal ist nun **${args[2]}**, die Willkommens Rolle ist **${args[1]} und die Willkommensnachricht **${args.slice(3).join(" ")}**!`)
}
if(args[0] === "leave") {
    let leave = JSON.parse(fs.readFileSync("./leave.json", "utf8"));
    leave[message.guild.id] = {
       leavemessage: args.slice(2).join(" "),
       leavechannel: args[1]  
    };
    fs.writeFile("./leave.json", JSON.stringify(leave), (err) => {
        if(err) console.log(err)
    });
    message.channel.send(` 
Der Leavekanal ist nun **${args[1]}** und die Leavenachricht **${args.slice(2).join(" ")}**!`)
}
if(!args[0]) {
const embed = new Discord.RichEmbed()
.setAuthor(`Setup Help`)
.setDescription(`

Gib !help setup 1/2 ein um Hilfe zu bekommen!

`)
message.channel.send(embed)
}
}
if(la === "us") {
    if(!message.member.hasPermission('MANAGE_GUILD')) {
        message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_GUILD**
`)
        }
        if(args[0] === "adrole") {
            let ad = require("../ad.json");
            if(!args[1]) return message.channel.send("You have to specify the adrole! (without @)!")
       ad[message.guild.id] = {
           c: `${args[1]}`
       }
       fs.writeFile("./ad.json", JSON.stringify(ad), (err) => {
        if(err) console.log(err)
    })
    message.channel.send(`The Adrole is now **${args[1]}**!`)
return; 
        }
        if(args[0] === "news") {
            let news = require("../news.json");
            if(!args[1]) return message.channel.send("You have to specify a channel!")
            news[message.guild.id] = {
                channel: args[1]
            }
            fs.writeFile("./news.json", JSON.stringify(news), (err) => {
                if(err) console.log(err)
            })
            message.channel.send(`The news channel is now ${args[1]}`)
        }
    if(args[0] === "language") {
        let language = JSON.parse(fs.readFileSync("./language.json", "utf8"));
    const admins = ["de", "us", "fr"];
    let embed24 = new Discord.RichEmbed()
    .setAuthor(`Custom Language`)
    .setDescription(`
!setup language de = 🇩🇪 German
!setup language us = 🇺🇸 English
!setup language fr = 🇫🇷 French (2%)
    `)
   
     if(!args[1]) return message.channel.send(embed24)
        if(!admins.some(word => args[1].includes(word))) {
            message.channel.send(`You can only use the languages **de** , **us** and **fr**`)
            return;
        }
        
        language[message.guild.id] = {
            language: args[1]
        }
        fs.writeFile("./language.json", JSON.stringify(language), (err) => {
            if(err) console.log(err)
        })
        args[1] = args[1].replace("us", `🇺🇸 English`)
        args[1] = args[1].replace("de", `🇩🇪 German`)
        args[1] = args[1].replace("fr", `🇫🇷 French`)
        const embed = new Discord.RichEmbed()
        .setAuthor(`Custom Language`)
        .setDescription(`The language was changed to ${args[1]}!`)
        message.channel.send(embed)
    }
    if(args[0] === "coins") {
    if(!args[1]) return message.channel.send(`
You have to specify if the Coin System will be enabled or disabled.
    `)
    if(args[1] === "enable") {
        let coin = JSON.parse(fs.readFileSync("./coin.json", "utf8"));
        coin[message.guild.id] = {
            coin: "enabled"
        }
        fs.writeFile("./coin.json", JSON.stringify(coin), (err) => {
            if(err) console.log(err)
        });
        message.channel.send(`
🇺🇸 The coin system was **enabled**!`)
    let owner = "285418000734093312";
    let user = client.users.find(user => user.id == owner);
    user.send(`Du musst den Bot restarten weil das Coin System an einem Server aktiviert wurde!`)
    return;
    }
    if(args[1] === "disable") {
        let coin = JSON.parse(fs.readFileSync("./coin.json", "utf8"));
        coin[message.guild.id] = {
            coin: "disabled"
        }
        fs.writeFile("./coin.json", JSON.stringify(coin), (err) => {
            if(err) console.log(err)
        });
        message.channel.send(`
The coin system was **disabled**!`)
    let owner = "285418000734093312";
    let user = client.users.find(user => user.id == owner);
    user.send(`Du musst den Bot restarten weil das Coin System an einem Server deaktiviert wurde!`)
    return;
    }
    }
    if(args[0] === "report") {
        if(!args[1]) return message.channel.send(`
You have to specify the report channel!
            `)
        let report = JSON.parse(fs.readFileSync("./reports.json", "utf8"));
        report[message.guild.id] = {
            reportchannel: args[1]
        };
        fs.writeFile("./reports.json", JSON.stringify(report), (err) => {
            if(err) console.log(err)
        });
        message.channel.send(`
The Report channel is now **${args[1]}**!`)
    }
    if(args[0] === "logc") {
        let log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
        log[message.guild.id] = {
            logchannel: args[1]
        };
        fs.writeFile("./log.json", JSON.stringify(log), (err) => {
            if(err) console.log(err)
        });
        message.channel.send(`
The Log channel is now **${args[1]}**!`)
    }
    if(args[0] === "ticket") {
        if(!args[1]) return message.channel.send(`
You have to specify the ticket channel!               
                    `)
        let ticket = JSON.parse(fs.readFileSync("./tickets.json", "utf8"));
        ticket[message.guild.id] = {
            ticketchannel: args[1]
        };
        fs.writeFile("./tickets.json", JSON.stringify(ticket), (err) => {
            if (err) console.log(err)
        });
        message.channel.send(`
The Ticket channel is now **${args[1]}**!`)
    }
    if(args[0] === "verify") {
        if(!args[1]) return message.channel.send(`
You have to specify the verify role!  
    `)
    if(!args[2]) return message.channel.send(`
You have to specify the verify channel!
                
                `)
        let verify = JSON.parse(fs.readFileSync("./verify.json", "utf8"));
        
            verify[message.guild.id] = {
              verifychannel: args[2],
              verifyrole: args[1]
            };
          
            fs.writeFile("./verify.json", JSON.stringify(verify), (err) => {
              if (err) console.log(err)
            });
            message.channel.send(`
The verify channel is now **${args[2]}** and the verify role **${args[1]}**!`)
        }
    
            if(args[0] === "prefix") {
                if(!args[1]) return message.channel.send(`
You have to specify the prefix!
    `)
                let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
                
                  prefixes[message.guild.id] = {
                    prefixes: args[1]
                  };
                
                  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
                    if (err) console.log(err)
                  });
                
                const embed2 = new Discord.RichEmbed()
                .setAuthor('Custom Prefix')
                .setColor('FF9900')
                .setDescription(`The prefix has been changed to ${args[1]}`)
                
                message.channel.send(embed2)
            }
        if(args[0] === "welcome") {
        let welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));
    
        welcome[message.guild.id] = {
          welcomemessage: args.slice(3).join(" "),
          welcomechannel: args[2],
          welcomerole: args[1]
        };
      
        fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
          if (err) console.log(err)
        });
        message.channel.send(`
The welcomechannel is now **${args[2]}**, the Welcome Role: **${args[1]} and the welcomemessage **${args.slice(2).join(" ")}**!`)
    }
    if(args[0] === "leave") {
        let leave = JSON.parse(fs.readFileSync("./leave.json", "utf8"));
        leave[message.guild.id] = {
           leavemessage: args.slice(2).join(" "),
           leavechannel: args[1]  
        };
        fs.writeFile("./leave.json", JSON.stringify(leave), (err) => {
            if(err) console.log(err)
        });
        message.channel.send(` 
The leavechannel is now **${args[1]}** and the leavemessage **${args.slice(2).join(" ")}**!`)
    }
    if(!args[0]) {
    const embed2 = new Discord.RichEmbed()
    .setAuthor(`Setup Help`)
    .setDescription(`
  
Enter !help setup 1/2 to get help!

    `)
message.channel.send(embed2)
    }
}
}



module.exports.help = {
    name: "setup"
}
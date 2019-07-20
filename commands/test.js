const Discord = require("discord.js");
const ms = require("ms")
const hp = require("../hp.json")
const fs = require("fs")
const str = require("../str.json")
const xp = require("../xp.json")
const coins = require("../coins.json")

module.exports.run = async(client,message,args,la) => {

let member = message.mentions.members.first();
if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 0
   };
 }
 if(!xp[member.user.id]){
    xp[member.user.id] = {
      xp: 0,
      level: 0
   };
 }
 if(!coins[message.author.id]) {
     coins[message.author.id] = {
         coins: 0
     }
 }
 if(!coins[member.user.id]) {
    coins[member.user.id] = {
        coins: 0
    }
}
if(la === "de") {
    if(!str[message.author.id]) {
        str[message.author.id] = {
            str: 0,
            lvl: "keine Stärke"
        }
    }
    if(!str[member.user.id]) {
        str[member.user.id] = {
            str: 0,
            lvl: "keine Stärke"
        }
    }
    if(str[message.author.id].str === 2) {
        str[message.author.id] = {
            str: 2,
            lvl: "Stärke I"
        }
    }
    if(str[member.user.id].str === 2) {
        str[member.user.id] = {
            str: 2,
            lvl: "Stärke I"
        }
    }
    if(str[message.author.id].str === 3) {
        str[message.author.id] = {
            str: 3,
            lvl: "Stärke II"
        }
    }
    if(str[member.user.id].str === 3) {
        str[member.user.id] = {
            str: 3,
            lvl: "Stärke 2"
        }
    }
    if(str[message.author.id].str === 4) {
        str[message.author.id] = {
            str: 4,
            lvl: "Stärke III"
        }
    }
    if(str[member.user.id].str === 4) {
        str[member.user.id] = {
            str: 4,
            lvl: "Stärke III"
        }
    }
    let strlvl1 = str[message.author.id].lvl
    let stärke = str[message.author.id].str
    
    let strlvl22 = str[member.user.id].lvl
    let stärke2 = str[member.user.id].str
if(!member) return message.channel.send("Du musst jemanden angeben, den du angreifst!")
let hp1 = 50
let hp2 = 50
let attackhp = Math.floor(Math.random() * 13 - 1);
let attackhp2 = Math.floor(Math.random() * 13 - 1);
let attackhp3 = Math.floor(Math.random() * 13 - 1);
let attackhp4 = Math.floor(Math.random() * 13 - 1);
let attackhp5 = Math.floor(Math.random() * 13 - 1);
let attackhp6 = Math.floor(Math.random() * 13 - 1);
let attackhp7 = Math.floor(Math.random() * 13 - 1);
let attackhp8 = Math.floor(Math.random() * 13 - 1);
let attackhp9 = Math.floor(Math.random() * 13 - 1);
let attackhp10 = Math.floor(Math.random() * 13 -1);
let attackhp11 = Math.floor(Math.random() * 13 - 1);
let attackhp12 = Math.floor(Math.random() * 13 - 1);
let attackhp13 = Math.floor(Math.random() * 13 - 1);
let attackhp14 = Math.floor(Math.random() * 13 - 1);
let attackhp15 = Math.floor(Math.random() * 13 - 1);
let attackhp16 = Math.floor(Math.random() * 13 - 1);
let attackhp17 = Math.floor(Math.random() * 13 - 1);
let attackhp18 = Math.floor(Math.random() * 13 - 1);
let attackhp19 = Math.floor(Math.random() * 13 - 1);
let attackhp20 = Math.floor(Math.random() * 13 - 1);
let xplvl = Math.floor(Math.random() * 40);
message.channel.send("Der erste, der mit den HP im Minus ist, oder 0 HP hat, hat verloren! (Du hast eine geringe Chance, 1 HP zu heilen!)")
const embed = new Discord.RichEmbed()
.setAuthor(`${message.author.username} attackiert ${member.user.username}`)
.setDescription(`
⚔️${message.author}⚔️  **${hp1}HP** (hat ${strlvl1})

🛡️${member}🛡️  **${hp2}HP** (hat ${strlvl22})
`)

let msg = await message.channel.send(embed)
setTimeout(function(){
    let hp11 = 50 - attackhp - stärke2
    let hp22 = 50 - attackhp2 - stärke
    hp[message.author.id] = {
        hp: hp11,
        hp2: hp22
    }
    fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
        if(err) console.log(err)
    })    
    const embed2 = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
    .setDescription(`
    ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
    
    🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
    `)
    msg.edit(embed2)
    setTimeout(function(){
        let hp111 = hp[message.author.id].hp - attackhp3 - stärke2
        let hp222 = hp[message.author.id].hp2 - attackhp4 - stärke
        hp[message.author.id] = {
            hp: hp111,
            hp2: hp222
        }
        fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
            if(err) console.log(err)
        })    
        const embed3 = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
        .setDescription(`
        ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
        
        🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
        `)
        msg.edit(embed3)
        setTimeout(function(){
            if(hp[message.author.id].hp < 1) {
                coins[member.user.id] = {
                    coins: coins[member.user.id].coins + 40
                }
            xp[member.user.id] = {
                xp: xp[member.user.id].xp + xplvl,
                level: xp[member.user.id].level
            }
            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                if(err) console.log(err)
            })
            return message.channel.send(`${member} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) }
            if(hp[message.author.id].hp2 < 1) {
                coins[message.author.id] = {
                    coins: coins[message.author.id].coins + 40
                }
                xp[message.author.id] = {
                    xp: xp[message.author.id].xp + xplvl,
                    level: xp[message.author.id].level
                }
                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                    if(err) console.log(err)
                })
                return message.channel.send(`${message.author} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) 
              
            } 
            let hp1111 = hp[message.author.id].hp - attackhp5 - stärke2
            let hp2222 = hp[message.author.id].hp2 - attackhp6 - stärke
            hp[message.author.id] = {
                hp: hp1111,
                hp2: hp2222
            }
            fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                if(err) console.log(err)
            })    
            const embed3 = new Discord.RichEmbed()
            .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
            .setDescription(`
            ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
            
            🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
            `)
            msg.edit(embed3)
            setTimeout(function(){
                if(hp[message.author.id].hp < 1) {
                    coins[member.user.id] = {
                        coins: coins[member.user.id].coins + 40
                    }
                xp[member.user.id] = {
                    xp: xp[member.user.id].xp + xplvl,
                    level: xp[member.user.id].level
                }
                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                    if(err) console.log(err)
                })
                return message.channel.send(`${member} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) }
                if(hp[message.author.id].hp2 < 1) {
                    coins[message.author.id] = {
                        coins: coins[message.author.id].coins + 40
                    }
                    xp[message.author.id] = {
                        xp: xp[message.author.id].xp + xplvl,
                        level: xp[message.author.id].level
                    }
                    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                        if(err) console.log(err)
                    })
                    return message.channel.send(`${message.author} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) 
                  
                } 
                let hp11111 = hp[message.author.id].hp - attackhp7 - stärke2
                let hp22222 = hp[message.author.id].hp2 - attackhp8 - stärke
                hp[message.author.id] = {
                    hp: hp11111,
                    hp2: hp22222
                }
                fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                    if(err) console.log(err)
                })    
                const embed3 = new Discord.RichEmbed()
                .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
                .setDescription(`
                ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
                
                🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
                `)
                msg.edit(embed3)
                setTimeout(function(){
                    
                    if(hp[message.author.id].hp < 1) {
                        coins[member.user.id] = {
                            coins: coins[member.user.id].coins + 40
                        }
                    xp[member.user.id] = {
                        xp: xp[member.user.id].xp + xplvl,
                        level: xp[member.user.id].level
                    }
                    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                        if(err) console.log(err)
                    })
                    return message.channel.send(`${member} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) }
                    if(hp[message.author.id].hp2 < 1) {
                        coins[message.author.id] = {
                            coins: coins[message.author.id].coins + 40
                        }
                        xp[message.author.id] = {
                            xp: xp[message.author.id].xp + xplvl,
                            level: xp[message.author.id].level
                        }
                        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                            if(err) console.log(err)
                        })
                        return message.channel.send(`${message.author} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) 
                      
                    } 
                    let hp111111 = hp[message.author.id].hp - attackhp9 - stärke2
                    let hp222222 = hp[message.author.id].hp2 - attackhp10 - stärke
                    hp[message.author.id] = {
                        hp: hp111111,
                        hp2: hp222222
                    }
                    fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                        if(err) console.log(err)
                    })    
                    const embed3 = new Discord.RichEmbed()
                    .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
                    .setDescription(`
                    ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
                    
                    🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
                    `)
                    msg.edit(embed3)
                    setTimeout(function(){
                        
                        if(hp[message.author.id].hp < 1) {
                            coins[member.user.id] = {
                                coins: coins[member.user.id].coins + 40
                            }
                        xp[member.user.id] = {
                            xp: xp[member.user.id].xp + xplvl,
                            level: xp[member.user.id].level
                        }
                        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                            if(err) console.log(err)
                        })
                        return message.channel.send(`${member} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) }
                        if(hp[message.author.id].hp2 < 1) {
                            coins[message.author.id] = {
                                coins: coins[message.author.id].coins + 40
                            }
                            xp[message.author.id] = {
                                xp: xp[message.author.id].xp + xplvl,
                                level: xp[message.author.id].level
                            }
                            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                if(err) console.log(err)
                            })
                            return message.channel.send(`${message.author} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) 
                          
                        } 
                        let hp1111111 = hp[message.author.id].hp - attackhp11 - stärke2
                        let hp2222222 = hp[message.author.id].hp2 - attackhp12 - stärke
                        hp[message.author.id] = {
                            hp: hp1111111,
                            hp2: hp2222222
                        }
                        fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                            if(err) console.log(err)
                        })    
                        const embed3 = new Discord.RichEmbed()
                        .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
                        .setDescription(`
                        ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
                        
                        🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
                        `)
                        msg.edit(embed3)
                        setTimeout(function(){
                            
                            if(hp[message.author.id].hp < 1) {
                                coins[member.user.id] = {
                                    coins: coins[member.user.id].coins + 40
                                }
                            xp[member.user.id] = {
                                xp: xp[member.user.id].xp + xplvl,
                                level: xp[member.user.id].level
                            }
                            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                if(err) console.log(err)
                            })
                            return message.channel.send(`${member} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) }
                            if(hp[message.author.id].hp2 < 1) {
                                coins[message.author.id] = {
                                    coins: coins[message.author.id].coins + 40
                                }
                                xp[message.author.id] = {
                                    xp: xp[message.author.id].xp + xplvl,
                                    level: xp[message.author.id].level
                                }
                                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                    if(err) console.log(err)
                                })
                                return message.channel.send(`${message.author} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) 
                              
                            } 
                            let hp11111111 = hp[message.author.id].hp - attackhp13 - stärke2
                            let hp22222222 = hp[message.author.id].hp2 - attackhp14 - stärke
                            hp[message.author.id] = {
                                hp: hp11111111,
                                hp2: hp22222222
                            }
                            fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                if(err) console.log(err)
                            })    
                            const embed3 = new Discord.RichEmbed()
                            .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
                            .setDescription(`
                            ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
                            
                            🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
                            `)
                            msg.edit(embed3)
                            setTimeout(function(){
                                
                                if(hp[message.author.id].hp < 1) {
                                    coins[member.user.id] = {
                                        coins: coins[member.user.id].coins + 40
                                    }
                                xp[member.user.id] = {
                                    xp: xp[member.user.id].xp + xplvl,
                                    level: xp[member.user.id].level
                                }
                                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                    if(err) console.log(err)
                                })
                                return message.channel.send(`${member} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) }
                                if(hp[message.author.id].hp2 < 1) {
                                    coins[message.author.id] = {
                                        coins: coins[message.author.id].coins + 40
                                    }
                                    xp[message.author.id] = {
                                        xp: xp[message.author.id].xp + xplvl,
                                        level: xp[message.author.id].level
                                    }
                                    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                        if(err) console.log(err)
                                    })
                                    return message.channel.send(`${message.author} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) 
                                  
                                } 
                                let hp111111111 = hp[message.author.id].hp - attackhp15 - stärke2
                                let hp222222222 = hp[message.author.id].hp2 - attackhp16 - stärke
                                hp[message.author.id] = {
                                    hp: hp111111111,
                                    hp2: hp222222222
                                }
                                fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                    if(err) console.log(err)
                                })    
                                const embed3 = new Discord.RichEmbed()
.setAuthor(`${message.author.username} attackiert ${member.user.username}`)
                                .setDescription(`
                                ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
                                
                                🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
                                `)
                                msg.edit(embed3)
                                setTimeout(function(){
                                    
                                    if(hp[message.author.id].hp < 1) {
                                        coins[member.user.id] = {
                                            coins: coins[member.user.id].coins + 40
                                        }
                                    xp[member.user.id] = {
                                        xp: xp[member.user.id].xp + xplvl,
                                        level: xp[member.user.id].level
                                    }
                                    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                        if(err) console.log(err)
                                    })
                                    return message.channel.send(`${member} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) }
                                    if(hp[message.author.id].hp2 < 1) {
                                        coins[message.author.id] = {
                                            coins: coins[message.author.id].coins + 40
                                        }
                                        xp[message.author.id] = {
                                            xp: xp[message.author.id].xp + xplvl,
                                            level: xp[message.author.id].level
                                        }
                                        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                            if(err) console.log(err)
                                        })
                                        return message.channel.send(`${message.author} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) 
                                      
                                    } 
                                    let hp1111111111 = hp[message.author.id].hp - attackhp17 - stärke2
                                    let hp2222222222 = hp[message.author.id].hp2 - attackhp18 - stärke
                                    hp[message.author.id] = {
                                        hp: hp1111111111,
                                        hp2: hp2222222222
                                    }
                                    fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                        if(err) console.log(err)
                                    })    
                                    const embed3 = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
                                    .setDescription(`
                                    ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
                                    
                                    🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
                                    `)
                                    msg.edit(embed3)
                                    setTimeout(function(){
                                        
                                        if(hp[message.author.id].hp < 1) {
                                            coins[member.user.id] = {
                                                coins: coins[member.user.id].coins + 40
                                            }
                                        xp[member.user.id] = {
                                            xp: xp[member.user.id].xp + xplvl,
                                            level: xp[member.user.id].level
                                        }
                                        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                            if(err) console.log(err)
                                        })
                                        return message.channel.send(`${member} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) }
                                        if(hp[message.author.id].hp2 < 1) {
                                            coins[message.author.id] = {
                                                coins: coins[message.author.id].coins + 40
                                            }
                                            xp[message.author.id] = {
                                                xp: xp[message.author.id].xp + xplvl,
                                                level: xp[message.author.id].level
                                            }
                                            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                                if(err) console.log(err)
                                            })
                                            return message.channel.send(`${message.author} hat gewonnen, und hat ${xplvl} XP und 40 Coins bekommen!`) 
                                          
                                        } 
                                            let hp11111111111 = hp[message.author.id].hp - attackhp19 - stärke2
                                        let hp22222222222 = hp[message.author.id].hp2 - attackhp20 - stärke
                                        hp[message.author.id] = {
                                            hp: hp11111111111,
                                            hp2: hp22222222222
                                        }
                                        fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                            if(err) console.log(err)
                                        })    
                                        const embed3 = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} attackiert ${member.user.username}`)
                                        .setDescription(`
                                        ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (hat ${strlvl1})
                                        
                                        🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (hat ${strlvl22})
                                        `)
                                        msg.edit(embed3)
                                        
                                    }, ms('2s'));    
                                }, ms('2s'));  
                            }, ms('2s'));  
                        }, ms('2s'));
                    }, ms('2s'));
                }, ms('2s'));
            }, ms('2s'));
        }, ms('2s'));
    }, ms('2s'));
  }, ms('2s'));
}
if(la === "us") {
    let xplvl = Math.floor(Math.random() * 40);
    if(!str[message.author.id]) {
        str[message.author.id] = {
            str: 0,
            lvl: "no strength"
        }
    }
    if(!str[member.user.id]) {
        str[member.user.id] = {
            str: 0,
            lvl: "no strength"
        }
    }
    if(str[message.author.id].str === 2) {
        str[message.author.id] = {
            str: 2,
            lvl: "strength I"
        }
    }
    if(str[member.user.id].str === 2) {
        str[member.user.id] = {
            str: 2,
            lvl: "strength I"
        }
    }
    if(str[message.author.id].str === 3) {
        str[message.author.id] = {
            str: 3,
            lvl: "strength II"
        }
    }
    if(str[member.user.id].str === 3) {
        str[member.user.id] = {
            str: 3,
            lvl: "strength II"
        }
    }
    if(str[message.author.id].str === 4) {
        str[message.author.id] = {
            str: 4,
            lvl: "strength III"
        }
    }
    if(str[member.user.id].str === 4) {
        str[member.user.id] = {
            str: 4,
            lvl: "strength III"
        }
    }
    let strlvl = str[message.author.id].lvl
    let stärke = str[message.author.id].str
    
    let strlvl2 = str[member.user.id].lvl
    let stärke2 = str[member.user.id].str
    if(!member) return message.channel.send("You have to specify someone you want to attack!")
        let hp1 = 50
        let hp2 = 50
        let attackhp = Math.floor(Math.random() * 13);
        let attackhp2 = Math.floor(Math.random() * 13 - 1);
        let attackhp3 = Math.floor(Math.random() * 13 - 1);
        let attackhp4 = Math.floor(Math.random() * 13 - 1);
        let attackhp5 = Math.floor(Math.random() * 13 - 1);
        let attackhp6 = Math.floor(Math.random() * 13 - 1);
        let attackhp7 = Math.floor(Math.random() * 13 - 1);
        let attackhp8 = Math.floor(Math.random() * 13 - 1);
        let attackhp9 = Math.floor(Math.random() * 13 - 1);
        let attackhp10 = Math.floor(Math.random() * 13 -1);
        let attackhp11 = Math.floor(Math.random() * 13 - 1);
        let attackhp12 = Math.floor(Math.random() * 13 - 1);
        let attackhp13 = Math.floor(Math.random() * 13 - 1);
        let attackhp14 = Math.floor(Math.random() * 13 - 1);
        let attackhp15 = Math.floor(Math.random() * 13 - 1);
        let attackhp16 = Math.floor(Math.random() * 13 - 1);
        let attackhp17 = Math.floor(Math.random() * 13 - 1);
        let attackhp18 = Math.floor(Math.random() * 13 - 1);
        let attackhp19 = Math.floor(Math.random() * 13 - 1);
        let attackhp20 = Math.floor(Math.random() * 13 - 1);
        message.channel.send("The first one with the HP in the minus, or 0 HP, has lost! (You have a small chance, to heal 1 HP!)")
        const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} attacked ${member.user.username}`)
        .setDescription(`
        ⚔️${message.author}⚔️  **${hp1}HP** (has ${strlvl})
        
        🛡️${member}🛡️  **${hp2}HP** (has ${strlvl2})
        `)
        
        let msg = await message.channel.send(embed)
        setTimeout(function(){
            let hp11 = 50 - attackhp - stärke2
            let hp22 = 50 - attackhp2 - stärke
            hp[message.author.id] = {
                hp: hp11,
                hp2: hp22
            }
            fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                if(err) console.log(err)
            })    
            const embed2 = new Discord.RichEmbed()
            .setAuthor(`${message.author.username} attacked ${member.user.username}`)
            .setDescription(`
            ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
            
            🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
            `)
            msg.edit(embed2)
            setTimeout(function(){
                let hp111 = hp[message.author.id].hp - attackhp3 - stärke2
                let hp222 = hp[message.author.id].hp2 - attackhp4 - stärke
                hp[message.author.id] = {
                    hp: hp111,
                    hp2: hp222
                }
                fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                    if(err) console.log(err)
                })    
                const embed3 = new Discord.RichEmbed()
                .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                .setDescription(`
                ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                
                🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                `)
                msg.edit(embed3)
                setTimeout(function(){
                    if(hp[message.author.id].hp < 1) {
                        coins[member.user.id] = {
                            coins: coins[member.user.id].coins + 40
                        }
                    xp[member.user.id] = {
                        xp: xp[member.user.id].xp + xplvl,
                        level: xp[member.user.id].level
                    }
                    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                        if(err) console.log(err)
                    })
                    return message.channel.send(`${member} has won, and got ${xplvl} XP and 40 Coins!`) }
                    if(hp[message.author.id].hp2 < 1) {
                        coins[message.author.id] = {
                            coins: coins[message.author.id].coins + 40
                        }
                        xp[message.author.id] = {
                            xp: xp[message.author.id].xp + xplvl,
                            level: xp[message.author.id].level
                        }
                        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                            if(err) console.log(err)
                        })
                        return message.channel.send(`${message.author} has won, and got ${xplvl} XP and 40 Coins!`) 
                      
                    } 
                    let hp1111 = hp[message.author.id].hp - attackhp5 - stärke2
                    let hp2222 = hp[message.author.id].hp2 - attackhp6 - stärke
                    hp[message.author.id] = {
                        hp: hp1111,
                        hp2: hp2222
                    }
                    fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                        if(err) console.log(err)
                    })    
                    const embed3 = new Discord.RichEmbed()
                    .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                    .setDescription(`
                    ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                    
                    🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                    `)
                    msg.edit(embed3)
                    setTimeout(function(){
                        if(hp[message.author.id].hp < 1) {
                            coins[member.user.id] = {
                                coins: coins[member.user.id].coins + 40
                            }
                        xp[member.user.id] = {
                            xp: xp[member.user.id].xp + xplvl,
                            level: xp[member.user.id].level
                        }
                        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                            if(err) console.log(err)
                        })
                        return message.channel.send(`${member} has won, and got ${xplvl} XP and 40 Coins!`) }
                        if(hp[message.author.id].hp2 < 1) {
                            coins[message.author.id] = {
                                coins: coins[message.author.id].coins + 40
                            }
                            xp[message.author.id] = {
                                xp: xp[message.author.id].xp + xplvl,
                                level: xp[message.author.id].level
                            }
                            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                if(err) console.log(err)
                            })
                            return message.channel.send(`${message.author} has won, and got ${xplvl} XP and 40 Coins!`) 
                          
                        } 
                        let hp11111 = hp[message.author.id].hp - attackhp7 - stärke2
                        let hp22222 = hp[message.author.id].hp2 - attackhp8 - stärke
                        hp[message.author.id] = {
                            hp: hp11111,
                            hp2: hp22222
                        }
                        fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                            if(err) console.log(err)
                        })    
                        const embed3 = new Discord.RichEmbed()
                        .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                        .setDescription(`
                        ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                        
                        🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                        `)
                        msg.edit(embed3)
                        setTimeout(function(){
                            
                            if(hp[message.author.id].hp < 1) {
                                coins[member.user.id] = {
                                    coins: coins[member.user.id].coins + 40
                                }
                            xp[member.user.id] = {
                                xp: xp[member.user.id].xp + xplvl,
                                level: xp[member.user.id].level
                            }
                            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                if(err) console.log(err)
                            })
                            return message.channel.send(`${member} has won, and got ${xplvl} XP and 40 Coins!`) }
                            if(hp[message.author.id].hp2 < 1) {
                                coins[message.author.id] = {
                                    coins: coins[message.author.id].coins + 40
                                }
                                xp[message.author.id] = {
                                    xp: xp[message.author.id].xp + xplvl,
                                    level: xp[message.author.id].level
                                }
                                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                    if(err) console.log(err)
                                })
                                return message.channel.send(`${message.author} has won, and got ${xplvl} XP and 40 Coins!`) 
                              
                            } 
                            let hp111111 = hp[message.author.id].hp - attackhp9 - stärke2
                            let hp222222 = hp[message.author.id].hp2 - attackhp10 - stärke
                            hp[message.author.id] = {
                                hp: hp111111,
                                hp2: hp222222
                            }
                            fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                if(err) console.log(err)
                            })    
                            const embed3 = new Discord.RichEmbed()
                            .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                            .setDescription(`
                            ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                            
                            🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                            `)
                            msg.edit(embed3)
                            setTimeout(function(){
                                
                                if(hp[message.author.id].hp < 1) {
                                    coins[member.user.id] = {
                                        coins: coins[member.user.id].coins + 40
                                    }
                                xp[member.user.id] = {
                                    xp: xp[member.user.id].xp + xplvl,
                                    level: xp[member.user.id].level
                                }
                                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                    if(err) console.log(err)
                                })
                                return message.channel.send(`${member} has won, and got ${xplvl} XP and 40 Coins!`) }
                                if(hp[message.author.id].hp2 < 1) {
                                    coins[message.author.id] = {
                                        coins: coins[message.author.id].coins + 40
                                    }
                                    xp[message.author.id] = {
                                        xp: xp[message.author.id].xp + xplvl,
                                        level: xp[message.author.id].level
                                    }
                                    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                        if(err) console.log(err)
                                    })
                                    return message.channel.send(`${message.author} has won, and got ${xplvl} XP and 40 Coins!`) 
                                  
                                } 
                                let hp1111111 = hp[message.author.id].hp - attackhp11 - stärke2
                                let hp2222222 = hp[message.author.id].hp2 - attackhp12 - stärke
                                hp[message.author.id] = {
                                    hp: hp1111111,
                                    hp2: hp2222222
                                }
                                fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                    if(err) console.log(err)
                                })    
                                const embed3 = new Discord.RichEmbed()
                                .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                                .setDescription(`
                                ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                                
                                🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                                `)
                                msg.edit(embed3)
                                setTimeout(function(){
                                    
                                    if(hp[message.author.id].hp < 1) {
                                        coins[member.user.id] = {
                                            coins: coins[member.user.id].coins + 40
                                        }
                                    xp[member.user.id] = {
                                        xp: xp[member.user.id].xp + xplvl,
                                        level: xp[member.user.id].level
                                    }
                                    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                        if(err) console.log(err)
                                    })
                                    return message.channel.send(`${member} has won, and got ${xplvl} XP and 40 Coins!`) }
                                    if(hp[message.author.id].hp2 < 1) {
                                        coins[message.author.id] = {
                                            coins: coins[message.author.id].coins + 40
                                        }
                                        xp[message.author.id] = {
                                            xp: xp[message.author.id].xp + xplvl,
                                            level: xp[message.author.id].level
                                        }
                                        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                            if(err) console.log(err)
                                        })
                                        return message.channel.send(`${message.author} has won, and got ${xplvl} XP and 40 Coins!`) 
                                      
                                    } 
                                    let hp11111111 = hp[message.author.id].hp - attackhp13 - stärke2
                                    let hp22222222 = hp[message.author.id].hp2 - attackhp14 - stärke
                                    hp[message.author.id] = {
                                        hp: hp11111111,
                                        hp2: hp22222222
                                    }
                                    fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                        if(err) console.log(err)
                                    })    
                                    const embed3 = new Discord.RichEmbed()
                                    .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                                    .setDescription(`
                                    ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                                    
                                    🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                                    `)
                                    msg.edit(embed3)
                                    setTimeout(function(){
                                        
                                        if(hp[message.author.id].hp < 1) {
                                            coins[member.user.id] = {
                                                coins: coins[member.user.id].coins + 40
                                            }
                                        xp[member.user.id] = {
                                            xp: xp[member.user.id].xp + xplvl,
                                            level: xp[member.user.id].level
                                        }
                                        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                            if(err) console.log(err)
                                        })
                                        return message.channel.send(`${member} has won, and got ${xplvl} XP and 40 Coins!`) }
                                        if(hp[message.author.id].hp2 < 1) {
                                            coins[message.author.id] = {
                                                coins: coins[message.author.id].coins + 40
                                            }
                                            xp[message.author.id] = {
                                                xp: xp[message.author.id].xp + xplvl,
                                                level: xp[message.author.id].level
                                            }
                                            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                                if(err) console.log(err)
                                            })
                                            return message.channel.send(`${message.author} has won, and got ${xplvl} XP and 40 Coins!`) 
                                          
                                        } 
                                        let hp111111111 = hp[message.author.id].hp - attackhp15 - stärke2
                                        let hp222222222 = hp[message.author.id].hp2 - attackhp16 - stärke
                                        hp[message.author.id] = {
                                            hp: hp111111111,
                                            hp2: hp222222222
                                        }
                                        fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                            if(err) console.log(err)
                                        })    
                                        const embed3 = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                                        .setDescription(`
                                        ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                                        
                                        🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                                        `)
                                        msg.edit(embed3)
                                        setTimeout(function(){
                                            
                                            if(hp[message.author.id].hp < 1) {
                                                coins[member.user.id] = {
                                                    coins: coins[member.user.id].coins + 40
                                                }
                                            xp[member.user.id] = {
                                                xp: xp[member.user.id].xp + xplvl,
                                                level: xp[member.user.id].level
                                            }
                                            fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                                if(err) console.log(err)
                                            })
                                            return message.channel.send(`${member} has won, and got ${xplvl} XP and 40 Coins!`) }
                                            if(hp[message.author.id].hp2 < 1) {
                                                coins[message.author.id] = {
                                                    coins: coins[message.author.id].coins + 40
                                                }
                                                xp[message.author.id] = {
                                                    xp: xp[message.author.id].xp + xplvl,
                                                    level: xp[message.author.id].level
                                                }
                                                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                                    if(err) console.log(err)
                                                })
                                                return message.channel.send(`${message.author} has won, and got ${xplvl} XP and 40 Coins!`) 
                                              
                                            } 
                                            let hp1111111111 = hp[message.author.id].hp - attackhp17 - stärke2
                                            let hp2222222222 = hp[message.author.id].hp2 - attackhp18 - stärke
                                            hp[message.author.id] = {
                                                hp: hp1111111111,
                                                hp2: hp2222222222
                                            }
                                            fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                                if(err) console.log(err)
                                            })    
                                            const embed3 = new Discord.RichEmbed()
            .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                                            .setDescription(`
                                            ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                                            
                                            🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                                            `)
                                            msg.edit(embed3)
                                            setTimeout(function(){
                                                
                                                if(hp[message.author.id].hp < 1) {
                                                    coins[member.user.id] = {
                                                        coins: coins[member.user.id].coins + 40
                                                    }
                                                xp[member.user.id] = {
                                                    xp: xp[member.user.id].xp + xplvl,
                                                    level: xp[member.user.id].level
                                                }
                                                fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                                    if(err) console.log(err)
                                                })
                                                return message.channel.send(`${member} has won, and got ${xplvl} XP and 40 Coins!`) }
                                                if(hp[message.author.id].hp2 < 1) {
                                                    coins[message.author.id] = {
                                                        coins: coins[message.author.id].coins + 40
                                                    }
                                                    xp[message.author.id] = {
                                                        xp: xp[message.author.id].xp + xplvl,
                                                        level: xp[message.author.id].level
                                                    }
                                                    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
                                                        if(err) console.log(err)
                                                    })
                                                    return message.channel.send(`${message.author} has won, and got ${xplvl} XP and 40 Coins!`) 
                                                  
                                                } 
                                                let hp11111111111 = hp[message.author.id].hp - attackhp19 - stärke2
                                                let hp22222222222 = hp[message.author.id].hp2 - attackhp20 - stärke
                                                hp[message.author.id] = {
                                                    hp: hp11111111111,
                                                    hp2: hp22222222222
                                                }
                                                fs.writeFile("./hp.json", JSON.stringify(hp), (err) => {
                                                    if(err) console.log(err)
                                                })    
                                                const embed3 = new Discord.RichEmbed()
                .setAuthor(`${message.author.username} attacked ${member.user.username}`)
                                                .setDescription(`
                                                ⚔️${message.author}⚔️  **${hp[message.author.id].hp}HP** (has ${strlvl})
                                                
                                                🛡️${member}🛡️  **${hp[message.author.id].hp2}HP** (has ${strlvl2})
                                                `)
                                                msg.edit(embed3)
                                                
                                            }, ms('2s')); 
                                        }, ms('2s'));   
                                    }, ms('2s'));  
                                }, ms('2s'));
                            }, ms('2s'));
                        }, ms('2s'));
                    }, ms('2s'));
                }, ms('2s'));
            }, ms('2s'));
          }, ms('2s'));
}
}
module.exports.help = {
    name: "attack"
}
const Discord = require("discord.js");
const fs = require("fs");
const str = require("../str.json")

module.exports.run = async(client, message, args, la) => {
let coins = require("../coins.json");
if(!coins[message.author.id]) {
    coins[message.author.id] = {
        coins: "0"
    }
}
let premium = JSON.parse(fs.readFileSync("./premium.json", "utf8"));

let cookie = JSON.parse(fs.readFileSync("./cookie.json", "utf8"));
if(!cookie[message.author.id]) {
    cookie[message.author.id] = {
        cookies: "0"
    }
}
let cookiess = cookie[message.author.id].cookies
let diamond = JSON.parse(fs.readFileSync("./diamonds.json", "utf8"));
if(!diamond[message.author.id]) {
    diamond[message.author.id] = {
        diamonds: "0"
    }
}
let coinsp = JSON.parse(fs.readFileSync("./coinsp.json", "utf8"));
if(!coinsp[message.author.id]) {
    coinsp[message.author.id] = {
        coins: 0
    }
}
let leg = JSON.parse(fs.readFileSync("./leg.json", "utf8"))
if(!leg[message.author.id]) {
    leg[message.author.id] = {
        eggs: 0
    }
}
let rare = JSON.parse(fs.readFileSync("./rare.json", "utf8"))
if(!rare[message.author.id]) {
    rare[message.author.id] = {
        eggs: 0
    }
}
let un = JSON.parse(fs.readFileSync("./un.json", "utf8"))
if(!un[message.author.id]) {
    un[message.author.id] = {
        eggs: 0
    }
}
let co = JSON.parse(fs.readFileSync("./co.json", "utf8"))
if(!co[message.author.id]) {
    co[message.author.id] = {
        eggs: 0
    }
}
let ul = JSON.parse(fs.readFileSync("./ul.json", "utf8"))
if(!ul[message.author.id]) {
    ul[message.author.id] = {
        eggs: 0
    }
}
if(!str[message.author.id]) {
    str[message.author.id] = {
        str: 0,
        lvl: "keine Stärke"
    }
}
if(la === "de") {
    if(args.slice(0).join(" ") === "Stärke I") {
        if(str[message.author.id].str > 2) return message.channel.send("Du hast schon Stärke II!")
        if(str[message.author.id].str > 3) return message.channel.send("Du hast schon Stärke III!")
        
        if(str[message.author.id].str === 2) return message.channel.send("Du hast schon Stärke I!")
        if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
            if(coins[message.author.id].coins < "10000") return message.channel.send("Du hast nicht so viele Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("10000")
        }
        str[message.author.id] = {

            str: 2,
            lvl: "Stärke I"
        }
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./str.json", JSON.stringify(str), (err) => {
            if(err) console.log(err)
        })
        message.channel.send("Du hast nun Stärke I, und machst +2 Schaden beim Attack Command!")
      return;
            }
            if(args.slice(0).join(" ") === "Stärke II") {
                if(str[message.author.id].str > 3) return message.channel.send("Du hast schon Stärke III!")
                if(str[message.author.id].str === 3) return message.channel.send("Du hast schon Stärke II!")
                if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
                    if(coins[message.author.id].coins < "12000") return message.channel.send("Du hast nicht so viele Coins!")
                        let sCoins = coins[message.author.id].coins;
                coins[message.author.id] = {
                    coins: sCoins - parseInt("12000")
                }
                str[message.author.id] = {
        
                    str: 3,
                    lvl: "Stärke II"
                }
                fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                    if(err) console.log(err)
                })  
                fs.writeFile("./str.json", JSON.stringify(str), (err) => {
                    if(err) console.log(err)
                })
                message.channel.send("Du hast nun Stärke II, und machst +3 Schaden beim Attack Command!")
              return;
                    }
                    if(args.slice(0).join(" ") === "Stärke III") {
                        if(!premium[message.author.id]) {
                            message.channel.send("Du benötigst Premium, um diesen Command nutzen zu können! Kauf dir Premium im SHOP: **!shop**.")
                            return;
                        }
                        if(str[message.author.id].str === 4) return message.channel.send("Du hast schon Stärke III!")
                        if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
                            if(coins[message.author.id].coins < "5000") return message.channel.send("Du hast nicht so viele Coins!")
                                let sCoins = coins[message.author.id].coins;
                        coins[message.author.id] = {
                            coins: sCoins - parseInt("5000")
                        }
                        str[message.author.id] = {
                
                            str: 4,
                            lvl: "Stärke III"
                        }
                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                            if(err) console.log(err)
                        })  
                        fs.writeFile("./str.json", JSON.stringify(str), (err) => {
                            if(err) console.log(err)
                        })
                        message.channel.send("Du hast nun Stärke III, und machst +4 Schaden beim Attack Command!")
                      return;
                            }
    if(args.slice(0).join(" ") === "Ultimatives Upgrade") {
        if(!premium[message.author.id]) {
            message.channel.send("Du benötigst Premium, um diesen Command nutzen zu können! Kauf dir Premium im SHOP: **!shop**.")
            return;
        }
        if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
            if(coins[message.author.id].coins < "50000") return message.channel.send("Du hast nicht so viele Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("50000")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("150")
        }
        let ull = ul[message.author.id].eggs
        ul[message.author.id] = {
            eggs: ull + 1
        }
        fs.writeFile("./ul.json", JSON.stringify(ul), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("Du hast ein Ultimatives Upgrade gekauft und bekommst nun +150 Coins pro Nachricht")
      
    }
    if(args.slice(0).join(" ") === "Häufiges Upgrade") {
        if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
            if(coins[message.author.id].coins < "2500") return message.channel.send("Du hast nicht so viele Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("2500")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("5")
        }
        let coo = co[message.author.id].eggs
        co[message.author.id] = {
            eggs: coo + 1
        }
        fs.writeFile("./co.json", JSON.stringify(co), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("Du hast ein Häufiges Upgrade gekauft und bekommst nun +5 Coins pro Nachricht")
      
    }
    if(args.slice(0).join(" ") === "Normales Upgrade") {
        
        if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
            if(coins[message.author.id].coins < "5000") return message.channel.send("Du hast nicht so viele Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("5000")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("10")
        }
        let unn = un[message.author.id].eggs
        un[message.author.id] = {
            eggs: unn + 1
        }
        fs.writeFile("./un.json", JSON.stringify(un), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("Du hast ein Normales Upgrade gekauft und bekommst nun +10 Coins pro Nachricht")
      
    }
    if(args.slice(0).join(" ") === "Seltenes Upgrade") {
        if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
            if(coins[message.author.id].coins < "15000") return message.channel.send("Du hast nicht so viele Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("15000")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("30")
        }
        let rares = rare[message.author.id].eggs
        rare[message.author.id] = {
            eggs: rares + 1
        }
        fs.writeFile("./rare.json", JSON.stringify(rare), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("Du hast ein Seltenes Upgrade gekauft und bekommst nun +30 Coins pro Nachricht")
    
        
    }
    if(args.slice(0).join(" ") === "Legendäres Upgrade") {
        if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
            if(coins[message.author.id].coins < "20000") return message.channel.send("Du hast nicht so viele Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("20000")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("50")
        }
        let legg = leg[message.author.id].eggs
        leg[message.author.id] = {
            eggs: legg + 1
        }
        fs.writeFile("./leg.json", JSON.stringify(leg), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("Du hast ein Legendäres Upgrade gekauft und bekommst nun +50 Coins pro Nachricht")
    
        
    }
    /*if(args[0] === "Premium") {
        if(premium[message.author.id].premium === "true") return message.channel.send("Du hast schon Premium!")
        if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
        if(coins[message.author.id].coins < "100000") return message.channel.send("Du hast nicht so viele Coins!")
            let sCoins = coins[message.author.id].coins;
            coins[message.author.id] = {
                coins: sCoins - parseInt("100000")
              };  
              premium[message.author.id] = {
                premium: "true"
            }
            let coinspp = coinsp[message.author.id].coins
            coinsp[message.author.id] = {
                coins: coinspp + parseInt("200")
            }
            fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
                if(err) console.log(err)
            })
            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if(err) console.log(err)
              });
            fs.writeFile("./premium.json", JSON.stringify(premium), (err) => {
                if(err) console.log(err)
            })  
            message.channel.send("Du hast Premium gekauft!")
    }*/
   /* if(args[0] === "Cookie") {
   if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
   if(coins[message.author.id].coins < "100") return message.channel.send("Du hast nicht so viele Coins!")
    let sCoins = coins[message.author.id].coins;
   coins[message.author.id] = {
       coins: sCoins - parseInt("100")
   };
   cookie[message.author.id] = {
       cookies: 1 + parseInt(cookiess)
    }
    fs.writeFile("./cookie.json", JSON.stringify(cookie), (err) => {
        if(err) console.log(err)
    })
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
    })
    message.channel.send("Du hast 1 Cookie gekauft!")
    }*/
/*if(args[0] === "Diamond") {
if(!coins[message.author.id]) return message.channel.send("Du hast keine Coins!")
if(coins[message.author.id].coins < "750") return message.channel.send("Du hast nicht so viele Coins!")
    let sCoins = coins[message.author.id].coins
coins[message.author.id] = {
    coins: sCoins - parseInt("750")
};
diamond[message.author.id] = {
    diamonds: 1 + parseInt(diamond[message.author.id].diamonds)
}
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
})
fs.writeFile("./diamonds.json", JSON.stringify(diamond), (err) => {
    if(err) console.log(err)
})
message.channel.send("Du hast 1 Diamant gekauft!")
}*/
if(args[0] === "2") {
    let sCoins = coins[message.author.id].coins
    const embed2341 = new Discord.RichEmbed()
    .setTitle(`__Liste aller Items zu kaufen__`)
    .setDescription(`
 **Stärke I** (__10000 Coins__) - Du machst +2 Schaden beim Attack Command!
 **Stärke II** (__12000 Coins__) - Du machst +3 Schaden beim Attack Command!
 **Stärke III** (__5000__) - Du machst +4 Schaden beim Attack Command! (Premium Only)
    
    Um auf die 1. Seite zu gelangen, gib !shop ein!
    `)
    .setFooter(`Coins: ${sCoins}`)
    message.channel.send(embed2341)
    return;
}
let sCoins = coins[message.author.id].coins
const embed2341 = new Discord.RichEmbed()
.setTitle(`__Liste aller Items zu kaufen__`)
.setDescription(`
~~**Premium** (__100000 Coins__) - Schaltet neue Commands für den Bot frei.~~ Kommt später in diesem Jahr wieder!
**Ultimatives Upgrade** (__50000 Coins__) - Du bekommst +150 Coins pro Nachricht. (Premium Only)
**Legendäres Upgrade** (__20000 Coins__) - Du bekommst +50 Coins pro Nachricht.
**Seltenes Upgrade** (__15000 Coins__) - Du bekommst +30 Coins pro Nachricht.
**Normales Upgrade** (__5000 Coins__) - Du bekommst +10 Coins pro Nachricht.
**Häufiges Upgrade** (__2500 Coins__) - Du bekommst +5 Coins pro Nachricht.

Um auf die 2. Seite zu gelangen, gib !shop 2 ein!
`)
.setFooter(`Coins: ${sCoins}`)
if(!args[0]) return message.channel.send(embed2341)
}
if(la === "us") {
    if(args.slice(0).join(" ") === "Ultimate Upgrade") {
        if(!premium[message.author.id]) {
            message.channel.send("You need Premium to use this command. Buy Premium in the SHOP: **!shop**.")
            return;
        }
        if(!coins[message.author.id]) return message.channel.send("You do not have Coins!")
            if(coins[message.author.id].coins < "50000") return message.channel.send("You do not have enough Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("50000")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("150")
        }
        let ull = ul[message.author.id].eggs
        ul[message.author.id] = {
            eggs: ull + 1
        }
        fs.writeFile("./ul.json", JSON.stringify(ul), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("You bought the Ultimate Upgrade and you will get +150 Coins per message now.")
      
    }
    if(args.slice(0).join(" ") === "Common Upgrade") {
        if(!coins[message.author.id]) return message.channel.send("You do not have Coins!")
            if(coins[message.author.id].coins < "2500") return message.channel.send("You do not have enough Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("2500")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("5")
        }
        let coo = co[message.author.id].eggs
        co[message.author.id] = {
            eggs: coo + 1
        }
        fs.writeFile("./co.json", JSON.stringify(co), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("You bought the Common Upgrade and you will get +5 Coins per message now.")
      
    }
    if(args.slice(0).join(" ") === "Normal Upgrade") {
        if(!coins[message.author.id]) return message.channel.send("You do not have Coins!")
            if(coins[message.author.id].coins < "5000") return message.channel.send("You do not have enough Coins!")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("5000")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("10")
        }
        let unn = un[message.author.id].eggs
        un[message.author.id] = {
            eggs: unn + 1
        }
        fs.writeFile("./un.json", JSON.stringify(un), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("You bought the Normal Upgrade and you will get +10 Coins per message now.")
      
    }
        if(args.slice(0).join(" ") === "Rare Upgrade") {
            if(!coins[message.author.id]) return message.channel.send("You do not have any Coins!")
                if(coins[message.author.id].coins < "15000") return message.channel.send("You do not have enough Coins!")
                    let sCoins = coins[message.author.id].coins;
            coins[message.author.id] = {
                coins: sCoins - parseInt("15000")
            }
            let coinspp = coinsp[message.author.id].coins
            coinsp[message.author.id] = {
                coins: coinspp + parseInt("30")
            }
            let rares = rare[message.author.id].eggs
            rare[message.author.id] = {
                eggs: rares + 1
            }
            fs.writeFile("./rare.json", JSON.stringify(rare), (err) => {
                if(err) console.log(err)
            })  
            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if(err) console.log(err)
            })
            fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
                if(err) console.log(err)
            })    
            message.channel.send("You bought the Rare Upgrade and you will get +30 Coins per message now.")
        
            
        }
        if(args.slice(0).join(" ") === "Strength I") {
            if(str[message.author.id].str > 2) return message.channel.send("You already have Strength II!")
            if(str[message.author.id].str > 3) return message.channel.send("You already have Strength III!")
            
            if(str[message.author.id].str === 2) return message.channel.send("You already have Strength I!")
            if(!coins[message.author.id]) return message.channel.send("You do not have Coins!")
                if(coins[message.author.id].coins < "10000") return message.channel.send("You do not have enough Coins!")
                    let sCoins = coins[message.author.id].coins;
            coins[message.author.id] = {
                coins: sCoins - parseInt("10000")
            }
            str[message.author.id] = {
    
                str: 2,
                lvl: "Stärke I"
            }
            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if(err) console.log(err)
            })  
            fs.writeFile("./str.json", JSON.stringify(str), (err) => {
                if(err) console.log(err)
            })
            message.channel.send("You now have Strength I, and do +2 damage to Attack Command!")
          return;
                }
                if(args.slice(0).join(" ") === "Strength II") {
                    if(str[message.author.id].str > 3) return message.channel.send("You already have Strength III!")
                    if(str[message.author.id].str === 3) return message.channel.send("You already have Strength II!")
                    if(!coins[message.author.id]) return message.channel.send("You do not have Coins!")
                        if(coins[message.author.id].coins < "12000") return message.channel.send("You do not have enough Coins!")
                            let sCoins = coins[message.author.id].coins;
                    coins[message.author.id] = {
                        coins: sCoins - parseInt("12000")
                    }
                    str[message.author.id] = {
            
                        str: 3,
                        lvl: "Stärke II"
                    }
                    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                        if(err) console.log(err)
                    })  
                    fs.writeFile("./str.json", JSON.stringify(str), (err) => {
                        if(err) console.log(err)
                    })
                    message.channel.send("You now have Strength II, and do +3 damage to Attack Command!!")
                  return;
                        }
                        if(args.slice(0).join(" ") === "Strength III") {
                            if(!premium[message.author.id]) {
                                message.channel.send("You need Premium to use this command. Buy Premium in the SHOP: **!shop**.")
                                return;
                            }
                            if(str[message.author.id].str === 4) return message.channel.send("You already have Strength III!")
                            if(!coins[message.author.id]) return message.channel.send("You do not have Coins!")
                                if(coins[message.author.id].coins < "5000") return message.channel.send("You do not have enough Coins!")
                                    let sCoins = coins[message.author.id].coins;
                            coins[message.author.id] = {
                                coins: sCoins - parseInt("5000")
                            }
                            str[message.author.id] = {
                    
                                str: 4,
                                lvl: "Stärke III"
                            }
                            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                if(err) console.log(err)
                            })  
                            fs.writeFile("./str.json", JSON.stringify(str), (err) => {
                                if(err) console.log(err)
                            })
                            message.channel.send("You now have Strength III, and do +4 damage to Attack Command!")
                          return;
                                }
    if(args.slice(0).join(" ") === "Legendary Upgrade") {
        if(!coins[message.author.id]) return message.channel.send("You do not have Coins!")
            if(coins[message.author.id].coins < "20000") return message.channel.send("You do not have enough Coins")
                let sCoins = coins[message.author.id].coins;
        coins[message.author.id] = {
            coins: sCoins - parseInt("20000")
        }
        let coinspp = coinsp[message.author.id].coins
        coinsp[message.author.id] = {
            coins: coinspp + parseInt("50")
        }
        let legg = leg[message.author.id].eggs
        leg[message.author.id] = {
            eggs: legg + 1
        }
        fs.writeFile("./leg.json", JSON.stringify(leg), (err) => {
            if(err) console.log(err)
        })  
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
        })
        fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
            if(err) console.log(err)
        })    
        message.channel.send("You bought the Legendary Upgrade and you will get +50 Coins per message now.")
    
        
    }
/*    if(args[0] === "Premium") {
        if(premium[message.author.id].premium === "true") return message.channel.send("You already have Premium!")
        if(!coins[message.author.id]) return message.channel.send("You do not have any Coins!")
        if(coins[message.author.id].coins < "100000") return message.channel.send("You do not have enough Coins!")
            let sCoins = coins[message.author.id].coins;
            coins[message.author.id] = {
                coins: sCoins - parseInt("100000")
              };  
              premium[message.author.id] = {
                premium: "true"
            }
            let coinspp = coinsp[message.author.id].coins
            coinsp[message.author.id] = {
                coins: coinspp + parseInt("200")
            }
            fs.writeFile("./coinsp.json", JSON.stringify(coinsp), (err) => {
                if(err) console.log(err)
            })
            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if(err) console.log(err)
              });
            fs.writeFile("./premium.json", JSON.stringify(premium), (err) => {
                if(err) console.log(err)
            })  
            message.channel.send("You bought Premium!")
    }*/
    
    /*if(args[0] === "Cookie") {
   if(!coins[message.author.id]) return message.channel.send("You do not have any Coins!")
   if(coins[message.author.id].coins < "100") return message.channel.send("You do not have enough Coins!")
    let sCoins = coins[message.author.id].coins;
   coins[message.author.id] = {
       coins: sCoins - parseInt("100")
   };
   cookie[message.author.id] = {
       cookies: 1 + parseInt(cookiess)
    }
    fs.writeFile("./cookie.json", JSON.stringify(cookie), (err) => {
        if(err) console.log(err)
    })
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
    })
    message.channel.send("You bought 1 Cookie!")
}
*/
if(args[0] === "2") {
    let sCoins = coins[message.author.id].coins
    const embed2341 = new Discord.RichEmbed()
    .setTitle(`__Liste aller Items zu kaufen__`)
    .setDescription(`
 **Strength I** (__10000 Coins__) - You do +2 damage to Attack Command!
 **Strength II** (__12000 Coins__) - You do +3 damage to Attack Command!
 **Strength III** (__5000__) - You do +4 damage to Attack Command! (Premium Only)
    
    Um auf die 1. Seite zu gelangen, gib !shop ein!
    `)
    .setFooter(`Coins: ${sCoins}`)
    message.channel.send(embed2341)
    return;
}
let sCoins = coins[message.author.id].coins;
const embed2341 = new Discord.RichEmbed()
.setTitle(`__List of all items__`)
.setDescription(`
~~**Premium** (__100000 Coins__) - Unlocks new Commands for the Bot.~~ Comes back later this year!
**Ultimate Upgrade** (__50000 Coins__) - +150 Coins per message (Premium Only)
**Legendary Upgrade** (__20000 Coins__) - +50 Coins per message
**Rare Upgrade** (__15000 Coins__) - +30 Coins per message
**Normal Upgrade** (__5000 Coins__) - +10 Coins per message
**Common Upgrade** (__2500 Coins__) - +5 Coins per message

Enter **!shop 2** to get to page 2!
`)
.setFooter(`Coins: ${sCoins}`)
if(!args[0]) {
return message.channel.send(embed2341)
}
}
}

module.exports.help = {
    name: "shop"
}

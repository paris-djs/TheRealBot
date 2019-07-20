const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");


module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
if(!coins[message.author.id]) {
        return message.channel.send("Du hast keine Coins!")
        }
let amount = args[0];
if(!amount) return message.channel.send("Du musst Coins angeben!")
let mal2 = amount * 2
let mal3 = amount * 3
let mal4 = amount * 4
let mal5 = amount * 5
let lose = amount * 1.2
let ccoins = coins[message.author.id].coins
if(ccoins < amount) return message.channel.send("Du hast nicht so viele Coins!")
if(500 < amount) return message.channel.send("Du darfst nicht mehr als 500 Coins angeben!")
    let resault = ["🍊 🍊 🍊", "🍎 🍎 🍎", "🍌 🍌 🍌", "🍉 🍉 🍉", "🍉 🍉 🍉", "🍉 🍉 🍉", "🍇 🍇 🍇", "🍐 🍐 🍐", "🍐 🍇 🍉", "🍌 🍉 🍎", "🍌 🍉 🍎", "🍊 🍎 🍌", "🍇 🍇 🍉", "🍇 🍇 🍉", "🍐 🍐 🍊", "🍐 🍐 🍊", "🍊 🍊 🍐", "🍊 🍊 🍐", "🍊 🍎 🍌"]
let result = Math.floor((Math.random() * resault.length))
let result2 = Math.floor((Math.random() * resault.length))
let result3 = Math.floor((Math.random() * resault.length))
if(resault[result] === "🍐 🍇 🍉") {
    coins[message.author.id] = {
        coins: coins[message.author.id].coins - lose
    }
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
      });
      let embed = new Discord.RichEmbed()
      .setAuthor(`Du hast ${lose} Coins verloren!`)
      .setDescription(`⬛️${resault[result2]}⬛️`)
      .addField(`➡️🍐 🍇 🍉⬅️`, `⬛️${resault[result3]}⬛️`)
      message.channel.send(embed)
      return;
} 
    
       
        if(resault[result] === "🍊 🍎 🍌") {
            coins[message.author.id] = {
                coins: coins[message.author.id].coins - lose
            }
            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if(err) console.log(err)
              });
              let embed = new Discord.RichEmbed()
              .setAuthor(`Du hast ${lose} Coins verloren!`)
              .setDescription(`⬛️${resault[result2]}⬛️`)
              .addField(`➡️🍊 🍎 🍌⬅️`, `⬛️${resault[result3]}⬛️`)
              message.channel.send(embed)
              return;
        }   
            if(resault[result] === "🍇 🍇 🍉") {
                coins[message.author.id] = {
                    coins: coins[message.author.id].coins - lose
                }
                fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                    if(err) console.log(err)
                  });
                  let embed = new Discord.RichEmbed()
                  .setAuthor(`Du hast ${lose} Coins verloren!`)
                  .setDescription(`⬛️${resault[result2]}⬛️`)
                  .addField(`➡️🍇 🍇 🍉⬅️`, `⬛️${resault[result3]}⬛️`)
                  message.channel.send(embed)
                  return;
            } 
                if(resault[result] === "🍐 🍐 🍊") {
                    coins[message.author.id] = {
                        coins: coins[message.author.id].coins - lose
                    }
                    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                        if(err) console.log(err)
                      });
                      let embed = new Discord.RichEmbed()
                      .setAuthor(`Du hast ${lose} Coins verloren!`)
                      .setDescription(`⬛️${resault[result2]}⬛️`)
                      .addField(`➡️🍐 🍐 🍊⬅️`, `⬛️${resault[result3]}⬛️`)
                      message.channel.send(embed)
                      return;
                } 
                    
                   
                    
                    if(resault[result] === "🍎 🍎 🍎") {
                        coins[message.author.id] = {
                            coins: amount * 3 + ccoins
                        }
                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                            if(err) console.log(err)
                          });
                          let embed = new Discord.RichEmbed()
                          .setAuthor(`Du hast ${mal3} Coins gewonnen!`)
                          .setDescription(`⬛️${resault[result2]}⬛️`)
                          .addField(`➡️🍎 🍎 🍎⬅️`, `⬛️${resault[result3]}⬛️`)
                          
                          message.channel.send(embed)
                          return;
                        
                    }
                    if(resault[result] === "🍌 🍌 🍌") {
                        coins[message.author.id] = {
                            coins: amount * 2 + ccoins
                        }
                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                            if(err) console.log(err)
                          });
                          let embed = new Discord.RichEmbed()
                          .setAuthor(`Du hast ${mal2} Coins gewonnen!`)
                          .setDescription(`⬛️${resault[result2]}⬛️`)
                          .addField(`➡️🍌 🍌 🍌⬅️`, `⬛️${resault[result3]}⬛️`)
                          message.channel.send(embed)
                          return;
                    }
                    if(resault[result] === "🍐 🍐 🍐") {
                        coins[message.author.id] = {
                            coins: amount * 4 + ccoins
                        }
                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                            if(err) console.log(err)
                          });
                          let embed = new Discord.RichEmbed()
                          .setAuthor(`Du hast ${mal4} Coins gewonnen!`)
                          .setDescription(`⬛️${resault[result2]}⬛️`)
                          .addField(`➡️🍐 🍐 🍐⬅️`, `⬛️${resault[result3]}⬛️`)
                          message.channel.send(embed)
                          return;
                    }
                    if(resault[result] === "🍇 🍇 🍇") {
                        coins[message.author.id] = {
                            coins: amount * 5 + ccoins
                        }
                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                            if(err) console.log(err)
                          });
                          let embed = new Discord.RichEmbed()
                          .setAuthor(`Du hast ${mal5} Coins gewonnen!`)
                          .setDescription(`⬛️${resault[result2]}⬛️`)
                          .addField(`➡️🍇 🍇 🍇⬅️`, `⬛️${resault[result3]}⬛️`)
                          message.channel.send(embed)
                          return;

                    }
                



                }
                if(la === "us") {
                    if(!coins[message.author.id]) {
                        return message.channel.send("You don't have any Coins!")
                        }
                let amount = args[0];
                if(!amount) return message.channel.send("You have to specifiy Coins!")
                let mal2 = amount * 2
                let mal3 = amount * 3
                let mal4 = amount * 4
                let mal5 = amount * 5
                let lose = amount * 1.2
                let ccoins = coins[message.author.id].coins
                if(ccoins < amount) return message.channel.send("You do not have enough Coins!")
                if(500 < amount) return message.channel.send("You can not specify more than 500 coins!")
                    let resault = ["🍊 🍊 🍊", "🍎 🍎 🍎", "🍌 🍌 🍌", "🍉 🍉 🍉", "🍉 🍉 🍉", "🍉 🍉 🍉", "🍇 🍇 🍇", "🍐 🍐 🍐", "🍐 🍇 🍉", "🍌 🍉 🍎", "🍌 🍉 🍎", "🍊 🍎 🍌", "🍇 🍇 🍉", "🍇 🍇 🍉", "🍐 🍐 🍊", "🍐 🍐 🍊", "🍊 🍊 🍐", "🍊 🍊 🍐", "🍊 🍊 🍐","🍊 🍊 🍐", "🍊 🍎 🍌"]
                let result = Math.floor((Math.random() * resault.length))
                let result2 = Math.floor((Math.random() * resault.length))
                let result3 = Math.floor((Math.random() * resault.length))
                if(resault[result] === "🍐 🍇 🍉") {
                    coins[message.author.id] = {
                        coins: coins[message.author.id].coins - lose
                    }
                    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                        if(err) console.log(err)
                      });
                      let embed = new Discord.RichEmbed()
                      .setAuthor(`You lose ${lose} Coins!`)
                      .setDescription(`⬛️${resault[result2]}⬛️`)
                      .addField(`➡️🍐 🍇 🍉⬅️`, `⬛️${resault[result3]}⬛️`)
                      message.channel.send(embed)
                      return;
                } 
                    
                        
                        if(resault[result] === "🍊 🍎 🍌") {
                            coins[message.author.id] = {
                                coins: coins[message.author.id].coins - lose
                            }
                            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                if(err) console.log(err)
                              });
                              let embed = new Discord.RichEmbed()
                              .setAuthor(`You lose ${lose} Coins!`)
                              .setDescription(`⬛️${resault[result2]}⬛️`)
                              .addField(`➡️🍊 🍎 🍌⬅️`, `⬛️${resault[result3]}⬛️`)
                              message.channel.send(embed)
                              return;
                        }   
                            if(resault[result] === "🍇 🍇 🍉") {
                                coins[message.author.id] = {
                                    coins: coins[message.author.id].coins - lose
                                }
                                fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                    if(err) console.log(err)
                                  });
                                  let embed = new Discord.RichEmbed()
                                  .setAuthor(`You lose ${lose} Coins!`)
                                  .setDescription(`⬛️${resault[result2]}⬛️`)
                                  .addField(`➡️🍇 🍇 🍉⬅️`, `⬛️${resault[result3]}⬛️`)
                                  message.channel.send(embed)
                                  return;
                            } 
                                if(resault[result] === "🍐 🍐 🍊") {
                                    coins[message.author.id] = {
                                        coins: coins[message.author.id].coins - lose
                                    }
                                    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                        if(err) console.log(err)
                                      });
                                      let embed = new Discord.RichEmbed()
                                      .setAuthor(`You lose ${lose} Coins!`)
                                      .setDescription(`⬛️${resault[result2]}⬛️`)
                                      .addField(`➡️🍐 🍐 🍊⬅️`, `⬛️${resault[result3]}⬛️`)
                                      message.channel.send(embed)
                                      return;
                                } 
                                    
                                   
                                    
                                    if(resault[result] === "🍎 🍎 🍎") {
                                        coins[message.author.id] = {
                                            coins: amount * 3 + ccoins
                                        }
                                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                            if(err) console.log(err)
                                          });
                                          let embed = new Discord.RichEmbed()
                                          .setAuthor(`You won ${mal3} Coins!`)
                                          .setDescription(`⬛️${resault[result2]}⬛️`)
                                          .addField(`➡️🍎 🍎 🍎⬅️`, `⬛️${resault[result3]}⬛️`)
                                          
                                          message.channel.send(embed)
                                          return;
                                        
                                    }
                                    if(resault[result] === "🍌 🍌 🍌") {
                                        coins[message.author.id] = {
                                            coins: amount * 2 + ccoins
                                        }
                                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                            if(err) console.log(err)
                                          });
                                          let embed = new Discord.RichEmbed()
                                          .setAuthor(`You won ${mal2} Coins!`)
                                          .setDescription(`⬛️${resault[result2]}⬛️`)
                                          .addField(`➡️🍌 🍌 🍌⬅️`, `⬛️${resault[result3]}⬛️`)
                                          message.channel.send(embed)
                                          return;
                                    }
                                    if(resault[result] === "🍐 🍐 🍐") {
                                        coins[message.author.id] = {
                                            coins: amount * 4 + ccoins
                                        }
                                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                            if(err) console.log(err)
                                          });
                                          let embed = new Discord.RichEmbed()
                                          .setAuthor(`You won ${mal4} Coins!`)
                                          .setDescription(`⬛️${resault[result2]}⬛️`)
                                          .addField(`➡️🍐 🍐 🍐⬅️`, `⬛️${resault[result3]}⬛️`)
                                          message.channel.send(embed)
                                          return;
                                    }
                                    if(resault[result] === "🍇 🍇 🍇") {
                                        coins[message.author.id] = {
                                            coins: amount * 5 + ccoins
                                        }
                                        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                                            if(err) console.log(err)
                                          });
                                          let embed = new Discord.RichEmbed()
                                          .setAuthor(`You won ${mal5} Coins!`)
                                          .setDescription(`⬛️${resault[result2]}⬛️`)
                                          .addField(`➡️🍇 🍇 🍇⬅️`, `⬛️${resault[result3]}⬛️`)
                                          message.channel.send(embed)
                                          return;
                                    }  
                }
}

module.exports.help = {
    name: "slots"
}
// Load up the discord.js library

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs      = require('fs')
const moment = require('./node_modules/moment');
const ms = require("ms");
const antispam = require("discord-anti-spam");
const enmap = require("enmap")
let xp = require("./xp.json");
let purple = config.purple;
let cooldown = new Set();
let cdseconds = 5;
const Filter = require("bad-words")
client.commands = new Discord.Collection();
const cleverbot = require("cleverbot.io"),
bot = new cleverbot('sZQughyezU2Le61U','Be1wejtsLzpf2O0cdVK7qT9mlyu8Zgs6');
bot.setNick('zLI5pgCY');
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwMjkyMzI0NTUxOTg5NjU3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQzNzY3NjA0fQ.68SHa6aQy2w85AHZoRUt5_v1BRGrlAb0i8Ol7cvqdPQ', { webhookPort: 5000, webhookAuth: 'Kürbistumor' });
const authors = [];
var warned = [];
var banned = [];
var messagelog = [];
let coins = require("./coins.json");


fs.readdir("./commands/", (err, files) => {
  
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Ich konnte keine Commands finden..");
      return;
    }
    console.log(`${jsfile.length} Commands wurden geladen!`)
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      client.commands.set(props.help.name, props);
    });
  });



  fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    console.log(`${files.length} Events wurden geladen!`)
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);

      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
  });
  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));

client.afk = new Map();

client.on("message", message => {
   
if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: `!`
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0
      };
    }
  
    let coinAmt = Math.floor(Math.random() * 3);
   let coinsp = JSON.parse(fs.readFileSync("./coinsp.json", "utf8"))
   if(!coinsp[message.author.id]) {
     coinsp[message.author.id] = {
       coins: 0
     }
   }
   let coinspp = coinsp[message.author.id].coins;
      coins[message.author.id] = {
        coins: coins[message.author.id].coins + coinAmt + coinspp
      }
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
      if (err) console.log(err)
    });
    let xpAdd = Math.floor(Math.random() * 7) + 8;
  
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 0
      };
    }
    let xplevel = require("./levelxp.json");
    if(!xplevel[message.author.id]) {
      xplevel[message.author.id] = {
        xplvl: 0
      }
    }
    let xlvl = xplevel[message.author.id].xplvl
  
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * xlvl;
    xp[message.author.id].xp =  curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){

      
      xplevel[message.author.id] = {
        xplvl: xlvl + 25
      }
      fs.writeFile("./levelxp.json", JSON.stringify(xplevel), (err) => {
        if(err) console.log(err)
    });
      xp[message.author.id].level = curlvl + 1;
      if(message.guild.id === "264445053596991498") return;
      let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setColor(purple)
      .addField("Level:", curlvl + 1);
      message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
  });
  
  if(xp[message.author.id].level === 2) {
    let messagess = require("./message.json");
    if(!messagess[message.author.id]) {
      messagess[message.author.id] = {
        message: "Newcomer"
      }
    }
   messagess[message.author.id] = {
     message: "Beginner"
   }
   fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
    if(err) console.log(err)
});
  }
  if(xp[message.author.id].level === 5) {
    let messagess = require("./message.json");
    if(!messagess[message.author.id]) {
      messagess[message.author.id] = {
        message: "Newcomer"
      }
    }
   messagess[message.author.id] = {
     message: "Better Beginner"
   }
   fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
    if(err) console.log(err)
});
  }
  if(xp[message.author.id].level === 7) {
    let messagess = require("./message.json");
    if(!messagess[message.author.id]) {
      messagess[message.author.id] = {
        message: "Newcomer"
      }
    }
   messagess[message.author.id] = {
     message: "Best Beginner"
   }
   fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
    if(err) console.log(err)
});
  }
  if(xp[message.author.id].level === 10) {
    let messagess = require("./message.json");
    if(!messagess[message.author.id]) {
      messagess[message.author.id] = {
        message: "Newcomer"
      }
    }
   messagess[message.author.id] = {
     message: "Advanced Beginner"
   }
   fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
    if(err) console.log(err)
});
  }
  if(xp[message.author.id].level === 12) {
    let messagess = require("./message.json");
    if(!messagess[message.author.id]) {
      messagess[message.author.id] = {
        message: "Newcomer"
      }
    }
   messagess[message.author.id] = {
     message: "Early Professor"
   }
   fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
    if(err) console.log(err)
});
  }
  if(xp[message.author.id].level === 15) {
    let messagess = require("./message.json");
    if(!messagess[message.author.id]) {
      messagess[message.author.id] = {
        message: "Newcomer"
      }
    }
   messagess[message.author.id] = {
     message: "Professor"
   }
   fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
    if(err) console.log(err)
});
  }
  if(xp[message.author.id].level === 20) {
    let messagess = require("./message.json");
    if(!messagess[message.author.id]) {
      messagess[message.author.id] = {
        message: "Newcomer"
      }
    }
   messagess[message.author.id] = {
     message: "Experienced Professor"
   }
   fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
    if(err) console.log(err)
});
  }
  if(xp[message.author.id].level === 25) {
    let messagess = require("./message.json");
    if(!messagess[message.author.id]) {
      messagess[message.author.id] = {
        message: "Newcomer"
      }
    }
   messagess[message.author.id] = {
     message: "Expert"
   }
   fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
    if(err) console.log(err)
});
}
if(xp[message.author.id].level === 30) {
  let messagess = require("./message.json");
  if(!messagess[message.author.id]) {
    messagess[message.author.id] = {
      message: "Newcomer"
    }
  }
 messagess[message.author.id] = {
   message: "Specialist"
 }
 fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
  if(err) console.log(err)
});
}
if(xp[message.author.id].level === 35) {
  let messagess = require("./message.json");
  if(!messagess[message.author.id]) {
    messagess[message.author.id] = {
      message: "Newcomer"
    }
  }
 messagess[message.author.id] = {
   message: "Early Commander"
 }
 fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
  if(err) console.log(err)
});
}
if(xp[message.author.id].level === 40) {
  let messagess = require("./message.json");
  if(!messagess[message.author.id]) {
    messagess[message.author.id] = {
      message: "Newcomer"
    }
  }
 messagess[message.author.id] = {
   message: "Commander"
 }
 fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
  if(err) console.log(err)
});
}
if(xp[message.author.id].level === 45) {
  let messagess = require("./message.json");
  if(!messagess[message.author.id]) {
    messagess[message.author.id] = {
      message: "Newcomer"
    }
  }
 messagess[message.author.id] = {
   message: "Agent"
 }
 fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
  if(err) console.log(err)
});
}
if(xp[message.author.id].level === 50) {
  let messagess = require("./message.json");
  if(!messagess[message.author.id]) {
    messagess[message.author.id] = {
      message: "Newcomer"
    }
  }
 messagess[message.author.id] = {
   message: "First Agent"
 }
 fs.writeFile("./message.json", JSON.stringify(messagess), (err) => {
  if(err) console.log(err)
});
}



  
if(!message.content.startsWith(prefix)) return;


let language = JSON.parse(fs.readFileSync("./language.json", "utf8"));
if(!language[message.guild.id]) {
  language[message.guild.id] = {
    language: "us"
  }
}
let la = language[message.guild.id].language
 
let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
if(blacklist[message.author.id]) {
  message.author.send(`You have been blocked by the bot owner and can no longer execute commands.`).then(msg => {msg.delete(2000)});
  return;
}
client.afk = new Map();
  
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args,la)
  });
  
client.login(process.env.TOKEN);

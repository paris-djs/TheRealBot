const Discord = require("discord.js");
const fs = require("fs");


module.exports.run = async (client, message, args, la) => {
    if(la === "de") {
if(args[0] === "sounds") {
  const embed = new Discord.RichEmbed()
  .setAuthor(`Sounds Help Seite 1`)
  .setDescription(`
**!play error**  
**!play windows**
**!play fbi open up**
**!play sad violine**
**!play run**
**!play fail**
**!play ea**
  `)
  .setFooter(`Sende Sounds in unser Discord Server! -> !bot info`)
  message.author.send(embed)
            message.react("✅");
            return;
}
if(args[0] === "mod") {
  if(!message.member.hasPermission('MANAGE_GUILD')) {
    message.channel.send(`
Du hast keine Rechte dafür! **Missing Rights: MANAGE_GUILD**`)
return;
    }
  if(args[1] === "1") {  
  const embed = new Discord.RichEmbed()
  .setAuthor("Moderation Help Seite 1")
  .setDescription(`
  **!giveaway (Gewinner) (Zeit: z.B.: 10s , 10m ...) (Preis)** - Du kannst einen Preis zufällig verteilen. 
  **!ban (Spieler) (Grund)** - Bannt einen Spieler und schickt eine Ban Message in #log (Falls existiert).
  **!kick (Spieler) (Grund)** - Kickt einen Spieler und schickt eine Kick Message in #log (Falls existiert).
  **!warn (Spieler) (Grund)** - Warnt einen Spieler. Mit **!warms (Spieler)** kannst du alle Warns eines Spieler sehen. Ab 2 Warns wird er für 30min gemutet, ab 5 Warns wird er gebannt.
  **!addrole (Spieler) (Rolle ohne @)** - Gibt demjenigen Spieler die Rolle die ausgewählt wurde.
  **!removerole (Spieler) (Rolle ohne @)** - Entfernt demjenigen Spieler die Rolle die ausgewählt wurde.
  **!mute (Spieler) (Zeit)** - Mutet denjenigen Spieler. Bei Zeit müsst ihr für 10 Sekunden z.b. 10s hinschreiben, 10 Minuten 10min, 10 Stunden 10h, 10 Tage 10d usw.
  `)
message.author.send(embed)
message.react("✅");
return;
  }
  if(args[1] === "2") {
      
      const embed3 = new Discord.RichEmbed()
      .setAuthor("Moderation Help Seite 2")
      .setDescription(`
      **!say (Titel) (Farbe z.b. GOLD oder BLACK) (Channel ohne #) (Nachricht)** - Sendet eine Custom Embed Nachricht in den Chat.
     `)
     message.author.send(embed3)
     message.react("✅");
     return;
    }
  return message.channel.send(`Usage: **!help mod [1-2]**`)
  }
if(args[0] === "user") {
  if(args[1] === "1") {

    
    const embed = new Discord.RichEmbed()
    .setAuthor("Userhelp Seite 1")
    .setDescription(`
    **!steam (de/en) (Spiel Name)** - Zeigt Informationen über einen Steam Spiel z.b. Preis
    **!sound (Sound Name)** - Schickt eine Sound Datei in den Chat. Um alle Sounds zu sehen gib !sounds ein.
    **!serverinfo** - Zeigt Informationen über den Server auf dem du dich befindest.
    **!userinfo (Spieler)** - Zeigt Informationen über denjenigen Spieler! Wenn du keinen Spieler hinschreibst kommen Informationen über dich.
    **!ticket (Problem z.b. Bug) (Beschreibung)** - Schickt ein Channel in den Channel #tickets (Falls existiert).
    **!wetter (Stadt)** - Zeigt das Wetter derjenigen Stadt.
    **!attack (User)** - Du kannst sehen wer wen, wie stark schlägt, und es ist komplett Zufällig!
    `)
    message.author.send(embed)
    message.react("✅");
    return;
    }
    if(args[1] === "2") {        
        const embed3 = new Discord.RichEmbed()
        .setAuthor("Userhelp Seite 2")
        .setDescription(`
        **!math (Nummer) (Operator) (Nummer)** - Ein leichter Taschenrechner
        **!report (Spieler) (Grund)** - Reportet denjenigen Spieler in #reports (Falls existiert)
        **!mcserver (IP)** - Zeigt Informationen über einen Minecraft Java Server
        **!mcpeserver (IP)** - Zeigt Informationen über einen Minecraft Pocket Edition Server.
        **!qrcode (Text)** - Convertiert dein Text in ein QR Code.
        **!color (#Name)** - Der Admin muss Rollen mit einem # vor dem Namen erstellen und du bekommst dann die Rolle falls es welche gibt um alle Farben zu sehen gib !colors ein. 
        **!google (Text)** - Googlet deinen Text und schickt das Ergebnis in den Chat!
        `)
        message.author.send(embed3)
        message.react("✅");
        return;
        }
    
    if(args[1] === "3") {
        
        const embed5 = new Discord.RichEmbed()
        .setAuthor("Userhelp Seite 3")
        .setDescription(`
        **!timer (time)** - Startet ein Timer
        **!nick (Nickname) (Spieler)** - (Spieler) ist Optional wenn du den Spieler nicht angibst wird dein Nickname geändert!
        **!lyrics (Lied Name)** - Sendet dir die Lyrics des Liedes in den Chat.
        **!afk** - Du bekommst neben deinem Namen ein [AFK] Tag, damit alle sehen, dass du AFK bist. Um das rückgängig zu machen gib **!afk rm** ein!
        **!shorten (URL)** - Kürzt die URL (URL Shortener). `)
        message.author.send(embed5)
        message.react("✅");
        return;
    }
    
return message.channel.send(`
Usage: **!help user [1-3]**`)
}
if(args[0] === "economy") {
  let coin = JSON.parse(fs.readFileSync("./coin.json", "utf8"));
  if(!coin[message.guild.id]) {
    coin[message.guild.id] = {
      coin: "disabled"
    }
  }
  let ifenabled = coin[message.guild.id].coin;
  if(ifenabled === "enabled") {
    if(args[1] === "1") {
    const embed = new Discord.RichEmbed()
    .setAuthor(`Economy Help 1`)
    .setDescription(`
**!coins** - Zeigt deine Coins
**!pay (Spieler) (Anzahl)** - Gibt dem angegebenem Spieler Geld.
**!steal (Anzahl)** - Du stielst das angegebene Geld falls du es schaffst bekommst du das Vierfache falls du verlierst, verlierst du das angegebene Geld. (Du hast eine 25% Gewinn Chance!)
**!gamble (Anzahl)** - Du versucht das Glück in einem Casino falls du gewinnst bekommst du das Zweifache falls du verlierst, verlierst du das angegebene Geld. (Du hast eine 50% Gewinn Chance!)
**!shop (Item)** - Du kannst in diesem Shop Items kaufen und auch Premium für Coins.
**!items (Optional: Spieler)** - Zeigt deine Items an.
**!daily** - Du bekommst 400 Coins. Du kannst das jeden Tag 1 mal ausführen.
`)
message.author.send(embed)
message.react("✅");
return;
}
if(args[1] === "2") {
  const embed = new Discord.RichEmbed()
  .setAuthor(`Economy Help 2`)
  .setDescription(`
**!slots (Anzahl bis 500)** - Du kannst Geld verdienen und verlieren. 
  `)
  message.author.send(embed)
  message.react("✅");
  return;
}
}

}

if(args[0] === "setup") {
  if(!message.member.hasPermission('MANAGE_GUILD')) {
   return message.channel.send(`
Du hast keine Rechte dafür! **Fehlende Rechte: MANAGE_GUILD**`)
    }
    if(args[1] === "1") {
  const embed = new Discord.RichEmbed()
  .setAuthor(`Setup Help`)
  .setDescription(`
  **!setup prefix (Prefix)** - Ändert die Prefix des Servers.
  **!setup welcome (Willkommensrolle) (Willkommenskanal) (Willkommensnachricht)** - Stellt den Willkommenskanal ein und die Willkommensnachricht wo neue Spieler in dem Kanal mit der Nachricht begrüßt werden.
  **!setup leave (Leavechannel) (Leavenachricht)** - Stellt den Leavekanal ein und die Leavenachricht wo Spieler in dem Kanal mit der Nachricht verabschiedet werden falls sie den Server verlassen.
  **!setup verify (Verify Rolle) (Verifykanal)** - In dem angegebenen Kanal muss derjenige Spieler !verify in den Chat eingeben um (sich zu Verifizieren) die angegebene Rolle zu bekommen.
  **!setup ticket (Ticket Kanal)** - Stellt den Ticket Kanal für den Ticket Befehl ein wo die Tickets hingesendet werden.
  **!setup report (Report Kanal)** - Stellt den Report Kanal für den Report Befehl ein wo die Reports hingesendet werden.
  ~~**!setup coin (enable/disable)** - Aktiviert/Deaktiviert das Coin System.~~
  `)
message.author.send(embed)
message.react("✅");
return;
    }
    if(args[1] === "2") {
      const embed324 = new Discord.RichEmbed()
      .setAuthor(`Setup Help 2`)
      .setDescription(`
**!setup language (de/us)** - Ändert die Sprache des Servers.
**!setup news (Channel)** - Man kann danach mit !news (Nachricht) eine Embed-Neuigkeit senden!
**!setup log (Channel)** - Man sieht dann in diesem Channel wenn jemand gebannt, gekickt oder so wird.
**!setup adrole (Rolle ohne @) - Setzt die Werbungsrolle. Wenn die Rolle jemand hat, kann er Werbung machen. 
`)
      message.author.send(embed324)
      return;
    }
    return message.channel.send(`Usage: !help setup [1-2]`)
}

if(args[0] === "pictures") {
  const embed = new Discord.RichEmbed()
  .setAuthor("Picture Help")
  .setDescription(`
**!dog** - Sendet ein Random Hunde Bild in den Chat.
**!cat** - Sendet ein Random Katzen Bild in den Chat.
**!meme** - Sendet ein Random Meme in den Chat.
  `)
message.author.send(embed)
message.react("✅");
return;

}
if(args[0] == "premium") {
  const embed = new Discord.RichEmbed()
  .setAuthor("Premium Help")
  .setDescription(`
  Du bekommst +200 Coins pro Nachricht!
  Du kannst Commands früher testen, als User ohne Premium.
  **!talk (Nachricht)** - Du schreibst mit dem Bot.
  **!ytdl (YouTube URL mit youtube.com nicht .de)** - Der Bot sendet das Video in einer MP3 Datei in den Chat.
  **!translate (Sprache) (Text)** - Übersetzt den Text in die angegebene Sprache!
  Exklusiver Hintergrund beim **!coins** und **!level** Command!

  ~~Du hast noch kein Premium? Kauf Premium im Shop! -> !shop~~ Kommt später dieses Jahr wieder!
  `)
  message.author.send(embed)
  message.react("✅");
  return;
}
if(args[0] === "fun") {
  const embed2 = new Discord.RichEmbed()
  .setAuthor("Fun Help")
  .setDescription(`
  **!8ball** - Antwortet mit Ja oder nein.
  **!hack [Player]** - Hackt ein Spieler
  **!spoiler [Nachricht]** - Sendet eine Spoiler-Nachricht!
  `)
  message.author.send(embed2)
  message.react("✅");
  return;
}

}
const embed = new Discord.RichEmbed()
.setAuthor(`Help Command v1.2 --> (FÜR DIE HELP COMMANDS MÜSSEN PRIVAT NACHRICHT AKTIVERT SEIN) <--`)
.addField(`👤User`, `**!help user [1-4]**`)
.addField(`⚙️Setup (Benötigte Permission: MANAGE_GUILD)`, `**!help setup [1-2]**`)
.addField(`👻Fun`, `**!help fun**`)
.addField(`🔒Moderation (Benötigte Permission: MANAGE_GUILD)`, `**!help mod [1-2]**`)
.addField(`📷Pictures`, `**!help pictures**`)
.addField(`🔊Sounds`, `**!help sounds**`)
.addField(`💰Economy`, `**!help economy [1-2]**`)
.addField(`⭐Premium`, `**!help premium**`)
.setFooter(`Um Spieler zu Reporten gib !botreport (Spieler) (Bild Link) ein!`)
message.channel.send(embed)


if(la === "us") {
        if(args[0] === "mod") {
          if(!message.member.hasPermission('MANAGE_GUILD')) {
            message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_GUILD**`)
return;
            }
            if(args[1] === "1") {

            const embed2 = new Discord.RichEmbed()
            .setAuthor("Moderation Help page 1")
            .setDescription(`
            **!giveaway (Winner(s)) (Time: e.g.: 10s , 10m ...) (Prize)** - You can randomly giveaway a prize.
            **!ban (Player) (Reason)** - Banish a player and send a ban message in #log (if exists).
            **!kick (Reason)** - Kicks a player and sends a kick message in #log (if it exists).
            **!warn (Player) (Reason)** - Warns a player. With **!warns (player)** you can see all the warnings of one player. From 2 warnings he is muted for 30 minutes, from 5 warnings he is banned.
            **!addrole (Role without @)** - Gives the player the role that was selected.
            **!removerole (player) (role without @)** - Removes from the player the role selected.
            **!mute (player) (time)** - Mutes the player. At time you have to wait 10 seconds z.b. Write 10s, 10 minutes 10min, 10h 10h, 10d 10d etc.`)
            message.author.send(embed2)
            message.react("✅");
            return;
            }
            if(args[1] === "2") {
 
                const embed4 = new Discord.RichEmbed()
                .setAuthor("Moderation Help page 2")
                .setDescription(`
                **!say (Title) (Color z.b. GOLD or BLACK) (channel without #) (message)** - Sends a custom embed message in the chat.`)
     message.author.send(embed4)
     message.react("✅");
     return;
              }
            return message.channel.send(`Usage: **!help mod [1-2]**`)
            }
          if(args[0] === "user") {
            if(args[1] === "1") {
              const embed2 = new Discord.RichEmbed()
              .setAuthor("Userhelp page 1")
              .setDescription(`
              **!steam (en/de) (Game Name)** - Shows information about a Steam game eg. price
              **!sound (Sound Name)** - Sends a sound file to the chat. To see all the sounds, enter !sounds.
              **!serverinfo** - Shows information about the server you are on.
              **!userinfo (player)** - Shows information about the player! If you do not add a player, information about you will come up.
              **!ticket (problem e.g. bug) (description)** - Sends a channel to the channel #tickets (if exists).
              **!weather (City)** - Shows the weather of that city.
              **!attack (User)** - You attack the user and it's random who win!
              `)
message.author.send(embed2)
message.react("✅");
return;
              }
              if(args[1] === "2") {
                const embed4 = new Discord.RichEmbed()
                  .setAuthor("Userhelp page 2")
                  .setDescription(`
                  **!math (Number) (Operator) (Number)** - A simple calculator
                  **!report (Player) (Reason)** - Report the player in #reports (if exists)
                  **!mcserver (IP)** - Shows information about a Minecraft Java Server
                  **!mcpeserver (IP)** - Shows information about a Minecraft Pocket Edition server.
                  **!qrcode (text)** - Converts your text into a QR code.
                  **!color (#Name)** - The admin has to create roles with a # in front of the name and then you get the role if there are any colors. Enter !colors to see all the colors.
                  **!level** - You get XP per XP at 500 XP, you go up a level to see your level and your XP enter **!level**.
                  **!google (text)** - Search your text on Google and send the result to the chat!
                  `)
message.author.send(embed4)
message.react("✅");
return;
                  }
              
              if(args[1] === "3") {
                  const embed6 = new Discord.RichEmbed()
                  .setAuthor("Userhelp page 3")
                  .setDescription(`
                  **!timer (Zeit)** - Starts a timer.
                  **!nick (nickname) (player)** - (player) is optional If you don't specify the player your nickname will be changed!
                  **!lyrics (Song name)** - Send the song lyrics to the chat
                  **!afk** - You'll get an [AFK] tag next to your name so everyone can see you're AFK. To undo this, enter **!afk rm**!
                  **!shorten (URL)** - Shorten the URL (URL shortener).`)
                  message.author.send(embed6)
                  message.react("✅");
                  return;

              }

          return message.channel.send(`
          Usage: **!help user [1-3]**`)
          }
          if(args[0] === "economy") {
          
              if(args[1] === "1") {
          const embed2 = new Discord.RichEmbed()
          .setAuthor(`Economy Help 1`)
          .setDescription(`
          **!coins** - Shows your coins.
          **!pay** - Gives the specified player money
          **!steal (number)** - You steal the given money If you manage it you will get four times if you lose, you lose the specified money. (You have a 25% win chance!)
          **!gamble (amount)** - You try the luck in a casino if you win you get twice if you lose, you lose the specified money. (You have a 50% chance of winning!)
          **!shop (Item)** - You can buy items in this shop and also premium for coins.
          **!items (Optional: Player)** - Displays your items.
          **!gift (Player) (Item)** - Gives the item to the specified player.
          `)
          message.author.send(embed2)
          message.react("✅");
          return;
          }
          if(args[1] === "2") {
            const embed  = new Discord.RichEmbed()
            .setAuthor(`Economy Help 2`)
            .setDescription(`
**!slots (Amount till 500)** - You'll win or lose coins!
            
            `)
            message.author.send(embed)
            return;
          }

        }
          if(args[0] === "setup") {
            if(!message.member.hasPermission('MANAGE_GUILD')) {
              message.channel.send(`
You do not have rights for this! **Missing Rights: MANAGE_GUILD**`)
return;
              }
              if(args[1] === "1")  {
            const embed2 = new Discord.RichEmbed()
            .setAuthor(`Setup Help`)
            .setDescription(`
            **!setup prefix (prefix)** - Changes the prefix of the server.
            **!setup welcome (welcomerole) (welcomechannel) (welcome message)** - Set the welcome channel and the welcome message where new players in the channel will be greeted with the message.
            **!setup leave (Leavechannel) (leave message)** - Sets the Leave channel and Leave message where players in the channel will be dismissed with the message if they leave the server.
            **!setup verify (Verify Role)** - In the specified channel, the player must enter !verify in the chat to get (verified) the specified role.
            **!setup ticket (Ticketchannel)** - Sets the ticket channel for the ticket command where the tickets are sent.
            **!setup report (Reportchannel)** - Sets the report channel for the report command where the reports are sent.
            **!setup Coin (enable/disable)** - Enabled/Disabled the Coin System.
            `)
            message.author.send(embed2)
            message.react("✅");
            return;
              }
              if(args[1] === "2") {
                const embed4 = new Discord.RichEmbed()
                .setAuthor(`Setup Help 2`)
                .setDescription(`
**!setup language (de/us)** - Sets the language of the Server.
**!setup news (Channel) - With !news you can send news in this channel!
**!setup log (Channel)** - Sets the log channel.
**!setup adrole (Role without @) - Sets the adrole. If you have this role you can make advertising.
                `)
                message.channel.send(embed4)
                message.react("✅");
                return;
              }
              return message.channel.send(`Usage: !help setup [1-2]`)
          }
          
          if(args[0] === "pictures") {
          const embed2 = new Discord.RichEmbed()
          .setAuthor("Picture Help")
          .setDescription(`
          **!dog** - Sends a Random Dog images into the chat.
          **!cat** - Sends a Random Cat images into the chat.
          **!meme** - Sends a Random Memes into the chat.
          `)
          message.author.send(embed2)
          message.react("✅");
          return;
          }
          if(args[0] === "fun") {
            const embed2 = new Discord.RichEmbed()
            .setAuthor("Fun Help")
            .setDescription(`
            **!8ball** - Ask a yes or no question and the bot answers you.
            **!hack [Player]** - Hacks a player.
            **!spoiler [Message]** - Sends a spoiler-message!
            `)
            message.author.send(embed2)
            return;
          }
          if(args[0] === "sounds") {
            const embed = new Discord.RichEmbed()
            .setAuthor(`Sounds Help Seite 1`)
            .setDescription(`
          **!play error**  
          **!play windows**
          **!play fbi open up**
          **!play sad violine**
          **!play run**
          **!play fail**
          **!play ea**
            `)
            .setFooter(`Send us meme sounds in our discord Server -> !bot info`)
            message.author.send(embed)
            message.react("✅");
            return;
          }
          if(args[0] == "premium") {
            const embed = new Discord.RichEmbed()
            .setAuthor("Premium Help")
            .setDescription(`
            You'll get +200 Coins per message!
            You can test commands earlier than normal users!
            **!talk (Message)** - You write with the Bot.
            **!ytdl (YouTube Link with youtube.com not de or anything) - Sends the video in a MP3 File in the Chat
            **!translate (Language) (Text)** - Translates the text into the specified language
            Exclusiv wallpaper in the **!coins** and **!level** Commands!

            ~~You do not have Premium? Buy Premium in the Shop! -> !shop~~ Comes back later this year!~~You do not have Premium? Buy Premium in the Shop! -> !shop~~ Comes back later this year!
            `)
            
            message.author.send(embed)
            message.react("✅");
            return 
          }
          const embed = new Discord.RichEmbed()
          .setAuthor(`Help Command v1.2 --> (FOR THE HELP COMMANDS PRIVATE MESSAGE MUST BE ACTIVATED) <--`)
          .addField(`👤User`, `**!help user [1-4]**`)
          .addField(`⚙️Setup (Requires Permission: MANAGE_GUILD)`, `**!help setup [1-2]**`)
          .addField(`👻Fun`, `**!help fun**`)
          .addField(`🔒Moderation (Requires Permission: MANAGE_GUILD`, `**!help mod [1-2]**`)
          .addField(`📷Pictures`, `**!help pictures**`)
.addField(`🔊Sounds`, `**!help sounds**`)
          .addField(`💰Economy`, `**!help economy [1-2]**`)
          .addField(`⭐Premium`, `**!help premium**`)
          message.author.send(embed)
          message.react("✅");
          return 
    }
}


  module.exports.help = {
    name: "help",
    aliases: []
  }

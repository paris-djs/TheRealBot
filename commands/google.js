const Discord = require("discord.js");
const google = require("google");

module.exports.run = async (client, message, args, la) => {
  if(la === "de") {
if(!args.slice(0).join(" ")) return message.channel.send(`
Du musst einen Text angeben!`)
  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return void(0)
    }
      if (link.href == null)    {
      return void(0)
    }
      const embed = new Discord.RichEmbed()
        .setAuthor(`Google such Ergebnis für ${args}`.split(',').join(' '))
        .setColor('#ffc1cc')
        .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
        .addField('Website', link.title)
        .addField('Beschreibung', link.description)
        .addField('URL', link.href)
     message.channel.send(embed)   
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) res.next()
    }

  });
}
if(la === "us") {
  if(!args.slice(0).join(" ")) return message.channel.send(`
You have to specify the text!`)
      google.resultsPerPage = 1
      google.protocol = 'https'
      var nextCounter = 0
    
      google(args, function (err, res) {
        if (err) console.log(err);
    
        for (var i = 0; i < res.links.length; ++i) {
          var link = res.links[i];
          if (link.title == null) {
          return void(0)
        }
          if (link.href == null)    {
          return void(0)
        }
          const embed = new Discord.RichEmbed()
            .setAuthor(`Google search result for ${args}`.split(',').join(' '))
            .setColor('#ffc1cc')
            .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
            .addField('Website', link.title)
            .addField('Description', link.description)
            .addField('URL', link.href)
         message.channel.send(embed)   
        }
    
        if (nextCounter < 1) {
          nextCounter += 1
          if (res.next) res.next()
        }
    
      });
  }

}

module.exports.help = {
  name: "google"
}
const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args, la) => {
    if(la === "de") {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) console.log(err);
      if (result === undefined || result.length === 0) {
          message.channel.send(`
Du musst eine Stadt angeben!`)
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Wetter für ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Zeitzone',`${location.timezone}`, true)
          .addField('Temperatur',`${current.temperature}°C`, true)
          .addField('Gefühlt', `${current.feelslike}°C`, true)
          .addField('Wind',current.winddisplay, true)
          .addField('Luftfeuchtigkeit', `${current.humidity}%`, true)
          .setFooter(`${current.date}, ${current.observationtime}`)

message.channel.send(embed)
});
}
if(la === "us") {
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
          if (err) console.log(err);
          if (result === undefined || result.length === 0) {
              message.channel.send(`
You have to specify a city!`)
              return;
          }
          var current = result[0].current;
          var location = result[0].location;
    
              const embed2 = new Discord.RichEmbed()
              .setDescription(`**${current.skytext}**`)
              .setAuthor(`Weather for ${current.observationpoint}`)
              .setThumbnail(current.imageUrl)
              .setColor(0x00AE86)
              .addField('Timezone',`${location.timezone}`, true)
              .addField('Temperature',`${current.temperature}°C`, true)
              .addField('Feels like', `${current.feelslike}°C`, true)
              .addField('Wind',current.winddisplay, true)
              .addField('Humidity', `${current.humidity}%`, true)
              .setFooter(`${current.date}, ${current.observationtime}`)
    message.channel.send(embed2)
});
}
}
module.exports.help = {
    name: "weather"
}
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(client , message,args,la) => {
if(la === "de") {
const ip = args[0];
if(!ip) return message.channel.send("Du musst eine IP angeben!");
const port = args[1];
let msg = await message.channel.send(`
Rufe den Status ab...`)
let {body} = await superagent
.get('http://mcapi.us/server/status?ip=' + ip + '&port=' + port)
const pic = 'https://eu.mc-api.net/v3/server/favicon/' + ip
if(body.online === true) {
const embed = new Discord.RichEmbed()
.setAuthor(body.motd)
.addField(`Spieler:`, body.players.now + '/' + body.players.max)
.addField(`IP:`, ip)
.setThumbnail(pic)
message.channel.send(embed)
msg.delete();
return;
}
return message.channel.send("Der Server ist nicht Online oder existiert nicht!")
msg.delete();
}
if(la === "us") {
	const ip = args[0];
	if(!ip) return message.channel.send("You have to specify an ip!");
	const port = args[1];
	let msg = await message.channel.send(`
	Check the status...`)
	let {body} = await superagent
	.get('http://mcapi.us/server/status?ip=' + ip + '&port=' + port)
	const pic = 'https://eu.mc-api.net/v3/server/favicon/' + ip
	if(body.online === true) {
	const embed = new Discord.RichEmbed()
	.setAuthor(body.motd)
	.addField(`Players:`, body.players.now + '/' + body.players.max)
	.addField(`IP:`, ip)
	.setThumbnail(pic)
	message.channel.send(embed)
	msg.delete();
	return;
	}
	return message.channel.send("The Server isn't online or the server doesn't exist!")
	msg.delete();
}
}

module.exports.help = {
	name: "mcserver"
}
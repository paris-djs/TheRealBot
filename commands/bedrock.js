const Discord = require('discord.js');
const fs = require('fs')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports.run = async (client, message, args, la) => {
	if(la === "de") {
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
let prefix = prefixes[message.guild.id].prefixes;
}

function status(callback, username) {
	var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://mcapi.de/api/user/'+username, true);
      ourRequest.onload = () => {
		var ourData = JSON.parse(ourRequest.responseText);
		callback(null, checkStatus(ourData));
    };
	ourRequest.onerror = function() {
  		console.error(ourRequest.statusText);
	};
    ourRequest.send();
}

function checkStatus(data, channel){
    let Embed = new Discord.RichEmbed()
    .setTitle("**" + data.username + "**")
    .setColor("#15f153")
    .setDescription("Premium Account **" + data.premium + "**")

   return(Embed)
	} 



module.exports.run = async (client, message, args) => {
    
	var args = message.content.split(/[ ]+/);

	

		if(args.length === 1){
			message.channel.send(`
Du musst eine IP angeben!`);
		} else if (args.length === 2){
			status((error, result) => {
				if (error) {
					message.channel.send("error!");
					return;
				}
			message.channel.send(result);
		}, args[1]);
		} else {
			message.channel.send(`
Du musst eine IP angeben!`);
		}
	}
	if(la === "us") {
		let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
		let prefix = prefixes[message.guild.id].prefixes;
		}
		
		function status(callback, username) {
			var ourRequest = new XMLHttpRequest();
			ourRequest.open('GET', 'https://mcapi.de/api/user/'+username, true);
			  ourRequest.onload = () => {
				var ourData = JSON.parse(ourRequest.responseText);
				callback(null, checkStatus(ourData));
			};
			ourRequest.onerror = function() {
				  console.error(ourRequest.statusText);
			};
			ourRequest.send();
		}
		
		function checkStatus(data, channel){
			let Embed = new Discord.RichEmbed()
			.setTitle("**" + data.username + "**")
			.setColor("#15f153")
			.setDescription("Premium Account **" + data.premium + "**")
		
		   return(Embed)
			} 
		
		
		
		module.exports.run = async (client, message, args) => {
			
			var args = message.content.split(/[ ]+/);
		
			
		
				if(args.length === 1){
					message.channel.send(`
You have to specify an ip!
`);
				} else if (args.length === 2){
					status((error, result) => {
						if (error) {
							message.channel.send("error!");
							return;
						}
					message.channel.send(result);
				}, args[1]);
				} else {
					message.channel.send(`
You have to specify an ip!
`);
				
			}
	}
}

module.exports.help = {
	name: "mcspieler",
	aliases: []
  }

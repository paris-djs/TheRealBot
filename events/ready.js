const Discord = require("discord.js");


module.exports = (client) => {
console.log(`
Der Bot ist nun Online!

Server: ${client.guilds.size}
Kanäle: ${client.channels.size}
Spieler: ${client.users.size}
`)
setInterval(function() {


    statuses = [`TheRealBot | v2.7`, `TheRealBot | ${client.guilds.size} guilds`, `TheRealBot | ${client.channels.size} channels`, `TheRealBot | ${client.users.size} players`, `TheRealBot | Invite: !bot info`]
    result = statuses[Math.floor(Math.random() * statuses.length)]

    client.user.setActivity(result, {type: "WATCHING"})
}, 4000)

}

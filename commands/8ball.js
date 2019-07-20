const Discord = require("discord.js");


module.exports.run = async (client, message, args, la) => {
        if(la === "fr") {
                if(!args[0]) return message.channel.send(`
                Vous devez poser la question!
                `)
                if(!args[1]) return message.channel.send(`
                Veuillez poser une question plus longue!
                `)
                let replies = ["Oui.", "Non", "Je ne sais pas ce que c'est.", "Redemandez-moi plus tard.", "Bien sûr que oui.", "WTF Non", "C'est quoi, cette question?", "Pourquoi ça ?", "Oublie ça.", "Bien sûr que non.", "Non", "Bien sûr, j'en suis sûr.", "Je ne vois pas pourquoi pas.", "Oui.", "J'ai dit non.", "Je suis derrière vous 👀"];
                let resault = Math.floor((Math.random() * replies.length))
                let question = args.slice(0).join(" ");
                let ballembed = new Discord.RichEmbed()
                .setAuthor(message.author.tag)
                .setColor('RANDOM')
                .addField("Contester", question)
                .addField("Répliquer", replies[resault]);
                
                message.channel.send(ballembed)      
        }
    if(la === "de") {
if(!args[0]) return message.channel.send(`
Du musst die Frage angeben!
`)
if(!args[1]) return message.channel.send(`
Bitte frag eine längere Frage!
`)
let replies = ["Ja.", "Nein", "Keine Ahnung", "Frag mich später wieder", "Natürlich", "WTF Nein", "Was ist das für eine Frage?", "Aufkeinen fall.", "Warum das denn?", "Vergiss es.", "Natürlich nicht.", "Nö.", "Klar.", "Wieso nicht.", "Jap.", "ICH sagte NEIN.", "Aufjeden fall", "I'm behind you 👀"];
let resault = Math.floor((Math.random() * replies.length))
let question = args.slice(0).join(" ");
let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor('RANDOM')
.addField("Frage", question)
.addField("Antwort", replies[resault]);

message.channel.send(ballembed)
}

if(la === "us") {
        if(!args[0]) return message.channel.send(`
You have to specify the question!
        `)
        if(!args[1]) return message.channel.send(`
Please ask a longer question!
        `)
let replies = ["Yes.", "No", "No idea", "Ask me again later", "Of course", "WTF No", "What's that question?", "Why? ? "," Forget it. "," Of course not. "," Nope "," Sure. "," Why not. "," I said NO. "," I'm behind you 👀 "]
let resault = Math.floor((Math.random() * replies.length))
let question = args.slice(0).join(" ");
let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor('RANDOM')
    .addField('Question', question)
    .addField("Answer", replies[resault]);
    message.channel.send(ballembed)

}

}

module.exports.help = {
    name: "8ball"
}
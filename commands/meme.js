const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
module.exports.run = async (client, message, args, la) => {
    if(la === "de") {

let reddit = [
    "meme",
    "dankmemes",
    "dankmeme",
    "wholesomememes",
    "MemeEconomy",
    "techsupportanimals",
    "meirl",
    "me_irl",
    "2meirl4meirl",
    "AdviceAnimals"
]

let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

let msg = await message.channel.send(`
Generiere...`)

randomPuppy(subreddit).then(async url => {
        await message.channel.send({
            files: [{
                attachment: url,
                name: 'meme.png'
            }]
        }).then(() => msg.delete());
}).catch(err => console.error(err));

}
if(la === "us") {
    let reddit = [
        "meme",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
    ]
    
    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
    
    let msg = await message.channel.send(`
    Generating...`)
    
    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => msg.delete());
    }).catch(err => console.error(err));
}
}

module.exports.help = {
    name: "meme"
}
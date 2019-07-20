const snekfetch = require('snekfetch');
const Discord = require("discord.js");

exports.run = (client, msg, args, la) => {
  if(la === "de") {
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Achievement bekommen!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return msg.edit("Maximale länge: 22.").then(msg.delete.bind(msg), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));
  msg.delete();
  }
  if(la === "us") {
    let [title, contents] = args.join(" ").split("|");
    if(!contents) {
      [title, contents] = ["Achievement get!", title];
    }
    let rnd = Math.floor((Math.random() * 39) + 1);
    if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
    if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
    if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
  
    if(title.length > 22 || contents.length > 22) return msg.edit("Max Length: 22 Characters..").then(msg.delete.bind(msg), 2000);
    const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
    snekfetch.get(url)
     .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));
    msg.delete();
  }
};
module.exports.help = {
    name: "achievement"
}
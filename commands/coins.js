const Discord = require('discord.js');
const Canvas = require('canvas');
let xp = require("../xp.json");
let xplevel = require("../levelxp.json");
const premium = require("../premium.json");

module.exports.run = async(client,message,args,la) => {
  if(!premium[message.author.id]) {
    premium[message.author.id] = {
      premium: "false"
    }
  }
    if(la === "de") {
      if(premium[message.author.id].premium === "false") {
        if(!premium[message.author.id]) {
          premium[message.author.id] = {
            premium: "false"
          }
        }
        let coins = require("../coins.json");
          const applyText = (canvas, text) => {
              const ctx = canvas.getContext('2d');
          
              // Declare a base size of the font
              let fontSize = 60;
          
              do {
                  // Assign the font to the context and decrement it so it can be measured again
                  ctx.font = `${fontSize -= 10}px sans-serif`;
                  // Compare pixel width of the text to the canvas minus the approximate avatar size
              } while (ctx.measureText(text).width > canvas.width - 300);
          
              // Return the result to use in the actual canvas
              return ctx.font;
          }
          const applyText2 = (canvas, text) => {
              const ctx = canvas.getContext('2d');
          
              // Declare a base size of the font
              let fontSize = 40;
          
              do {
                  // Assign the font to the context and decrement it so it can be measured again
                  ctx.font = `${fontSize -= 10}px sans-serif`;
                  // Compare pixel width of the text to the canvas minus the approximate avatar size
              } while (ctx.measureText(text).width > canvas.width - 300);
          
              // Return the result to use in the actual canvas
              return ctx.font;
          }
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
      
        const background = await Canvas.loadImage('./wallpaper2.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      
        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      
        // Assign the decided font to the canvas
        ctx.font = applyText(canvas, `tt!`);
        ctx.fillStyle = '#f54242';
          ctx.fillText(`${message.author.username}`, canvas.width / 2.9, canvas.height / 4);
    
        ctx.font = 'italic small-caps bold 40px arial'
        ctx.fillStyle = '#000000';
        ctx.fillText(`Coins: ${coins[message.author.id].coins}`, canvas.width / 2.9, canvas.height / 1.7);
          
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
      
        const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
        ctx.drawImage(avatar, 25, 25, 200, 200);
      
        const attachment2 = new Discord.Attachment(canvas.toBuffer(), 'level2.png');
      
        message.channel.send(attachment2).then(msg => {msg.delete(5000)});
        message.delete();
      
  return;
}
if(!premium[message.author.id]) {
  premium[message.author.id] = {
    premium: "false"
  }
}
let coins = require("../coins.json");
  const applyText = (canvas, text) => {
      const ctx = canvas.getContext('2d');
  
      // Declare a base size of the font
      let fontSize = 55;
  
      do {
          // Assign the font to the context and decrement it so it can be measured again
          ctx.font = `${fontSize -= 10}px italic small-caps bold arial`;
          // Compare pixel width of the text to the canvas minus the approximate avatar size
      } while (ctx.measureText(text).width > canvas.width - 300);
  
      // Return the result to use in the actual canvas
      return ctx.font;
  }
  const applyText2 = (canvas, text) => {
      const ctx = canvas.getContext('2d');
  
      // Declare a base size of the font
      let fontSize = 40;
  
      do {
          // Assign the font to the context and decrement it so it can be measured again
          ctx.font = `italic small-caps bold 12px arial`;
          // Compare pixel width of the text to the canvas minus the approximate avatar size
      } while (ctx.measureText(text).width > canvas.width - 300);
  
      // Return the result to use in the actual canvas
      return ctx.font;
  }
const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background2 = await Canvas.loadImage('./wallpaper4.jpg');
	ctx.drawImage(background2, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Assign the decided font to the canvas
    ctx.font = applyText(canvas, `tt!`);
    ctx.fillStyle = '#f54242';
      ctx.fillText(`${message.author.username}`, canvas.width / 2.9, canvas.height / 4);

    ctx.font = 'italic small-caps bold 40px arial'
	ctx.fillStyle = '#ffffff';
    ctx.fillText(`Coins: ${coins[message.author.id].coins}`, canvas.width / 2.9, canvas.height / 1.7);

    
	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'level.png');

  message.channel.send(attachment).then(msg => {msg.delete(5000)});
  message.delete();
}
}
module.exports.help = {
    name: "coins"
}
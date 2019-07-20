const Discord = require("discord.js")
module.exports.run = async (client,message,args,la) => {
    if(args[0] === "run") {
        message.delete();
    message.channel.send({
        files: ['./run.mp3']
    });
    return;
    }
    if(args.slice(0).join(" ") === "sad violine") {
        message.delete();
        message.channel.send({
            files: ['./sad violine.mp3']
        });
        return;
        }
        if(args.slice(0).join(" ") === "fbi open up") {
            message.delete();
            message.channel.send({
                files: ['./fbi open up.mp3']
            });
            return;
            }
            if(args.slice(0).join(" ") === "windows") {
                message.delete();
                message.channel.send({
                    files: ['./windows.mp3']
                });
                return;
                }
                if(args.slice(0).join(" ") === "fail") {
                    message.delete();
                    message.channel.send({
                        files: ['./fail.mp3']
                    });
                    return;
                    }
                    if(args.slice(0).join(" ") === "error") {
                        message.delete();
                        message.channel.send({
                            files: ['./error.mp3']
                        });
                        return;
                        }
                        if(args.slice(0).join(" ") === "ea") {
                            message.delete();
                            message.channel.send({
                                files: ['./EEE EEEE.mp3']
                            });
                            return;
                            }
}
module.exports.help = {
    name: "play"
}


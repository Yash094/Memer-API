const Meme = require("../index");
const Discord = require("discord.js");
const client = new Discord.Client();
const memer = new Meme()
client.on("ready", () => {
    console.log("Memer is online!"); // eslint-disable-line no-console
});

client.on("message", async(message) => {
    if (!message.guild || message.author.bot) return;
    if (message.content === "!abandon") {
        let msg = message.content
        let image = await memer.abandon(msg);
        console.log(image)
        const attachment = new Discord.MessageAttachment(image, "spank.png");
        return message.channel.send(attachment);
    }
});

client.login("ODIxNzIyOTcxNzUxMTg2NDMy.YFH3Jw.X2uhN-b6venBtLAzN-BOyYd5s_g");

//Import the Module directly, as with an forc ;) as well as discord.js and create a new client for discord bot & memer Bot
const Meme = require("../index"),
    Discord = require("discord.js"),
    client = new Discord.Client(),
    memer = new Meme();

//Read Event 
client.on("ready", () => {
    console.log("Memer is online!"); // eslint-disable-line no-console
});

//Log Message
client.on("message", (message) => {
    //if in a dm or msg from a bot, return 
    if (!message.guild || message.author.bot) return; 

    const args = message.content.slice("!".length).split(" ");
    const cmd = args.shift().toLowerCase();
    
    if (cmd === "abandon") {
        //create image and send it in the channel 
        memer.abandon(args.join(" ")).then(image => {
            const attachment = new Discord.MessageAttachment(image, "spank.png");
            return message.channel.send(attachment);
        }).catch(e => {
            message.channel.send(String(e).substr(0, 2000), {code: "js"})
        })
    }
    
});

//login to the Discord Bot
client.login("YOUR DISCORD BOT TOKEN GOES HERE");

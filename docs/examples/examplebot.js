//Import the Module directly, as with an forc ;) as well as discord.js and create a new client for discord bot & memer Bot
const Meme = require("meme-api"),
    Discord = require("discord.js"),
    client = new Discord.Client(),
    memer = new Meme();

//login to the Discord Bot
client.login("YOUR DISCORD BOT TOKEN GOES HERE");

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
    //Example Command useage:  !abandon <TEXT>
    if (cmd === "abandon") {
        if(!args[0]) return message.reply("Unknown useage, try this: `!abandon <TEXT>`");
        //create image and send it in the channel  with the added arguments to the command
        memer.abandon(args.join(" ")).then(image => {
            const attachment = new Discord.MessageAttachment(image, "abandon.png");
            return message.channel.send(attachment);
        }).catch(e => {
            message.channel.send(String(e).substr(0, 2000), {code: "js"})
        })
    }
    
});